(function() {var implementors = {};
implementors["entity_system"] = [{"text":"impl Unpin for Entity","synthetic":true,"types":[]},{"text":"impl Unpin for EntityAllocator","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for EntityAllocatorIterator&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;EntityManagerComponentType&gt; Unpin for EntityManager&lt;EntityManagerComponentType&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;EntityManagerComponentType: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, EntityManagerComponentType&gt; Unpin for EntityIterator&lt;'a, EntityManagerComponentType&gt;","synthetic":true,"types":[]},{"text":"impl&lt;EntityManagerComponentType&gt; Unpin for Query&lt;EntityManagerComponentType&gt;","synthetic":true,"types":[]},{"text":"impl&lt;DispatcherType, EventAdapters, EventHandlerType, EventType&gt; Unpin for Connection&lt;DispatcherType, EventAdapters, EventHandlerType, EventType&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;EventAdapters: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;EventType: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;EventType&gt; Unpin for Adapter&lt;EventType&gt;","synthetic":true,"types":[]},{"text":"impl&lt;EventAdapters&gt; Unpin for EventDispatcher&lt;EventAdapters&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;EventAdapters: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for BasicVecStorage&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()