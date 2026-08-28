# `resourcegroupsTagSyncTask` Submodule <a name="`resourcegroupsTagSyncTask` Submodule" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcegroupsTagSyncTask <a name="ResourcegroupsTagSyncTask" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_tag_sync_task awscc_resourcegroups_tag_sync_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_tag_sync_task.ResourcegroupsTagSyncTask;

ResourcegroupsTagSyncTask.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .group(java.lang.String)
    .roleArn(java.lang.String)
    .tagKey(java.lang.String)
    .tagValue(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.group">group</a></code> | <code>java.lang.String</code> | The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.tagKey">tagKey</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.tagValue">tagValue</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.group"></a>

- *Type:* java.lang.String

The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_tag_sync_task#group ResourcegroupsTagSyncTask#group}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_tag_sync_task#role_arn ResourcegroupsTagSyncTask#role_arn}

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.tagKey"></a>

- *Type:* java.lang.String

The tag key.

Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_tag_sync_task#tag_key ResourcegroupsTagSyncTask#tag_key}

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.tagValue"></a>

- *Type:* java.lang.String

The tag value.

Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_tag_sync_task#tag_value ResourcegroupsTagSyncTask#tag_value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ResourcegroupsTagSyncTask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isConstruct"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_tag_sync_task.ResourcegroupsTagSyncTask;

ResourcegroupsTagSyncTask.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_tag_sync_task.ResourcegroupsTagSyncTask;

ResourcegroupsTagSyncTask.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_tag_sync_task.ResourcegroupsTagSyncTask;

ResourcegroupsTagSyncTask.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_tag_sync_task.ResourcegroupsTagSyncTask;

ResourcegroupsTagSyncTask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourcegroupsTagSyncTask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ResourcegroupsTagSyncTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourcegroupsTagSyncTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourcegroupsTagSyncTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_tag_sync_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ResourcegroupsTagSyncTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupArn">groupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.taskArn">taskArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groupArn`<sup>Required</sup> <a name="groupArn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupArn"></a>

```java
public java.lang.String getGroupArn();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `taskArn`<sup>Required</sup> <a name="taskArn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.taskArn"></a>

```java
public java.lang.String getTaskArn();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcegroupsTagSyncTaskConfig <a name="ResourcegroupsTagSyncTaskConfig" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_tag_sync_task.ResourcegroupsTagSyncTaskConfig;

ResourcegroupsTagSyncTaskConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .group(java.lang.String)
    .roleArn(java.lang.String)
    .tagKey(java.lang.String)
    .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.group">group</a></code> | <code>java.lang.String</code> | The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_tag_sync_task#group ResourcegroupsTagSyncTask#group}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_tag_sync_task#role_arn ResourcegroupsTagSyncTask#role_arn}

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

The tag key.

Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_tag_sync_task#tag_key ResourcegroupsTagSyncTask#tag_key}

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

The tag value.

Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_tag_sync_task#tag_value ResourcegroupsTagSyncTask#tag_value}

---



