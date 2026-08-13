# `connectQueue` Submodule <a name="`connectQueue` Submodule" id="@cdktn/provider-awscc.connectQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectQueue <a name="ConnectQueue" id="@cdktn/provider-awscc.connectQueue.ConnectQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue awscc_connect_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_queue.ConnectQueue;

ConnectQueue.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .hoursOfOperationArn(java.lang.String)
    .instanceArn(java.lang.String)
    .name(java.lang.String)
//  .additionalEmailAddresses(IResolvable|java.util.List<ConnectQueueAdditionalEmailAddresses>)
//  .description(java.lang.String)
//  .maxContacts(java.lang.Number)
//  .outboundCallerConfig(ConnectQueueOutboundCallerConfig)
//  .outboundEmailConfig(ConnectQueueOutboundEmailConfig)
//  .quickConnectArns(java.util.List<java.lang.String>)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<ConnectQueueTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.hoursOfOperationArn">hoursOfOperationArn</a></code> | <code>java.lang.String</code> | The identifier for the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.additionalEmailAddresses">additionalEmailAddresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>></code> | The email addresses that agents can use when replying to or initiating email contacts. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.maxContacts">maxContacts</a></code> | <code>java.lang.Number</code> | The maximum number of contacts that can be in the queue before it is considered full. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.outboundCallerConfig">outboundCallerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | The outbound caller ID name, number, and outbound whisper flow. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.outboundEmailConfig">outboundEmailConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a></code> | The outbound email address ID. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.quickConnectArns">quickConnectArns</a></code> | <code>java.util.List<java.lang.String></code> | The quick connects available to agents who are working the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | The status of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hoursOfOperationArn`<sup>Required</sup> <a name="hoursOfOperationArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.hoursOfOperationArn"></a>

- *Type:* java.lang.String

The identifier for the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#hours_of_operation_arn ConnectQueue#hours_of_operation_arn}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#instance_arn ConnectQueue#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#name ConnectQueue#name}

---

##### `additionalEmailAddresses`<sup>Optional</sup> <a name="additionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.additionalEmailAddresses"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>>

The email addresses that agents can use when replying to or initiating email contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#additional_email_addresses ConnectQueue#additional_email_addresses}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#description ConnectQueue#description}

---

##### `maxContacts`<sup>Optional</sup> <a name="maxContacts" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.maxContacts"></a>

- *Type:* java.lang.Number

The maximum number of contacts that can be in the queue before it is considered full.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#max_contacts ConnectQueue#max_contacts}

---

##### `outboundCallerConfig`<sup>Optional</sup> <a name="outboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.outboundCallerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

The outbound caller ID name, number, and outbound whisper flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#outbound_caller_config ConnectQueue#outbound_caller_config}

---

##### `outboundEmailConfig`<sup>Optional</sup> <a name="outboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.outboundEmailConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

The outbound email address ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#outbound_email_config ConnectQueue#outbound_email_config}

---

##### `quickConnectArns`<sup>Optional</sup> <a name="quickConnectArns" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.quickConnectArns"></a>

- *Type:* java.util.List<java.lang.String>

The quick connects available to agents who are working the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#quick_connect_arns ConnectQueue#quick_connect_arns}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.status"></a>

- *Type:* java.lang.String

The status of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#status ConnectQueue#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#tags ConnectQueue#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.putAdditionalEmailAddresses">putAdditionalEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundCallerConfig">putOutboundCallerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundEmailConfig">putOutboundEmailConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetAdditionalEmailAddresses">resetAdditionalEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetMaxContacts">resetMaxContacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOutboundCallerConfig">resetOutboundCallerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOutboundEmailConfig">resetOutboundEmailConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetQuickConnectArns">resetQuickConnectArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalEmailAddresses` <a name="putAdditionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putAdditionalEmailAddresses"></a>

```java
public void putAdditionalEmailAddresses(IResolvable|java.util.List<ConnectQueueAdditionalEmailAddresses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putAdditionalEmailAddresses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>>

---

##### `putOutboundCallerConfig` <a name="putOutboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundCallerConfig"></a>

```java
public void putOutboundCallerConfig(ConnectQueueOutboundCallerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundCallerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

---

##### `putOutboundEmailConfig` <a name="putOutboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundEmailConfig"></a>

```java
public void putOutboundEmailConfig(ConnectQueueOutboundEmailConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putOutboundEmailConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ConnectQueueTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>>

---

##### `resetAdditionalEmailAddresses` <a name="resetAdditionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetAdditionalEmailAddresses"></a>

```java
public void resetAdditionalEmailAddresses()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMaxContacts` <a name="resetMaxContacts" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetMaxContacts"></a>

```java
public void resetMaxContacts()
```

##### `resetOutboundCallerConfig` <a name="resetOutboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOutboundCallerConfig"></a>

```java
public void resetOutboundCallerConfig()
```

##### `resetOutboundEmailConfig` <a name="resetOutboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetOutboundEmailConfig"></a>

```java
public void resetOutboundEmailConfig()
```

##### `resetQuickConnectArns` <a name="resetQuickConnectArns" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetQuickConnectArns"></a>

```java
public void resetQuickConnectArns()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectQueue resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isConstruct"></a>

```java
import io.cdktn.providers.awscc.connect_queue.ConnectQueue;

ConnectQueue.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.connect_queue.ConnectQueue;

ConnectQueue.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.connect_queue.ConnectQueue;

ConnectQueue.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.connect_queue.ConnectQueue;

ConnectQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConnectQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConnectQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.additionalEmailAddresses">additionalEmailAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList">ConnectQueueAdditionalEmailAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundCallerConfig">outboundCallerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference">ConnectQueueOutboundCallerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundEmailConfig">outboundEmailConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference">ConnectQueueOutboundEmailConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.queueArn">queueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList">ConnectQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.additionalEmailAddressesInput">additionalEmailAddressesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.hoursOfOperationArnInput">hoursOfOperationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.maxContactsInput">maxContactsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundCallerConfigInput">outboundCallerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundEmailConfigInput">outboundEmailConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.quickConnectArnsInput">quickConnectArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.hoursOfOperationArn">hoursOfOperationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.maxContacts">maxContacts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.quickConnectArns">quickConnectArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `additionalEmailAddresses`<sup>Required</sup> <a name="additionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.additionalEmailAddresses"></a>

```java
public ConnectQueueAdditionalEmailAddressesList getAdditionalEmailAddresses();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList">ConnectQueueAdditionalEmailAddressesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `outboundCallerConfig`<sup>Required</sup> <a name="outboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundCallerConfig"></a>

```java
public ConnectQueueOutboundCallerConfigOutputReference getOutboundCallerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference">ConnectQueueOutboundCallerConfigOutputReference</a>

---

##### `outboundEmailConfig`<sup>Required</sup> <a name="outboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundEmailConfig"></a>

```java
public ConnectQueueOutboundEmailConfigOutputReference getOutboundEmailConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference">ConnectQueueOutboundEmailConfigOutputReference</a>

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.queueArn"></a>

```java
public java.lang.String getQueueArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tags"></a>

```java
public ConnectQueueTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList">ConnectQueueTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `additionalEmailAddressesInput`<sup>Optional</sup> <a name="additionalEmailAddressesInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.additionalEmailAddressesInput"></a>

```java
public IResolvable|java.util.List<ConnectQueueAdditionalEmailAddresses> getAdditionalEmailAddressesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hoursOfOperationArnInput`<sup>Optional</sup> <a name="hoursOfOperationArnInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.hoursOfOperationArnInput"></a>

```java
public java.lang.String getHoursOfOperationArnInput();
```

- *Type:* java.lang.String

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `maxContactsInput`<sup>Optional</sup> <a name="maxContactsInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.maxContactsInput"></a>

```java
public java.lang.Number getMaxContactsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outboundCallerConfigInput`<sup>Optional</sup> <a name="outboundCallerConfigInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundCallerConfigInput"></a>

```java
public IResolvable|ConnectQueueOutboundCallerConfig getOutboundCallerConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

---

##### `outboundEmailConfigInput`<sup>Optional</sup> <a name="outboundEmailConfigInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.outboundEmailConfigInput"></a>

```java
public IResolvable|ConnectQueueOutboundEmailConfig getOutboundEmailConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

---

##### `quickConnectArnsInput`<sup>Optional</sup> <a name="quickConnectArnsInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.quickConnectArnsInput"></a>

```java
public java.util.List<java.lang.String> getQuickConnectArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ConnectQueueTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `hoursOfOperationArn`<sup>Required</sup> <a name="hoursOfOperationArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.hoursOfOperationArn"></a>

```java
public java.lang.String getHoursOfOperationArn();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `maxContacts`<sup>Required</sup> <a name="maxContacts" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.maxContacts"></a>

```java
public java.lang.Number getMaxContacts();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `quickConnectArns`<sup>Required</sup> <a name="quickConnectArns" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.quickConnectArns"></a>

```java
public java.util.List<java.lang.String> getQuickConnectArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectQueue.ConnectQueue.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectQueueAdditionalEmailAddresses <a name="ConnectQueueAdditionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_queue.ConnectQueueAdditionalEmailAddresses;

ConnectQueueAdditionalEmailAddresses.builder()
//  .emailAddressArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses.property.emailAddressArn">emailAddressArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the email address. |

---

##### `emailAddressArn`<sup>Optional</sup> <a name="emailAddressArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses.property.emailAddressArn"></a>

```java
public java.lang.String getEmailAddressArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#email_address_arn ConnectQueue#email_address_arn}

---

### ConnectQueueConfig <a name="ConnectQueueConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_queue.ConnectQueueConfig;

ConnectQueueConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .hoursOfOperationArn(java.lang.String)
    .instanceArn(java.lang.String)
    .name(java.lang.String)
//  .additionalEmailAddresses(IResolvable|java.util.List<ConnectQueueAdditionalEmailAddresses>)
//  .description(java.lang.String)
//  .maxContacts(java.lang.Number)
//  .outboundCallerConfig(ConnectQueueOutboundCallerConfig)
//  .outboundEmailConfig(ConnectQueueOutboundEmailConfig)
//  .quickConnectArns(java.util.List<java.lang.String>)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<ConnectQueueTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.hoursOfOperationArn">hoursOfOperationArn</a></code> | <code>java.lang.String</code> | The identifier for the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.additionalEmailAddresses">additionalEmailAddresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>></code> | The email addresses that agents can use when replying to or initiating email contacts. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.maxContacts">maxContacts</a></code> | <code>java.lang.Number</code> | The maximum number of contacts that can be in the queue before it is considered full. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.outboundCallerConfig">outboundCallerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | The outbound caller ID name, number, and outbound whisper flow. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.outboundEmailConfig">outboundEmailConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a></code> | The outbound email address ID. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.quickConnectArns">quickConnectArns</a></code> | <code>java.util.List<java.lang.String></code> | The quick connects available to agents who are working the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.status">status</a></code> | <code>java.lang.String</code> | The status of the queue. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hoursOfOperationArn`<sup>Required</sup> <a name="hoursOfOperationArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.hoursOfOperationArn"></a>

```java
public java.lang.String getHoursOfOperationArn();
```

- *Type:* java.lang.String

The identifier for the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#hours_of_operation_arn ConnectQueue#hours_of_operation_arn}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#instance_arn ConnectQueue#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#name ConnectQueue#name}

---

##### `additionalEmailAddresses`<sup>Optional</sup> <a name="additionalEmailAddresses" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.additionalEmailAddresses"></a>

```java
public IResolvable|java.util.List<ConnectQueueAdditionalEmailAddresses> getAdditionalEmailAddresses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>>

The email addresses that agents can use when replying to or initiating email contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#additional_email_addresses ConnectQueue#additional_email_addresses}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#description ConnectQueue#description}

---

##### `maxContacts`<sup>Optional</sup> <a name="maxContacts" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.maxContacts"></a>

```java
public java.lang.Number getMaxContacts();
```

- *Type:* java.lang.Number

The maximum number of contacts that can be in the queue before it is considered full.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#max_contacts ConnectQueue#max_contacts}

---

##### `outboundCallerConfig`<sup>Optional</sup> <a name="outboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.outboundCallerConfig"></a>

```java
public ConnectQueueOutboundCallerConfig getOutboundCallerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

The outbound caller ID name, number, and outbound whisper flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#outbound_caller_config ConnectQueue#outbound_caller_config}

---

##### `outboundEmailConfig`<sup>Optional</sup> <a name="outboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.outboundEmailConfig"></a>

```java
public ConnectQueueOutboundEmailConfig getOutboundEmailConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

The outbound email address ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#outbound_email_config ConnectQueue#outbound_email_config}

---

##### `quickConnectArns`<sup>Optional</sup> <a name="quickConnectArns" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.quickConnectArns"></a>

```java
public java.util.List<java.lang.String> getQuickConnectArns();
```

- *Type:* java.util.List<java.lang.String>

The quick connects available to agents who are working the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#quick_connect_arns ConnectQueue#quick_connect_arns}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The status of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#status ConnectQueue#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectQueue.ConnectQueueConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ConnectQueueTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#tags ConnectQueue#tags}

---

### ConnectQueueOutboundCallerConfig <a name="ConnectQueueOutboundCallerConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_queue.ConnectQueueOutboundCallerConfig;

ConnectQueueOutboundCallerConfig.builder()
//  .outboundCallerIdName(java.lang.String)
//  .outboundCallerIdNumberArn(java.lang.String)
//  .outboundFlowArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdName">outboundCallerIdName</a></code> | <code>java.lang.String</code> | The caller ID name. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdNumberArn">outboundCallerIdNumberArn</a></code> | <code>java.lang.String</code> | The caller ID number. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundFlowArn">outboundFlowArn</a></code> | <code>java.lang.String</code> | The outbound whisper flow to be used during an outbound call. |

---

##### `outboundCallerIdName`<sup>Optional</sup> <a name="outboundCallerIdName" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdName"></a>

```java
public java.lang.String getOutboundCallerIdName();
```

- *Type:* java.lang.String

The caller ID name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#outbound_caller_id_name ConnectQueue#outbound_caller_id_name}

---

##### `outboundCallerIdNumberArn`<sup>Optional</sup> <a name="outboundCallerIdNumberArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdNumberArn"></a>

```java
public java.lang.String getOutboundCallerIdNumberArn();
```

- *Type:* java.lang.String

The caller ID number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#outbound_caller_id_number_arn ConnectQueue#outbound_caller_id_number_arn}

---

##### `outboundFlowArn`<sup>Optional</sup> <a name="outboundFlowArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundFlowArn"></a>

```java
public java.lang.String getOutboundFlowArn();
```

- *Type:* java.lang.String

The outbound whisper flow to be used during an outbound call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#outbound_flow_arn ConnectQueue#outbound_flow_arn}

---

### ConnectQueueOutboundEmailConfig <a name="ConnectQueueOutboundEmailConfig" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_queue.ConnectQueueOutboundEmailConfig;

ConnectQueueOutboundEmailConfig.builder()
//  .outboundEmailAddressId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig.property.outboundEmailAddressId">outboundEmailAddressId</a></code> | <code>java.lang.String</code> | The email address connect resource ID. |

---

##### `outboundEmailAddressId`<sup>Optional</sup> <a name="outboundEmailAddressId" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig.property.outboundEmailAddressId"></a>

```java
public java.lang.String getOutboundEmailAddressId();
```

- *Type:* java.lang.String

The email address connect resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#outbound_email_address_id ConnectQueue#outbound_email_address_id}

---

### ConnectQueueTags <a name="ConnectQueueTags" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_queue.ConnectQueueTags;

ConnectQueueTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#key ConnectQueue#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_queue#value ConnectQueue#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectQueueAdditionalEmailAddressesList <a name="ConnectQueueAdditionalEmailAddressesList" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_queue.ConnectQueueAdditionalEmailAddressesList;

new ConnectQueueAdditionalEmailAddressesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.get"></a>

```java
public ConnectQueueAdditionalEmailAddressesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectQueueAdditionalEmailAddresses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>>

---


### ConnectQueueAdditionalEmailAddressesOutputReference <a name="ConnectQueueAdditionalEmailAddressesOutputReference" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_queue.ConnectQueueAdditionalEmailAddressesOutputReference;

new ConnectQueueAdditionalEmailAddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resetEmailAddressArn">resetEmailAddressArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddressArn` <a name="resetEmailAddressArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.resetEmailAddressArn"></a>

```java
public void resetEmailAddressArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.emailAddressArnInput">emailAddressArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.emailAddressArn">emailAddressArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailAddressArnInput`<sup>Optional</sup> <a name="emailAddressArnInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.emailAddressArnInput"></a>

```java
public java.lang.String getEmailAddressArnInput();
```

- *Type:* java.lang.String

---

##### `emailAddressArn`<sup>Required</sup> <a name="emailAddressArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.emailAddressArn"></a>

```java
public java.lang.String getEmailAddressArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddressesOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectQueueAdditionalEmailAddresses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueAdditionalEmailAddresses">ConnectQueueAdditionalEmailAddresses</a>

---


### ConnectQueueOutboundCallerConfigOutputReference <a name="ConnectQueueOutboundCallerConfigOutputReference" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_queue.ConnectQueueOutboundCallerConfigOutputReference;

new ConnectQueueOutboundCallerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdName">resetOutboundCallerIdName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdNumberArn">resetOutboundCallerIdNumberArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundFlowArn">resetOutboundFlowArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutboundCallerIdName` <a name="resetOutboundCallerIdName" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdName"></a>

```java
public void resetOutboundCallerIdName()
```

##### `resetOutboundCallerIdNumberArn` <a name="resetOutboundCallerIdNumberArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdNumberArn"></a>

```java
public void resetOutboundCallerIdNumberArn()
```

##### `resetOutboundFlowArn` <a name="resetOutboundFlowArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundFlowArn"></a>

```java
public void resetOutboundFlowArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNameInput">outboundCallerIdNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberArnInput">outboundCallerIdNumberArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowArnInput">outboundFlowArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdName">outboundCallerIdName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberArn">outboundCallerIdNumberArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowArn">outboundFlowArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outboundCallerIdNameInput`<sup>Optional</sup> <a name="outboundCallerIdNameInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNameInput"></a>

```java
public java.lang.String getOutboundCallerIdNameInput();
```

- *Type:* java.lang.String

---

##### `outboundCallerIdNumberArnInput`<sup>Optional</sup> <a name="outboundCallerIdNumberArnInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberArnInput"></a>

```java
public java.lang.String getOutboundCallerIdNumberArnInput();
```

- *Type:* java.lang.String

---

##### `outboundFlowArnInput`<sup>Optional</sup> <a name="outboundFlowArnInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowArnInput"></a>

```java
public java.lang.String getOutboundFlowArnInput();
```

- *Type:* java.lang.String

---

##### `outboundCallerIdName`<sup>Required</sup> <a name="outboundCallerIdName" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdName"></a>

```java
public java.lang.String getOutboundCallerIdName();
```

- *Type:* java.lang.String

---

##### `outboundCallerIdNumberArn`<sup>Required</sup> <a name="outboundCallerIdNumberArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberArn"></a>

```java
public java.lang.String getOutboundCallerIdNumberArn();
```

- *Type:* java.lang.String

---

##### `outboundFlowArn`<sup>Required</sup> <a name="outboundFlowArn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowArn"></a>

```java
public java.lang.String getOutboundFlowArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectQueueOutboundCallerConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

---


### ConnectQueueOutboundEmailConfigOutputReference <a name="ConnectQueueOutboundEmailConfigOutputReference" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_queue.ConnectQueueOutboundEmailConfigOutputReference;

new ConnectQueueOutboundEmailConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resetOutboundEmailAddressId">resetOutboundEmailAddressId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutboundEmailAddressId` <a name="resetOutboundEmailAddressId" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.resetOutboundEmailAddressId"></a>

```java
public void resetOutboundEmailAddressId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.outboundEmailAddressIdInput">outboundEmailAddressIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.outboundEmailAddressId">outboundEmailAddressId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outboundEmailAddressIdInput`<sup>Optional</sup> <a name="outboundEmailAddressIdInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.outboundEmailAddressIdInput"></a>

```java
public java.lang.String getOutboundEmailAddressIdInput();
```

- *Type:* java.lang.String

---

##### `outboundEmailAddressId`<sup>Required</sup> <a name="outboundEmailAddressId" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.outboundEmailAddressId"></a>

```java
public java.lang.String getOutboundEmailAddressId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectQueueOutboundEmailConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueOutboundEmailConfig">ConnectQueueOutboundEmailConfig</a>

---


### ConnectQueueTagsList <a name="ConnectQueueTagsList" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_queue.ConnectQueueTagsList;

new ConnectQueueTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.get"></a>

```java
public ConnectQueueTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectQueueTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>>

---


### ConnectQueueTagsOutputReference <a name="ConnectQueueTagsOutputReference" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_queue.ConnectQueueTagsOutputReference;

new ConnectQueueTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQueue.ConnectQueueTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectQueueTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQueue.ConnectQueueTags">ConnectQueueTags</a>

---



