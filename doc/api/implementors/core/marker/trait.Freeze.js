(function() {var implementors = {};
implementors["entity_system"] = [{"text":"impl Freeze for Entity","synthetic":true,"types":[]},{"text":"impl Freeze for EntityAllocator","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for EntityAllocatorIterator&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;EntityManagerComponentType&gt; Freeze for EntityManager&lt;EntityManagerComponentType&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;EntityManagerComponentType: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, EntityManagerComponentType&gt; Freeze for EntityIterator&lt;'a, EntityManagerComponentType&gt;","synthetic":true,"types":[]},{"text":"impl&lt;EntityManagerComponentType&gt; Freeze for Query&lt;EntityManagerComponentType&gt;","synthetic":true,"types":[]},{"text":"impl&lt;DispatcherType, EventAdapters, EventHandlerType, EventType&gt; Freeze for Connection&lt;DispatcherType, EventAdapters, EventHandlerType, EventType&gt;","synthetic":true,"types":[]},{"text":"impl&lt;EventType&gt; Freeze for Adapter&lt;EventType&gt;","synthetic":true,"types":[]},{"text":"impl&lt;EventAdapters&gt; !Freeze for EventDispatcher&lt;EventAdapters&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for BasicVecStorage&lt;T&gt;","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()