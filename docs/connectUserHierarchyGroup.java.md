# `connectUserHierarchyGroup` Submodule <a name="`connectUserHierarchyGroup` Submodule" id="@cdktn/provider-awscc.connectUserHierarchyGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUserHierarchyGroup <a name="ConnectUserHierarchyGroup" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_group awscc_connect_user_hierarchy_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_group.ConnectUserHierarchyGroup;

ConnectUserHierarchyGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
    .name(java.lang.String)
//  .parentGroupArn(java.lang.String)
//  .tags(IResolvable|java.util.List<ConnectUserHierarchyGroupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the user hierarchy group. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.parentGroupArn">parentGroupArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the parent user hierarchy group. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags">ConnectUserHierarchyGroupTags</a>></code> | One or more tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_group#instance_arn ConnectUserHierarchyGroup#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the user hierarchy group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_group#name ConnectUserHierarchyGroup#name}

---

##### `parentGroupArn`<sup>Optional</sup> <a name="parentGroupArn" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.parentGroupArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the parent user hierarchy group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_group#parent_group_arn ConnectUserHierarchyGroup#parent_group_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags">ConnectUserHierarchyGroupTags</a>>

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_group#tags ConnectUserHierarchyGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetParentGroupArn">resetParentGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ConnectUserHierarchyGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags">ConnectUserHierarchyGroupTags</a>>

---

##### `resetParentGroupArn` <a name="resetParentGroupArn" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetParentGroupArn"></a>

```java
public void resetParentGroupArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectUserHierarchyGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_group.ConnectUserHierarchyGroup;

ConnectUserHierarchyGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_group.ConnectUserHierarchyGroup;

ConnectUserHierarchyGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_group.ConnectUserHierarchyGroup;

ConnectUserHierarchyGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_group.ConnectUserHierarchyGroup;

ConnectUserHierarchyGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectUserHierarchyGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConnectUserHierarchyGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectUserHierarchyGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectUserHierarchyGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConnectUserHierarchyGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList">ConnectUserHierarchyGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.userHierarchyGroupArn">userHierarchyGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.parentGroupArnInput">parentGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags">ConnectUserHierarchyGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.parentGroupArn">parentGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tags"></a>

```java
public ConnectUserHierarchyGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList">ConnectUserHierarchyGroupTagsList</a>

---

##### `userHierarchyGroupArn`<sup>Required</sup> <a name="userHierarchyGroupArn" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.userHierarchyGroupArn"></a>

```java
public java.lang.String getUserHierarchyGroupArn();
```

- *Type:* java.lang.String

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentGroupArnInput`<sup>Optional</sup> <a name="parentGroupArnInput" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.parentGroupArnInput"></a>

```java
public java.lang.String getParentGroupArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ConnectUserHierarchyGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags">ConnectUserHierarchyGroupTags</a>>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentGroupArn`<sup>Required</sup> <a name="parentGroupArn" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.parentGroupArn"></a>

```java
public java.lang.String getParentGroupArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserHierarchyGroupConfig <a name="ConnectUserHierarchyGroupConfig" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_group.ConnectUserHierarchyGroupConfig;

ConnectUserHierarchyGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
    .name(java.lang.String)
//  .parentGroupArn(java.lang.String)
//  .tags(IResolvable|java.util.List<ConnectUserHierarchyGroupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the user hierarchy group. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.parentGroupArn">parentGroupArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the parent user hierarchy group. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags">ConnectUserHierarchyGroupTags</a>></code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_group#instance_arn ConnectUserHierarchyGroup#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the user hierarchy group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_group#name ConnectUserHierarchyGroup#name}

---

##### `parentGroupArn`<sup>Optional</sup> <a name="parentGroupArn" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.parentGroupArn"></a>

```java
public java.lang.String getParentGroupArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the parent user hierarchy group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_group#parent_group_arn ConnectUserHierarchyGroup#parent_group_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ConnectUserHierarchyGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags">ConnectUserHierarchyGroupTags</a>>

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_group#tags ConnectUserHierarchyGroup#tags}

---

### ConnectUserHierarchyGroupTags <a name="ConnectUserHierarchyGroupTags" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_group.ConnectUserHierarchyGroupTags;

ConnectUserHierarchyGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_group#key ConnectUserHierarchyGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_group#value ConnectUserHierarchyGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectUserHierarchyGroupTagsList <a name="ConnectUserHierarchyGroupTagsList" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_group.ConnectUserHierarchyGroupTagsList;

new ConnectUserHierarchyGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.get"></a>

```java
public ConnectUserHierarchyGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags">ConnectUserHierarchyGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectUserHierarchyGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags">ConnectUserHierarchyGroupTags</a>>

---


### ConnectUserHierarchyGroupTagsOutputReference <a name="ConnectUserHierarchyGroupTagsOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_group.ConnectUserHierarchyGroupTagsOutputReference;

new ConnectUserHierarchyGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags">ConnectUserHierarchyGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserHierarchyGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyGroup.ConnectUserHierarchyGroupTags">ConnectUserHierarchyGroupTags</a>

---



