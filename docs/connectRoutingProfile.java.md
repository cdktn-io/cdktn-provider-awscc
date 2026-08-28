# `connectRoutingProfile` Submodule <a name="`connectRoutingProfile` Submodule" id="@cdktn/provider-awscc.connectRoutingProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectRoutingProfile <a name="ConnectRoutingProfile" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile awscc_connect_routing_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfile;

ConnectRoutingProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .defaultOutboundQueueArn(java.lang.String)
    .description(java.lang.String)
    .instanceArn(java.lang.String)
    .mediaConcurrencies(IResolvable|java.util.List<ConnectRoutingProfileMediaConcurrencies>)
    .name(java.lang.String)
//  .agentAvailabilityTimer(java.lang.String)
//  .manualAssignmentQueueConfigs(IResolvable|java.util.List<ConnectRoutingProfileManualAssignmentQueueConfigs>)
//  .queueConfigs(IResolvable|java.util.List<ConnectRoutingProfileQueueConfigs>)
//  .tags(IResolvable|java.util.List<ConnectRoutingProfileTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.defaultOutboundQueueArn">defaultOutboundQueueArn</a></code> | <code>java.lang.String</code> | The identifier of the default outbound queue for this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.mediaConcurrencies">mediaConcurrencies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>></code> | The channels agents can handle in the Contact Control Panel (CCP) for this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.agentAvailabilityTimer">agentAvailabilityTimer</a></code> | <code>java.lang.String</code> | Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.manualAssignmentQueueConfigs">manualAssignmentQueueConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>></code> | The manual assignment queues to associate with this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.queueConfigs">queueConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>></code> | The queues to associate with this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultOutboundQueueArn`<sup>Required</sup> <a name="defaultOutboundQueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.defaultOutboundQueueArn"></a>

- *Type:* java.lang.String

The identifier of the default outbound queue for this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#default_outbound_queue_arn ConnectRoutingProfile#default_outbound_queue_arn}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#description ConnectRoutingProfile#description}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#instance_arn ConnectRoutingProfile#instance_arn}

---

##### `mediaConcurrencies`<sup>Required</sup> <a name="mediaConcurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.mediaConcurrencies"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>>

The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#media_concurrencies ConnectRoutingProfile#media_concurrencies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#name ConnectRoutingProfile#name}

---

##### `agentAvailabilityTimer`<sup>Optional</sup> <a name="agentAvailabilityTimer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.agentAvailabilityTimer"></a>

- *Type:* java.lang.String

Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#agent_availability_timer ConnectRoutingProfile#agent_availability_timer}

---

##### `manualAssignmentQueueConfigs`<sup>Optional</sup> <a name="manualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.manualAssignmentQueueConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>>

The manual assignment queues to associate with this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#manual_assignment_queue_configs ConnectRoutingProfile#manual_assignment_queue_configs}

---

##### `queueConfigs`<sup>Optional</sup> <a name="queueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.queueConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>>

The queues to associate with this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#queue_configs ConnectRoutingProfile#queue_configs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#tags ConnectRoutingProfile#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putManualAssignmentQueueConfigs">putManualAssignmentQueueConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies">putMediaConcurrencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs">putQueueConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetAgentAvailabilityTimer">resetAgentAvailabilityTimer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetManualAssignmentQueueConfigs">resetManualAssignmentQueueConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetQueueConfigs">resetQueueConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManualAssignmentQueueConfigs` <a name="putManualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putManualAssignmentQueueConfigs"></a>

```java
public void putManualAssignmentQueueConfigs(IResolvable|java.util.List<ConnectRoutingProfileManualAssignmentQueueConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putManualAssignmentQueueConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>>

---

##### `putMediaConcurrencies` <a name="putMediaConcurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies"></a>

```java
public void putMediaConcurrencies(IResolvable|java.util.List<ConnectRoutingProfileMediaConcurrencies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putMediaConcurrencies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>>

---

##### `putQueueConfigs` <a name="putQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs"></a>

```java
public void putQueueConfigs(IResolvable|java.util.List<ConnectRoutingProfileQueueConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putQueueConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ConnectRoutingProfileTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>>

---

##### `resetAgentAvailabilityTimer` <a name="resetAgentAvailabilityTimer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetAgentAvailabilityTimer"></a>

```java
public void resetAgentAvailabilityTimer()
```

##### `resetManualAssignmentQueueConfigs` <a name="resetManualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetManualAssignmentQueueConfigs"></a>

```java
public void resetManualAssignmentQueueConfigs()
```

##### `resetQueueConfigs` <a name="resetQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetQueueConfigs"></a>

```java
public void resetQueueConfigs()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectRoutingProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isConstruct"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfile;

ConnectRoutingProfile.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfile;

ConnectRoutingProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfile;

ConnectRoutingProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfile;

ConnectRoutingProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectRoutingProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConnectRoutingProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectRoutingProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectRoutingProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConnectRoutingProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.manualAssignmentQueueConfigs">manualAssignmentQueueConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList">ConnectRoutingProfileManualAssignmentQueueConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrencies">mediaConcurrencies</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList">ConnectRoutingProfileMediaConcurrenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigs">queueConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList">ConnectRoutingProfileQueueConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.routingProfileArn">routingProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList">ConnectRoutingProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.agentAvailabilityTimerInput">agentAvailabilityTimerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueArnInput">defaultOutboundQueueArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.manualAssignmentQueueConfigsInput">manualAssignmentQueueConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrenciesInput">mediaConcurrenciesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsInput">queueConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.agentAvailabilityTimer">agentAvailabilityTimer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueArn">defaultOutboundQueueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `manualAssignmentQueueConfigs`<sup>Required</sup> <a name="manualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.manualAssignmentQueueConfigs"></a>

```java
public ConnectRoutingProfileManualAssignmentQueueConfigsList getManualAssignmentQueueConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList">ConnectRoutingProfileManualAssignmentQueueConfigsList</a>

---

##### `mediaConcurrencies`<sup>Required</sup> <a name="mediaConcurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrencies"></a>

```java
public ConnectRoutingProfileMediaConcurrenciesList getMediaConcurrencies();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList">ConnectRoutingProfileMediaConcurrenciesList</a>

---

##### `queueConfigs`<sup>Required</sup> <a name="queueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigs"></a>

```java
public ConnectRoutingProfileQueueConfigsList getQueueConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList">ConnectRoutingProfileQueueConfigsList</a>

---

##### `routingProfileArn`<sup>Required</sup> <a name="routingProfileArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.routingProfileArn"></a>

```java
public java.lang.String getRoutingProfileArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tags"></a>

```java
public ConnectRoutingProfileTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList">ConnectRoutingProfileTagsList</a>

---

##### `agentAvailabilityTimerInput`<sup>Optional</sup> <a name="agentAvailabilityTimerInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.agentAvailabilityTimerInput"></a>

```java
public java.lang.String getAgentAvailabilityTimerInput();
```

- *Type:* java.lang.String

---

##### `defaultOutboundQueueArnInput`<sup>Optional</sup> <a name="defaultOutboundQueueArnInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueArnInput"></a>

```java
public java.lang.String getDefaultOutboundQueueArnInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `manualAssignmentQueueConfigsInput`<sup>Optional</sup> <a name="manualAssignmentQueueConfigsInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.manualAssignmentQueueConfigsInput"></a>

```java
public IResolvable|java.util.List<ConnectRoutingProfileManualAssignmentQueueConfigs> getManualAssignmentQueueConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>>

---

##### `mediaConcurrenciesInput`<sup>Optional</sup> <a name="mediaConcurrenciesInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.mediaConcurrenciesInput"></a>

```java
public IResolvable|java.util.List<ConnectRoutingProfileMediaConcurrencies> getMediaConcurrenciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queueConfigsInput`<sup>Optional</sup> <a name="queueConfigsInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.queueConfigsInput"></a>

```java
public IResolvable|java.util.List<ConnectRoutingProfileQueueConfigs> getQueueConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ConnectRoutingProfileTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>>

---

##### `agentAvailabilityTimer`<sup>Required</sup> <a name="agentAvailabilityTimer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.agentAvailabilityTimer"></a>

```java
public java.lang.String getAgentAvailabilityTimer();
```

- *Type:* java.lang.String

---

##### `defaultOutboundQueueArn`<sup>Required</sup> <a name="defaultOutboundQueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.defaultOutboundQueueArn"></a>

```java
public java.lang.String getDefaultOutboundQueueArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectRoutingProfileConfig <a name="ConnectRoutingProfileConfig" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileConfig;

ConnectRoutingProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .defaultOutboundQueueArn(java.lang.String)
    .description(java.lang.String)
    .instanceArn(java.lang.String)
    .mediaConcurrencies(IResolvable|java.util.List<ConnectRoutingProfileMediaConcurrencies>)
    .name(java.lang.String)
//  .agentAvailabilityTimer(java.lang.String)
//  .manualAssignmentQueueConfigs(IResolvable|java.util.List<ConnectRoutingProfileManualAssignmentQueueConfigs>)
//  .queueConfigs(IResolvable|java.util.List<ConnectRoutingProfileQueueConfigs>)
//  .tags(IResolvable|java.util.List<ConnectRoutingProfileTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.defaultOutboundQueueArn">defaultOutboundQueueArn</a></code> | <code>java.lang.String</code> | The identifier of the default outbound queue for this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.mediaConcurrencies">mediaConcurrencies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>></code> | The channels agents can handle in the Contact Control Panel (CCP) for this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.agentAvailabilityTimer">agentAvailabilityTimer</a></code> | <code>java.lang.String</code> | Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.manualAssignmentQueueConfigs">manualAssignmentQueueConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>></code> | The manual assignment queues to associate with this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.queueConfigs">queueConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>></code> | The queues to associate with this routing profile. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultOutboundQueueArn`<sup>Required</sup> <a name="defaultOutboundQueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.defaultOutboundQueueArn"></a>

```java
public java.lang.String getDefaultOutboundQueueArn();
```

- *Type:* java.lang.String

The identifier of the default outbound queue for this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#default_outbound_queue_arn ConnectRoutingProfile#default_outbound_queue_arn}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#description ConnectRoutingProfile#description}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#instance_arn ConnectRoutingProfile#instance_arn}

---

##### `mediaConcurrencies`<sup>Required</sup> <a name="mediaConcurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.mediaConcurrencies"></a>

```java
public IResolvable|java.util.List<ConnectRoutingProfileMediaConcurrencies> getMediaConcurrencies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>>

The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#media_concurrencies ConnectRoutingProfile#media_concurrencies}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#name ConnectRoutingProfile#name}

---

##### `agentAvailabilityTimer`<sup>Optional</sup> <a name="agentAvailabilityTimer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.agentAvailabilityTimer"></a>

```java
public java.lang.String getAgentAvailabilityTimer();
```

- *Type:* java.lang.String

Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#agent_availability_timer ConnectRoutingProfile#agent_availability_timer}

---

##### `manualAssignmentQueueConfigs`<sup>Optional</sup> <a name="manualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.manualAssignmentQueueConfigs"></a>

```java
public IResolvable|java.util.List<ConnectRoutingProfileManualAssignmentQueueConfigs> getManualAssignmentQueueConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>>

The manual assignment queues to associate with this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#manual_assignment_queue_configs ConnectRoutingProfile#manual_assignment_queue_configs}

---

##### `queueConfigs`<sup>Optional</sup> <a name="queueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.queueConfigs"></a>

```java
public IResolvable|java.util.List<ConnectRoutingProfileQueueConfigs> getQueueConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>>

The queues to associate with this routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#queue_configs ConnectRoutingProfile#queue_configs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ConnectRoutingProfileTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#tags ConnectRoutingProfile#tags}

---

### ConnectRoutingProfileManualAssignmentQueueConfigs <a name="ConnectRoutingProfileManualAssignmentQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileManualAssignmentQueueConfigs;

ConnectRoutingProfileManualAssignmentQueueConfigs.builder()
//  .queueReference(ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs.property.queueReference">queueReference</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a></code> | Contains the channel and queue identifier for a routing profile. |

---

##### `queueReference`<sup>Optional</sup> <a name="queueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs.property.queueReference"></a>

```java
public ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference getQueueReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a>

Contains the channel and queue identifier for a routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#queue_reference ConnectRoutingProfile#queue_reference}

---

### ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference <a name="ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference;

ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.builder()
//  .channel(java.lang.String)
//  .queueArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.property.channel">channel</a></code> | <code>java.lang.String</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.property.queueArn">queueArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the queue. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#channel ConnectRoutingProfile#channel}

---

##### `queueArn`<sup>Optional</sup> <a name="queueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference.property.queueArn"></a>

```java
public java.lang.String getQueueArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#queue_arn ConnectRoutingProfile#queue_arn}

---

### ConnectRoutingProfileMediaConcurrencies <a name="ConnectRoutingProfileMediaConcurrencies" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileMediaConcurrencies;

ConnectRoutingProfileMediaConcurrencies.builder()
    .channel(java.lang.String)
    .concurrency(java.lang.Number)
//  .crossChannelBehavior(ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.channel">channel</a></code> | <code>java.lang.String</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.concurrency">concurrency</a></code> | <code>java.lang.Number</code> | The number of contacts an agent can have on a channel simultaneously. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.crossChannelBehavior">crossChannelBehavior</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a></code> | Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#channel ConnectRoutingProfile#channel}

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.concurrency"></a>

```java
public java.lang.Number getConcurrency();
```

- *Type:* java.lang.Number

The number of contacts an agent can have on a channel simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#concurrency ConnectRoutingProfile#concurrency}

---

##### `crossChannelBehavior`<sup>Optional</sup> <a name="crossChannelBehavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies.property.crossChannelBehavior"></a>

```java
public ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior getCrossChannelBehavior();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a>

Defines the cross-channel routing behavior that allows an agent working on a contact in one channel to be offered a contact from a different channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#cross_channel_behavior ConnectRoutingProfile#cross_channel_behavior}

---

### ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior <a name="ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior;

ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior.builder()
//  .behaviorType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior.property.behaviorType">behaviorType</a></code> | <code>java.lang.String</code> | Specifies the other channels that can be routed to an agent handling their current channel. |

---

##### `behaviorType`<sup>Optional</sup> <a name="behaviorType" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior.property.behaviorType"></a>

```java
public java.lang.String getBehaviorType();
```

- *Type:* java.lang.String

Specifies the other channels that can be routed to an agent handling their current channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#behavior_type ConnectRoutingProfile#behavior_type}

---

### ConnectRoutingProfileQueueConfigs <a name="ConnectRoutingProfileQueueConfigs" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileQueueConfigs;

ConnectRoutingProfileQueueConfigs.builder()
//  .delay(java.lang.Number)
//  .priority(java.lang.Number)
//  .queueReference(ConnectRoutingProfileQueueConfigsQueueReference)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.delay">delay</a></code> | <code>java.lang.Number</code> | The delay, in seconds, a contact should wait in the queue before they are routed to an available agent. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.priority">priority</a></code> | <code>java.lang.Number</code> | The order in which contacts are to be handled for the queue. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.queueReference">queueReference</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a></code> | Contains the channel and queue identifier for a routing profile. |

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.delay"></a>

```java
public java.lang.Number getDelay();
```

- *Type:* java.lang.Number

The delay, in seconds, a contact should wait in the queue before they are routed to an available agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#delay ConnectRoutingProfile#delay}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The order in which contacts are to be handled for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#priority ConnectRoutingProfile#priority}

---

##### `queueReference`<sup>Optional</sup> <a name="queueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs.property.queueReference"></a>

```java
public ConnectRoutingProfileQueueConfigsQueueReference getQueueReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a>

Contains the channel and queue identifier for a routing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#queue_reference ConnectRoutingProfile#queue_reference}

---

### ConnectRoutingProfileQueueConfigsQueueReference <a name="ConnectRoutingProfileQueueConfigsQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileQueueConfigsQueueReference;

ConnectRoutingProfileQueueConfigsQueueReference.builder()
//  .channel(java.lang.String)
//  .queueArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.property.channel">channel</a></code> | <code>java.lang.String</code> | The channels that agents can handle in the Contact Control Panel (CCP). |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.property.queueArn">queueArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the queue. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

The channels that agents can handle in the Contact Control Panel (CCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#channel ConnectRoutingProfile#channel}

---

##### `queueArn`<sup>Optional</sup> <a name="queueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference.property.queueArn"></a>

```java
public java.lang.String getQueueArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#queue_arn ConnectRoutingProfile#queue_arn}

---

### ConnectRoutingProfileTags <a name="ConnectRoutingProfileTags" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileTags;

ConnectRoutingProfileTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#key ConnectRoutingProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_routing_profile#value ConnectRoutingProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectRoutingProfileManualAssignmentQueueConfigsList <a name="ConnectRoutingProfileManualAssignmentQueueConfigsList" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileManualAssignmentQueueConfigsList;

new ConnectRoutingProfileManualAssignmentQueueConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.get"></a>

```java
public ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectRoutingProfileManualAssignmentQueueConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>>

---


### ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference <a name="ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference;

new ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.putQueueReference">putQueueReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resetQueueReference">resetQueueReference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQueueReference` <a name="putQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.putQueueReference"></a>

```java
public void putQueueReference(ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.putQueueReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a>

---

##### `resetQueueReference` <a name="resetQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.resetQueueReference"></a>

```java
public void resetQueueReference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.queueReference">queueReference</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.queueReferenceInput">queueReferenceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queueReference`<sup>Required</sup> <a name="queueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.queueReference"></a>

```java
public ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference getQueueReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference</a>

---

##### `queueReferenceInput`<sup>Optional</sup> <a name="queueReferenceInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.queueReferenceInput"></a>

```java
public IResolvable|ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference getQueueReferenceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectRoutingProfileManualAssignmentQueueConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigs">ConnectRoutingProfileManualAssignmentQueueConfigs</a>

---


### ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference <a name="ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference;

new ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resetQueueArn">resetQueueArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resetChannel"></a>

```java
public void resetChannel()
```

##### `resetQueueArn` <a name="resetQueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.resetQueueArn"></a>

```java
public void resetQueueArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.queueArnInput">queueArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.queueArn">queueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `queueArnInput`<sup>Optional</sup> <a name="queueArnInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.queueArnInput"></a>

```java
public java.lang.String getQueueArnInput();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.queueArn"></a>

```java
public java.lang.String getQueueArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReferenceOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference">ConnectRoutingProfileManualAssignmentQueueConfigsQueueReference</a>

---


### ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference <a name="ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference;

new ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resetBehaviorType">resetBehaviorType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBehaviorType` <a name="resetBehaviorType" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resetBehaviorType"></a>

```java
public void resetBehaviorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorTypeInput">behaviorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorType">behaviorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `behaviorTypeInput`<sup>Optional</sup> <a name="behaviorTypeInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorTypeInput"></a>

```java
public java.lang.String getBehaviorTypeInput();
```

- *Type:* java.lang.String

---

##### `behaviorType`<sup>Required</sup> <a name="behaviorType" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorType"></a>

```java
public java.lang.String getBehaviorType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a>

---


### ConnectRoutingProfileMediaConcurrenciesList <a name="ConnectRoutingProfileMediaConcurrenciesList" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileMediaConcurrenciesList;

new ConnectRoutingProfileMediaConcurrenciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get"></a>

```java
public ConnectRoutingProfileMediaConcurrenciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectRoutingProfileMediaConcurrencies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>>

---


### ConnectRoutingProfileMediaConcurrenciesOutputReference <a name="ConnectRoutingProfileMediaConcurrenciesOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileMediaConcurrenciesOutputReference;

new ConnectRoutingProfileMediaConcurrenciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.putCrossChannelBehavior">putCrossChannelBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resetCrossChannelBehavior">resetCrossChannelBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrossChannelBehavior` <a name="putCrossChannelBehavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.putCrossChannelBehavior"></a>

```java
public void putCrossChannelBehavior(ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.putCrossChannelBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a>

---

##### `resetCrossChannelBehavior` <a name="resetCrossChannelBehavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.resetCrossChannelBehavior"></a>

```java
public void resetCrossChannelBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehavior">crossChannelBehavior</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrencyInput">concurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehaviorInput">crossChannelBehaviorInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency">concurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crossChannelBehavior`<sup>Required</sup> <a name="crossChannelBehavior" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehavior"></a>

```java
public ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference getCrossChannelBehavior();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference</a>

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `concurrencyInput`<sup>Optional</sup> <a name="concurrencyInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrencyInput"></a>

```java
public java.lang.Number getConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `crossChannelBehaviorInput`<sup>Optional</sup> <a name="crossChannelBehaviorInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehaviorInput"></a>

```java
public IResolvable|ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior getCrossChannelBehaviorInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">ConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency"></a>

```java
public java.lang.Number getConcurrency();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectRoutingProfileMediaConcurrencies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileMediaConcurrencies">ConnectRoutingProfileMediaConcurrencies</a>

---


### ConnectRoutingProfileQueueConfigsList <a name="ConnectRoutingProfileQueueConfigsList" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileQueueConfigsList;

new ConnectRoutingProfileQueueConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get"></a>

```java
public ConnectRoutingProfileQueueConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectRoutingProfileQueueConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>>

---


### ConnectRoutingProfileQueueConfigsOutputReference <a name="ConnectRoutingProfileQueueConfigsOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileQueueConfigsOutputReference;

new ConnectRoutingProfileQueueConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.putQueueReference">putQueueReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetDelay">resetDelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetQueueReference">resetQueueReference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQueueReference` <a name="putQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.putQueueReference"></a>

```java
public void putQueueReference(ConnectRoutingProfileQueueConfigsQueueReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.putQueueReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a>

---

##### `resetDelay` <a name="resetDelay" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetDelay"></a>

```java
public void resetDelay()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetQueueReference` <a name="resetQueueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.resetQueueReference"></a>

```java
public void resetQueueReference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueReference">queueReference</a></code> | <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference">ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delayInput">delayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueReferenceInput">queueReferenceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delay">delay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queueReference`<sup>Required</sup> <a name="queueReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueReference"></a>

```java
public ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference getQueueReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference">ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference</a>

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delayInput"></a>

```java
public java.lang.Number getDelayInput();
```

- *Type:* java.lang.Number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `queueReferenceInput`<sup>Optional</sup> <a name="queueReferenceInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.queueReferenceInput"></a>

```java
public IResolvable|ConnectRoutingProfileQueueConfigsQueueReference getQueueReferenceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a>

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.delay"></a>

```java
public java.lang.Number getDelay();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectRoutingProfileQueueConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigs">ConnectRoutingProfileQueueConfigs</a>

---


### ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference <a name="ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference;

new ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resetQueueArn">resetQueueArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resetChannel"></a>

```java
public void resetChannel()
```

##### `resetQueueArn` <a name="resetQueueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.resetQueueArn"></a>

```java
public void resetQueueArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.queueArnInput">queueArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.queueArn">queueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `queueArnInput`<sup>Optional</sup> <a name="queueArnInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.queueArnInput"></a>

```java
public java.lang.String getQueueArnInput();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.queueArn"></a>

```java
public java.lang.String getQueueArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReferenceOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectRoutingProfileQueueConfigsQueueReference getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileQueueConfigsQueueReference">ConnectRoutingProfileQueueConfigsQueueReference</a>

---


### ConnectRoutingProfileTagsList <a name="ConnectRoutingProfileTagsList" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileTagsList;

new ConnectRoutingProfileTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.get"></a>

```java
public ConnectRoutingProfileTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectRoutingProfileTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>>

---


### ConnectRoutingProfileTagsOutputReference <a name="ConnectRoutingProfileTagsOutputReference" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_routing_profile.ConnectRoutingProfileTagsOutputReference;

new ConnectRoutingProfileTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectRoutingProfileTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectRoutingProfile.ConnectRoutingProfileTags">ConnectRoutingProfileTags</a>

---



