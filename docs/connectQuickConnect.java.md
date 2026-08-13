# `connectQuickConnect` Submodule <a name="`connectQuickConnect` Submodule" id="@cdktn/provider-awscc.connectQuickConnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectQuickConnect <a name="ConnectQuickConnect" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect awscc_connect_quick_connect}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnect;

ConnectQuickConnect.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
    .name(java.lang.String)
    .quickConnectConfig(ConnectQuickConnectQuickConnectConfig)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<ConnectQuickConnectTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the quick connect. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.quickConnectConfig">quickConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | Configuration settings for the quick connect. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the quick connect. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>></code> | One or more tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#instance_arn ConnectQuickConnect#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the quick connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#name ConnectQuickConnect#name}

---

##### `quickConnectConfig`<sup>Required</sup> <a name="quickConnectConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.quickConnectConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

Configuration settings for the quick connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#quick_connect_config ConnectQuickConnect#quick_connect_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the quick connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#description ConnectQuickConnect#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>>

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#tags ConnectQuickConnect#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig">putQuickConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putQuickConnectConfig` <a name="putQuickConnectConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig"></a>

```java
public void putQuickConnectConfig(ConnectQuickConnectQuickConnectConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.putQuickConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ConnectQuickConnectTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectQuickConnect resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isConstruct"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnect;

ConnectQuickConnect.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnect;

ConnectQuickConnect.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnect;

ConnectQuickConnect.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnect;

ConnectQuickConnect.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectQuickConnect.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConnectQuickConnect resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectQuickConnect to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectQuickConnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConnectQuickConnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.quickConnectArn">quickConnectArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfig">quickConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference">ConnectQuickConnectQuickConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.quickConnectType">quickConnectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList">ConnectQuickConnectTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfigInput">quickConnectConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `quickConnectArn`<sup>Required</sup> <a name="quickConnectArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.quickConnectArn"></a>

```java
public java.lang.String getQuickConnectArn();
```

- *Type:* java.lang.String

---

##### `quickConnectConfig`<sup>Required</sup> <a name="quickConnectConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfig"></a>

```java
public ConnectQuickConnectQuickConnectConfigOutputReference getQuickConnectConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference">ConnectQuickConnectQuickConnectConfigOutputReference</a>

---

##### `quickConnectType`<sup>Required</sup> <a name="quickConnectType" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.quickConnectType"></a>

```java
public java.lang.String getQuickConnectType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.tags"></a>

```java
public ConnectQuickConnectTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList">ConnectQuickConnectTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `quickConnectConfigInput`<sup>Optional</sup> <a name="quickConnectConfigInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.quickConnectConfigInput"></a>

```java
public IResolvable|ConnectQuickConnectQuickConnectConfig getQuickConnectConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ConnectQuickConnectTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnect.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectQuickConnectConfig <a name="ConnectQuickConnectConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnectConfig;

ConnectQuickConnectConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
    .name(java.lang.String)
    .quickConnectConfig(ConnectQuickConnectQuickConnectConfig)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<ConnectQuickConnectTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the quick connect. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.quickConnectConfig">quickConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | Configuration settings for the quick connect. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the quick connect. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>></code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#instance_arn ConnectQuickConnect#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the quick connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#name ConnectQuickConnect#name}

---

##### `quickConnectConfig`<sup>Required</sup> <a name="quickConnectConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.quickConnectConfig"></a>

```java
public ConnectQuickConnectQuickConnectConfig getQuickConnectConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

Configuration settings for the quick connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#quick_connect_config ConnectQuickConnect#quick_connect_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the quick connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#description ConnectQuickConnect#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ConnectQuickConnectTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>>

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#tags ConnectQuickConnect#tags}

---

### ConnectQuickConnectQuickConnectConfig <a name="ConnectQuickConnectQuickConnectConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnectQuickConnectConfig;

ConnectQuickConnectQuickConnectConfig.builder()
    .quickConnectType(java.lang.String)
//  .flowConfig(ConnectQuickConnectQuickConnectConfigFlowConfig)
//  .phoneConfig(ConnectQuickConnectQuickConnectConfigPhoneConfig)
//  .queueConfig(ConnectQuickConnectQuickConnectConfigQueueConfig)
//  .userConfig(ConnectQuickConnectQuickConnectConfigUserConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.quickConnectType">quickConnectType</a></code> | <code>java.lang.String</code> | The type of quick connect. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.flowConfig">flowConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig">ConnectQuickConnectQuickConnectConfigFlowConfig</a></code> | The flow configuration. This is required only if QuickConnectType is FLOW. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.phoneConfig">phoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a></code> | The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.queueConfig">queueConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a></code> | The queue configuration. This is required only if QuickConnectType is QUEUE. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.userConfig">userConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a></code> | The user configuration. This is required only if QuickConnectType is USER. |

---

##### `quickConnectType`<sup>Required</sup> <a name="quickConnectType" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.quickConnectType"></a>

```java
public java.lang.String getQuickConnectType();
```

- *Type:* java.lang.String

The type of quick connect.

In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#quick_connect_type ConnectQuickConnect#quick_connect_type}

---

##### `flowConfig`<sup>Optional</sup> <a name="flowConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.flowConfig"></a>

```java
public ConnectQuickConnectQuickConnectConfigFlowConfig getFlowConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig">ConnectQuickConnectQuickConnectConfigFlowConfig</a>

The flow configuration. This is required only if QuickConnectType is FLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#flow_config ConnectQuickConnect#flow_config}

---

##### `phoneConfig`<sup>Optional</sup> <a name="phoneConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.phoneConfig"></a>

```java
public ConnectQuickConnectQuickConnectConfigPhoneConfig getPhoneConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>

The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#phone_config ConnectQuickConnect#phone_config}

---

##### `queueConfig`<sup>Optional</sup> <a name="queueConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.queueConfig"></a>

```java
public ConnectQuickConnectQuickConnectConfigQueueConfig getQueueConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>

The queue configuration. This is required only if QuickConnectType is QUEUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#queue_config ConnectQuickConnect#queue_config}

---

##### `userConfig`<sup>Optional</sup> <a name="userConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig.property.userConfig"></a>

```java
public ConnectQuickConnectQuickConnectConfigUserConfig getUserConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>

The user configuration. This is required only if QuickConnectType is USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#user_config ConnectQuickConnect#user_config}

---

### ConnectQuickConnectQuickConnectConfigFlowConfig <a name="ConnectQuickConnectQuickConnectConfigFlowConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnectQuickConnectConfigFlowConfig;

ConnectQuickConnectQuickConnectConfigFlowConfig.builder()
//  .contactFlowArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig.property.contactFlowArn">contactFlowArn</a></code> | <code>java.lang.String</code> | The identifier of the contact flow. |

---

##### `contactFlowArn`<sup>Optional</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig.property.contactFlowArn"></a>

```java
public java.lang.String getContactFlowArn();
```

- *Type:* java.lang.String

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#contact_flow_arn ConnectQuickConnect#contact_flow_arn}

---

### ConnectQuickConnectQuickConnectConfigPhoneConfig <a name="ConnectQuickConnectQuickConnectConfigPhoneConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnectQuickConnectConfigPhoneConfig;

ConnectQuickConnectQuickConnectConfigPhoneConfig.builder()
//  .phoneNumber(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | The phone number in E.164 format. |

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

The phone number in E.164 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#phone_number ConnectQuickConnect#phone_number}

---

### ConnectQuickConnectQuickConnectConfigQueueConfig <a name="ConnectQuickConnectQuickConnectConfigQueueConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnectQuickConnectConfigQueueConfig;

ConnectQuickConnectQuickConnectConfigQueueConfig.builder()
//  .contactFlowArn(java.lang.String)
//  .queueArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.contactFlowArn">contactFlowArn</a></code> | <code>java.lang.String</code> | The identifier of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.queueArn">queueArn</a></code> | <code>java.lang.String</code> | The identifier for the queue. |

---

##### `contactFlowArn`<sup>Optional</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.contactFlowArn"></a>

```java
public java.lang.String getContactFlowArn();
```

- *Type:* java.lang.String

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#contact_flow_arn ConnectQuickConnect#contact_flow_arn}

---

##### `queueArn`<sup>Optional</sup> <a name="queueArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig.property.queueArn"></a>

```java
public java.lang.String getQueueArn();
```

- *Type:* java.lang.String

The identifier for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#queue_arn ConnectQuickConnect#queue_arn}

---

### ConnectQuickConnectQuickConnectConfigUserConfig <a name="ConnectQuickConnectQuickConnectConfigUserConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnectQuickConnectConfigUserConfig;

ConnectQuickConnectQuickConnectConfigUserConfig.builder()
//  .contactFlowArn(java.lang.String)
//  .userArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.contactFlowArn">contactFlowArn</a></code> | <code>java.lang.String</code> | The identifier of the contact flow. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.userArn">userArn</a></code> | <code>java.lang.String</code> | The identifier of the user. |

---

##### `contactFlowArn`<sup>Optional</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.contactFlowArn"></a>

```java
public java.lang.String getContactFlowArn();
```

- *Type:* java.lang.String

The identifier of the contact flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#contact_flow_arn ConnectQuickConnect#contact_flow_arn}

---

##### `userArn`<sup>Optional</sup> <a name="userArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig.property.userArn"></a>

```java
public java.lang.String getUserArn();
```

- *Type:* java.lang.String

The identifier of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#user_arn ConnectQuickConnect#user_arn}

---

### ConnectQuickConnectTags <a name="ConnectQuickConnectTags" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnectTags;

ConnectQuickConnectTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#key ConnectQuickConnect#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_quick_connect#value ConnectQuickConnect#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference;

new ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.resetContactFlowArn">resetContactFlowArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContactFlowArn` <a name="resetContactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.resetContactFlowArn"></a>

```java
public void resetContactFlowArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.contactFlowArnInput">contactFlowArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.contactFlowArn">contactFlowArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig">ConnectQuickConnectQuickConnectConfigFlowConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contactFlowArnInput`<sup>Optional</sup> <a name="contactFlowArnInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.contactFlowArnInput"></a>

```java
public java.lang.String getContactFlowArnInput();
```

- *Type:* java.lang.String

---

##### `contactFlowArn`<sup>Required</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.contactFlowArn"></a>

```java
public java.lang.String getContactFlowArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectQuickConnectQuickConnectConfigFlowConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig">ConnectQuickConnectQuickConnectConfigFlowConfig</a>

---


### ConnectQuickConnectQuickConnectConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigOutputReference" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnectQuickConnectConfigOutputReference;

new ConnectQuickConnectQuickConnectConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putFlowConfig">putFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putPhoneConfig">putPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putQueueConfig">putQueueConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putUserConfig">putUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetFlowConfig">resetFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetPhoneConfig">resetPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetQueueConfig">resetQueueConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetUserConfig">resetUserConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFlowConfig` <a name="putFlowConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putFlowConfig"></a>

```java
public void putFlowConfig(ConnectQuickConnectQuickConnectConfigFlowConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putFlowConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig">ConnectQuickConnectQuickConnectConfigFlowConfig</a>

---

##### `putPhoneConfig` <a name="putPhoneConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putPhoneConfig"></a>

```java
public void putPhoneConfig(ConnectQuickConnectQuickConnectConfigPhoneConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putPhoneConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>

---

##### `putQueueConfig` <a name="putQueueConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putQueueConfig"></a>

```java
public void putQueueConfig(ConnectQuickConnectQuickConnectConfigQueueConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putQueueConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>

---

##### `putUserConfig` <a name="putUserConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putUserConfig"></a>

```java
public void putUserConfig(ConnectQuickConnectQuickConnectConfigUserConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.putUserConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>

---

##### `resetFlowConfig` <a name="resetFlowConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetFlowConfig"></a>

```java
public void resetFlowConfig()
```

##### `resetPhoneConfig` <a name="resetPhoneConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetPhoneConfig"></a>

```java
public void resetPhoneConfig()
```

##### `resetQueueConfig` <a name="resetQueueConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetQueueConfig"></a>

```java
public void resetQueueConfig()
```

##### `resetUserConfig` <a name="resetUserConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.resetUserConfig"></a>

```java
public void resetUserConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.flowConfig">flowConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference">ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfig">phoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference">ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfig">queueConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference">ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfig">userConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference">ConnectQuickConnectQuickConnectConfigUserConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.flowConfigInput">flowConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig">ConnectQuickConnectQuickConnectConfigFlowConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfigInput">phoneConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfigInput">queueConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectTypeInput">quickConnectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfigInput">userConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectType">quickConnectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flowConfig`<sup>Required</sup> <a name="flowConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.flowConfig"></a>

```java
public ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference getFlowConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference">ConnectQuickConnectQuickConnectConfigFlowConfigOutputReference</a>

---

##### `phoneConfig`<sup>Required</sup> <a name="phoneConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfig"></a>

```java
public ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference getPhoneConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference">ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference</a>

---

##### `queueConfig`<sup>Required</sup> <a name="queueConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfig"></a>

```java
public ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference getQueueConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference">ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference</a>

---

##### `userConfig`<sup>Required</sup> <a name="userConfig" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfig"></a>

```java
public ConnectQuickConnectQuickConnectConfigUserConfigOutputReference getUserConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference">ConnectQuickConnectQuickConnectConfigUserConfigOutputReference</a>

---

##### `flowConfigInput`<sup>Optional</sup> <a name="flowConfigInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.flowConfigInput"></a>

```java
public IResolvable|ConnectQuickConnectQuickConnectConfigFlowConfig getFlowConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigFlowConfig">ConnectQuickConnectQuickConnectConfigFlowConfig</a>

---

##### `phoneConfigInput`<sup>Optional</sup> <a name="phoneConfigInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.phoneConfigInput"></a>

```java
public IResolvable|ConnectQuickConnectQuickConnectConfigPhoneConfig getPhoneConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>

---

##### `queueConfigInput`<sup>Optional</sup> <a name="queueConfigInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.queueConfigInput"></a>

```java
public IResolvable|ConnectQuickConnectQuickConnectConfigQueueConfig getQueueConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>

---

##### `quickConnectTypeInput`<sup>Optional</sup> <a name="quickConnectTypeInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectTypeInput"></a>

```java
public java.lang.String getQuickConnectTypeInput();
```

- *Type:* java.lang.String

---

##### `userConfigInput`<sup>Optional</sup> <a name="userConfigInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.userConfigInput"></a>

```java
public IResolvable|ConnectQuickConnectQuickConnectConfigUserConfig getUserConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>

---

##### `quickConnectType`<sup>Required</sup> <a name="quickConnectType" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.quickConnectType"></a>

```java
public java.lang.String getQuickConnectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectQuickConnectQuickConnectConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfig">ConnectQuickConnectQuickConnectConfig</a>

---


### ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference;

new ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectQuickConnectQuickConnectConfigPhoneConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigPhoneConfig">ConnectQuickConnectQuickConnectConfigPhoneConfig</a>

---


### ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference;

new ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resetContactFlowArn">resetContactFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resetQueueArn">resetQueueArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContactFlowArn` <a name="resetContactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resetContactFlowArn"></a>

```java
public void resetContactFlowArn()
```

##### `resetQueueArn` <a name="resetQueueArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.resetQueueArn"></a>

```java
public void resetQueueArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowArnInput">contactFlowArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueArnInput">queueArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowArn">contactFlowArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueArn">queueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contactFlowArnInput`<sup>Optional</sup> <a name="contactFlowArnInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowArnInput"></a>

```java
public java.lang.String getContactFlowArnInput();
```

- *Type:* java.lang.String

---

##### `queueArnInput`<sup>Optional</sup> <a name="queueArnInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueArnInput"></a>

```java
public java.lang.String getQueueArnInput();
```

- *Type:* java.lang.String

---

##### `contactFlowArn`<sup>Required</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.contactFlowArn"></a>

```java
public java.lang.String getContactFlowArn();
```

- *Type:* java.lang.String

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.queueArn"></a>

```java
public java.lang.String getQueueArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectQuickConnectQuickConnectConfigQueueConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigQueueConfig">ConnectQuickConnectQuickConnectConfigQueueConfig</a>

---


### ConnectQuickConnectQuickConnectConfigUserConfigOutputReference <a name="ConnectQuickConnectQuickConnectConfigUserConfigOutputReference" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference;

new ConnectQuickConnectQuickConnectConfigUserConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resetContactFlowArn">resetContactFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resetUserArn">resetUserArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContactFlowArn` <a name="resetContactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resetContactFlowArn"></a>

```java
public void resetContactFlowArn()
```

##### `resetUserArn` <a name="resetUserArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.resetUserArn"></a>

```java
public void resetUserArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowArnInput">contactFlowArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userArnInput">userArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowArn">contactFlowArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userArn">userArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contactFlowArnInput`<sup>Optional</sup> <a name="contactFlowArnInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowArnInput"></a>

```java
public java.lang.String getContactFlowArnInput();
```

- *Type:* java.lang.String

---

##### `userArnInput`<sup>Optional</sup> <a name="userArnInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userArnInput"></a>

```java
public java.lang.String getUserArnInput();
```

- *Type:* java.lang.String

---

##### `contactFlowArn`<sup>Required</sup> <a name="contactFlowArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.contactFlowArn"></a>

```java
public java.lang.String getContactFlowArn();
```

- *Type:* java.lang.String

---

##### `userArn`<sup>Required</sup> <a name="userArn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.userArn"></a>

```java
public java.lang.String getUserArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectQuickConnectQuickConnectConfigUserConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectQuickConnectConfigUserConfig">ConnectQuickConnectQuickConnectConfigUserConfig</a>

---


### ConnectQuickConnectTagsList <a name="ConnectQuickConnectTagsList" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnectTagsList;

new ConnectQuickConnectTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.get"></a>

```java
public ConnectQuickConnectTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectQuickConnectTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>>

---


### ConnectQuickConnectTagsOutputReference <a name="ConnectQuickConnectTagsOutputReference" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_quick_connect.ConnectQuickConnectTagsOutputReference;

new ConnectQuickConnectTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectQuickConnectTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectQuickConnect.ConnectQuickConnectTags">ConnectQuickConnectTags</a>

---



