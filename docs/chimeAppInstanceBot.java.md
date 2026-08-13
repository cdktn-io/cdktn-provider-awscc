# `chimeAppInstanceBot` Submodule <a name="`chimeAppInstanceBot` Submodule" id="@cdktn/provider-awscc.chimeAppInstanceBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeAppInstanceBot <a name="ChimeAppInstanceBot" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot awscc_chime_app_instance_bot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_bot.ChimeAppInstanceBot;

ChimeAppInstanceBot.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appInstanceArn(java.lang.String)
    .configuration(ChimeAppInstanceBotConfiguration)
//  .metadata(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<ChimeAppInstanceBotTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.appInstanceArn">appInstanceArn</a></code> | <code>java.lang.String</code> | The ARN of the AppInstance. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a></code> | A structure that contains configuration data. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | The metadata of the AppInstanceBot. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the AppInstanceBot. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>></code> | The tags assigned to the AppInstanceBot. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.appInstanceArn"></a>

- *Type:* java.lang.String

The ARN of the AppInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#app_instance_arn ChimeAppInstanceBot#app_instance_arn}

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

A structure that contains configuration data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#configuration ChimeAppInstanceBot#configuration}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

The metadata of the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#metadata ChimeAppInstanceBot#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#name ChimeAppInstanceBot#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>>

The tags assigned to the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#tags ChimeAppInstanceBot#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putConfiguration"></a>

```java
public void putConfiguration(ChimeAppInstanceBotConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ChimeAppInstanceBotTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>>

---

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeAppInstanceBot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isConstruct"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_bot.ChimeAppInstanceBot;

ChimeAppInstanceBot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_bot.ChimeAppInstanceBot;

ChimeAppInstanceBot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_bot.ChimeAppInstanceBot;

ChimeAppInstanceBot.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_bot.ChimeAppInstanceBot;

ChimeAppInstanceBot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChimeAppInstanceBot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChimeAppInstanceBot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChimeAppInstanceBot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChimeAppInstanceBot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChimeAppInstanceBot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceBotArn">appInstanceBotArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference">ChimeAppInstanceBotConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.createdTimestamp">createdTimestamp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList">ChimeAppInstanceBotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceArnInput">appInstanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.configurationInput">configurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceArn">appInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appInstanceBotArn`<sup>Required</sup> <a name="appInstanceBotArn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceBotArn"></a>

```java
public java.lang.String getAppInstanceBotArn();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.configuration"></a>

```java
public ChimeAppInstanceBotConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference">ChimeAppInstanceBotConfigurationOutputReference</a>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.createdTimestamp"></a>

```java
public java.lang.Number getCreatedTimestamp();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.lastUpdatedTimestamp"></a>

```java
public java.lang.Number getLastUpdatedTimestamp();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tags"></a>

```java
public ChimeAppInstanceBotTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList">ChimeAppInstanceBotTagsList</a>

---

##### `appInstanceArnInput`<sup>Optional</sup> <a name="appInstanceArnInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceArnInput"></a>

```java
public java.lang.String getAppInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.configurationInput"></a>

```java
public IResolvable|ChimeAppInstanceBotConfiguration getConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ChimeAppInstanceBotTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>>

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceArn"></a>

```java
public java.lang.String getAppInstanceArn();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeAppInstanceBotConfig <a name="ChimeAppInstanceBotConfig" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_bot.ChimeAppInstanceBotConfig;

ChimeAppInstanceBotConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appInstanceArn(java.lang.String)
    .configuration(ChimeAppInstanceBotConfiguration)
//  .metadata(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<ChimeAppInstanceBotTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.appInstanceArn">appInstanceArn</a></code> | <code>java.lang.String</code> | The ARN of the AppInstance. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a></code> | A structure that contains configuration data. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | The metadata of the AppInstanceBot. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the AppInstanceBot. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>></code> | The tags assigned to the AppInstanceBot. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appInstanceArn`<sup>Required</sup> <a name="appInstanceArn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.appInstanceArn"></a>

```java
public java.lang.String getAppInstanceArn();
```

- *Type:* java.lang.String

The ARN of the AppInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#app_instance_arn ChimeAppInstanceBot#app_instance_arn}

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.configuration"></a>

```java
public ChimeAppInstanceBotConfiguration getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

A structure that contains configuration data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#configuration ChimeAppInstanceBot#configuration}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

The metadata of the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#metadata ChimeAppInstanceBot#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#name ChimeAppInstanceBot#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ChimeAppInstanceBotTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>>

The tags assigned to the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#tags ChimeAppInstanceBot#tags}

---

### ChimeAppInstanceBotConfiguration <a name="ChimeAppInstanceBotConfiguration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_bot.ChimeAppInstanceBotConfiguration;

ChimeAppInstanceBotConfiguration.builder()
    .lex(ChimeAppInstanceBotConfigurationLex)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration.property.lex">lex</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a></code> | The configuration for an Amazon Lex V2 bot. |

---

##### `lex`<sup>Required</sup> <a name="lex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration.property.lex"></a>

```java
public ChimeAppInstanceBotConfigurationLex getLex();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a>

The configuration for an Amazon Lex V2 bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#lex ChimeAppInstanceBot#lex}

---

### ChimeAppInstanceBotConfigurationLex <a name="ChimeAppInstanceBotConfigurationLex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_bot.ChimeAppInstanceBotConfigurationLex;

ChimeAppInstanceBotConfigurationLex.builder()
    .lexBotAliasArn(java.lang.String)
    .localeId(java.lang.String)
//  .invokedBy(ChimeAppInstanceBotConfigurationLexInvokedBy)
//  .respondsTo(java.lang.String)
//  .welcomeIntent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.lexBotAliasArn">lexBotAliasArn</a></code> | <code>java.lang.String</code> | The ARN of the Amazon Lex V2 bot's alias. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.localeId">localeId</a></code> | <code>java.lang.String</code> | Identifies the Amazon Lex V2 bot's language and locale. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.invokedBy">invokedBy</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a></code> | Specifies the type of message that triggers a bot. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.respondsTo">respondsTo</a></code> | <code>java.lang.String</code> | Determines whether the Amazon Lex V2 bot responds to all standard messages. Control messages are not supported. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.welcomeIntent">welcomeIntent</a></code> | <code>java.lang.String</code> | The name of the welcome intent configured in the Amazon Lex V2 bot. |

---

##### `lexBotAliasArn`<sup>Required</sup> <a name="lexBotAliasArn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.lexBotAliasArn"></a>

```java
public java.lang.String getLexBotAliasArn();
```

- *Type:* java.lang.String

The ARN of the Amazon Lex V2 bot's alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#lex_bot_alias_arn ChimeAppInstanceBot#lex_bot_alias_arn}

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.localeId"></a>

```java
public java.lang.String getLocaleId();
```

- *Type:* java.lang.String

Identifies the Amazon Lex V2 bot's language and locale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#locale_id ChimeAppInstanceBot#locale_id}

---

##### `invokedBy`<sup>Optional</sup> <a name="invokedBy" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.invokedBy"></a>

```java
public ChimeAppInstanceBotConfigurationLexInvokedBy getInvokedBy();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a>

Specifies the type of message that triggers a bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#invoked_by ChimeAppInstanceBot#invoked_by}

---

##### `respondsTo`<sup>Optional</sup> <a name="respondsTo" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.respondsTo"></a>

```java
public java.lang.String getRespondsTo();
```

- *Type:* java.lang.String

Determines whether the Amazon Lex V2 bot responds to all standard messages. Control messages are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#responds_to ChimeAppInstanceBot#responds_to}

---

##### `welcomeIntent`<sup>Optional</sup> <a name="welcomeIntent" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.welcomeIntent"></a>

```java
public java.lang.String getWelcomeIntent();
```

- *Type:* java.lang.String

The name of the welcome intent configured in the Amazon Lex V2 bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#welcome_intent ChimeAppInstanceBot#welcome_intent}

---

### ChimeAppInstanceBotConfigurationLexInvokedBy <a name="ChimeAppInstanceBotConfigurationLexInvokedBy" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_bot.ChimeAppInstanceBotConfigurationLexInvokedBy;

ChimeAppInstanceBotConfigurationLexInvokedBy.builder()
//  .standardMessages(java.lang.String)
//  .targetedMessages(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.property.standardMessages">standardMessages</a></code> | <code>java.lang.String</code> | Sets standard messages as the bot trigger. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.property.targetedMessages">targetedMessages</a></code> | <code>java.lang.String</code> | Sets targeted messages as the bot trigger. |

---

##### `standardMessages`<sup>Optional</sup> <a name="standardMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.property.standardMessages"></a>

```java
public java.lang.String getStandardMessages();
```

- *Type:* java.lang.String

Sets standard messages as the bot trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#standard_messages ChimeAppInstanceBot#standard_messages}

---

##### `targetedMessages`<sup>Optional</sup> <a name="targetedMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.property.targetedMessages"></a>

```java
public java.lang.String getTargetedMessages();
```

- *Type:* java.lang.String

Sets targeted messages as the bot trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#targeted_messages ChimeAppInstanceBot#targeted_messages}

---

### ChimeAppInstanceBotTags <a name="ChimeAppInstanceBotTags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_bot.ChimeAppInstanceBotTags;

ChimeAppInstanceBotTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.property.key">key</a></code> | <code>java.lang.String</code> | The key in a tag. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.property.value">value</a></code> | <code>java.lang.String</code> | The value in a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#key ChimeAppInstanceBot#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/chime_app_instance_bot#value ChimeAppInstanceBot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeAppInstanceBotConfigurationLexInvokedByOutputReference <a name="ChimeAppInstanceBotConfigurationLexInvokedByOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_bot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference;

new ChimeAppInstanceBotConfigurationLexInvokedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resetStandardMessages">resetStandardMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resetTargetedMessages">resetTargetedMessages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStandardMessages` <a name="resetStandardMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resetStandardMessages"></a>

```java
public void resetStandardMessages()
```

##### `resetTargetedMessages` <a name="resetTargetedMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resetTargetedMessages"></a>

```java
public void resetTargetedMessages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessagesInput">standardMessagesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessagesInput">targetedMessagesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessages">standardMessages</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessages">targetedMessages</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `standardMessagesInput`<sup>Optional</sup> <a name="standardMessagesInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessagesInput"></a>

```java
public java.lang.String getStandardMessagesInput();
```

- *Type:* java.lang.String

---

##### `targetedMessagesInput`<sup>Optional</sup> <a name="targetedMessagesInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessagesInput"></a>

```java
public java.lang.String getTargetedMessagesInput();
```

- *Type:* java.lang.String

---

##### `standardMessages`<sup>Required</sup> <a name="standardMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessages"></a>

```java
public java.lang.String getStandardMessages();
```

- *Type:* java.lang.String

---

##### `targetedMessages`<sup>Required</sup> <a name="targetedMessages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessages"></a>

```java
public java.lang.String getTargetedMessages();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeAppInstanceBotConfigurationLexInvokedBy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a>

---


### ChimeAppInstanceBotConfigurationLexOutputReference <a name="ChimeAppInstanceBotConfigurationLexOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_bot.ChimeAppInstanceBotConfigurationLexOutputReference;

new ChimeAppInstanceBotConfigurationLexOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.putInvokedBy">putInvokedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetInvokedBy">resetInvokedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetRespondsTo">resetRespondsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetWelcomeIntent">resetWelcomeIntent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInvokedBy` <a name="putInvokedBy" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.putInvokedBy"></a>

```java
public void putInvokedBy(ChimeAppInstanceBotConfigurationLexInvokedBy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.putInvokedBy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a>

---

##### `resetInvokedBy` <a name="resetInvokedBy" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetInvokedBy"></a>

```java
public void resetInvokedBy()
```

##### `resetRespondsTo` <a name="resetRespondsTo" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetRespondsTo"></a>

```java
public void resetRespondsTo()
```

##### `resetWelcomeIntent` <a name="resetWelcomeIntent" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetWelcomeIntent"></a>

```java
public void resetWelcomeIntent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.invokedBy">invokedBy</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference">ChimeAppInstanceBotConfigurationLexInvokedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.invokedByInput">invokedByInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArnInput">lexBotAliasArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.localeIdInput">localeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.respondsToInput">respondsToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntentInput">welcomeIntentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArn">lexBotAliasArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.localeId">localeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.respondsTo">respondsTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntent">welcomeIntent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `invokedBy`<sup>Required</sup> <a name="invokedBy" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.invokedBy"></a>

```java
public ChimeAppInstanceBotConfigurationLexInvokedByOutputReference getInvokedBy();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference">ChimeAppInstanceBotConfigurationLexInvokedByOutputReference</a>

---

##### `invokedByInput`<sup>Optional</sup> <a name="invokedByInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.invokedByInput"></a>

```java
public IResolvable|ChimeAppInstanceBotConfigurationLexInvokedBy getInvokedByInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a>

---

##### `lexBotAliasArnInput`<sup>Optional</sup> <a name="lexBotAliasArnInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArnInput"></a>

```java
public java.lang.String getLexBotAliasArnInput();
```

- *Type:* java.lang.String

---

##### `localeIdInput`<sup>Optional</sup> <a name="localeIdInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.localeIdInput"></a>

```java
public java.lang.String getLocaleIdInput();
```

- *Type:* java.lang.String

---

##### `respondsToInput`<sup>Optional</sup> <a name="respondsToInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.respondsToInput"></a>

```java
public java.lang.String getRespondsToInput();
```

- *Type:* java.lang.String

---

##### `welcomeIntentInput`<sup>Optional</sup> <a name="welcomeIntentInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntentInput"></a>

```java
public java.lang.String getWelcomeIntentInput();
```

- *Type:* java.lang.String

---

##### `lexBotAliasArn`<sup>Required</sup> <a name="lexBotAliasArn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArn"></a>

```java
public java.lang.String getLexBotAliasArn();
```

- *Type:* java.lang.String

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.localeId"></a>

```java
public java.lang.String getLocaleId();
```

- *Type:* java.lang.String

---

##### `respondsTo`<sup>Required</sup> <a name="respondsTo" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.respondsTo"></a>

```java
public java.lang.String getRespondsTo();
```

- *Type:* java.lang.String

---

##### `welcomeIntent`<sup>Required</sup> <a name="welcomeIntent" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntent"></a>

```java
public java.lang.String getWelcomeIntent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeAppInstanceBotConfigurationLex getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a>

---


### ChimeAppInstanceBotConfigurationOutputReference <a name="ChimeAppInstanceBotConfigurationOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_bot.ChimeAppInstanceBotConfigurationOutputReference;

new ChimeAppInstanceBotConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.putLex">putLex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLex` <a name="putLex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.putLex"></a>

```java
public void putLex(ChimeAppInstanceBotConfigurationLex value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.putLex.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.lex">lex</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference">ChimeAppInstanceBotConfigurationLexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.lexInput">lexInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lex`<sup>Required</sup> <a name="lex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.lex"></a>

```java
public ChimeAppInstanceBotConfigurationLexOutputReference getLex();
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference">ChimeAppInstanceBotConfigurationLexOutputReference</a>

---

##### `lexInput`<sup>Optional</sup> <a name="lexInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.lexInput"></a>

```java
public IResolvable|ChimeAppInstanceBotConfigurationLex getLexInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeAppInstanceBotConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

---


### ChimeAppInstanceBotTagsList <a name="ChimeAppInstanceBotTagsList" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_bot.ChimeAppInstanceBotTagsList;

new ChimeAppInstanceBotTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.get"></a>

```java
public ChimeAppInstanceBotTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ChimeAppInstanceBotTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>>

---


### ChimeAppInstanceBotTagsOutputReference <a name="ChimeAppInstanceBotTagsOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.chime_app_instance_bot.ChimeAppInstanceBotTagsOutputReference;

new ChimeAppInstanceBotTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChimeAppInstanceBotTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>

---



