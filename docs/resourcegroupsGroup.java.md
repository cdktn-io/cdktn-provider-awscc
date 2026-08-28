# `resourcegroupsGroup` Submodule <a name="`resourcegroupsGroup` Submodule" id="@cdktn/provider-awscc.resourcegroupsGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcegroupsGroup <a name="ResourcegroupsGroup" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group awscc_resourcegroups_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroup;

ResourcegroupsGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .configuration(IResolvable|java.util.List<ResourcegroupsGroupConfiguration>)
//  .description(java.lang.String)
//  .resourceQuery(ResourcegroupsGroupResourceQuery)
//  .resources(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<ResourcegroupsGroupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the resource group. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.configuration">configuration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#configuration ResourcegroupsGroup#configuration}. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the resource group. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.resourceQuery">resourceQuery</a></code> | <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#resource_query ResourcegroupsGroup#resource_query}. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#resources ResourcegroupsGroup#resources}. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags">ResourcegroupsGroupTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#tags ResourcegroupsGroup#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the resource group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#name ResourcegroupsGroup#name}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.configuration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#configuration ResourcegroupsGroup#configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the resource group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#description ResourcegroupsGroup#description}

---

##### `resourceQuery`<sup>Optional</sup> <a name="resourceQuery" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.resourceQuery"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#resource_query ResourcegroupsGroup#resource_query}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.resources"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#resources ResourcegroupsGroup#resources}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags">ResourcegroupsGroupTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#tags ResourcegroupsGroup#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.putResourceQuery">putResourceQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.resetResourceQuery">resetResourceQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.putConfiguration"></a>

```java
public void putConfiguration(IResolvable|java.util.List<ResourcegroupsGroupConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.putConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>>

---

##### `putResourceQuery` <a name="putResourceQuery" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.putResourceQuery"></a>

```java
public void putResourceQuery(ResourcegroupsGroupResourceQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.putResourceQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ResourcegroupsGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags">ResourcegroupsGroupTags</a>>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetResourceQuery` <a name="resetResourceQuery" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.resetResourceQuery"></a>

```java
public void resetResourceQuery()
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.resetResources"></a>

```java
public void resetResources()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ResourcegroupsGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroup;

ResourcegroupsGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroup;

ResourcegroupsGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroup;

ResourcegroupsGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroup;

ResourcegroupsGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourcegroupsGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ResourcegroupsGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourcegroupsGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourcegroupsGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ResourcegroupsGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList">ResourcegroupsGroupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.resourceQuery">resourceQuery</a></code> | <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference">ResourcegroupsGroupResourceQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList">ResourcegroupsGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.configurationInput">configurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.resourceQueryInput">resourceQueryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags">ResourcegroupsGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.configuration"></a>

```java
public ResourcegroupsGroupConfigurationList getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList">ResourcegroupsGroupConfigurationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceQuery`<sup>Required</sup> <a name="resourceQuery" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.resourceQuery"></a>

```java
public ResourcegroupsGroupResourceQueryOutputReference getResourceQuery();
```

- *Type:* <a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference">ResourcegroupsGroupResourceQueryOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.tags"></a>

```java
public ResourcegroupsGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList">ResourcegroupsGroupTagsList</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.configurationInput"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupConfiguration> getConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceQueryInput`<sup>Optional</sup> <a name="resourceQueryInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.resourceQueryInput"></a>

```java
public IResolvable|ResourcegroupsGroupResourceQuery getResourceQueryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags">ResourcegroupsGroupTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcegroupsGroupConfig <a name="ResourcegroupsGroupConfig" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupConfig;

ResourcegroupsGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .configuration(IResolvable|java.util.List<ResourcegroupsGroupConfiguration>)
//  .description(java.lang.String)
//  .resourceQuery(ResourcegroupsGroupResourceQuery)
//  .resources(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<ResourcegroupsGroupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the resource group. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.configuration">configuration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#configuration ResourcegroupsGroup#configuration}. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the resource group. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.resourceQuery">resourceQuery</a></code> | <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#resource_query ResourcegroupsGroup#resource_query}. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#resources ResourcegroupsGroup#resources}. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags">ResourcegroupsGroupTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#tags ResourcegroupsGroup#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the resource group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#name ResourcegroupsGroup#name}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.configuration"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupConfiguration> getConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#configuration ResourcegroupsGroup#configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the resource group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#description ResourcegroupsGroup#description}

---

##### `resourceQuery`<sup>Optional</sup> <a name="resourceQuery" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.resourceQuery"></a>

```java
public ResourcegroupsGroupResourceQuery getResourceQuery();
```

- *Type:* <a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#resource_query ResourcegroupsGroup#resource_query}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#resources ResourcegroupsGroup#resources}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags">ResourcegroupsGroupTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#tags ResourcegroupsGroup#tags}.

---

### ResourcegroupsGroupConfiguration <a name="ResourcegroupsGroupConfiguration" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupConfiguration;

ResourcegroupsGroupConfiguration.builder()
//  .parameters(IResolvable|java.util.List<ResourcegroupsGroupConfigurationParameters>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#parameters ResourcegroupsGroup#parameters}. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#type ResourcegroupsGroup#type}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration.property.parameters"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupConfigurationParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#parameters ResourcegroupsGroup#parameters}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#type ResourcegroupsGroup#type}.

---

### ResourcegroupsGroupConfigurationParameters <a name="ResourcegroupsGroupConfigurationParameters" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupConfigurationParameters;

ResourcegroupsGroupConfigurationParameters.builder()
//  .name(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#name ResourcegroupsGroup#name}. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#values ResourcegroupsGroup#values}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#name ResourcegroupsGroup#name}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#values ResourcegroupsGroup#values}.

---

### ResourcegroupsGroupResourceQuery <a name="ResourcegroupsGroupResourceQuery" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupResourceQuery;

ResourcegroupsGroupResourceQuery.builder()
//  .query(ResourcegroupsGroupResourceQueryQuery)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.property.query">query</a></code> | <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQuery">ResourcegroupsGroupResourceQueryQuery</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#query ResourcegroupsGroup#query}. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#type ResourcegroupsGroup#type}. |

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.property.query"></a>

```java
public ResourcegroupsGroupResourceQueryQuery getQuery();
```

- *Type:* <a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQuery">ResourcegroupsGroupResourceQueryQuery</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#query ResourcegroupsGroup#query}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#type ResourcegroupsGroup#type}.

---

### ResourcegroupsGroupResourceQueryQuery <a name="ResourcegroupsGroupResourceQueryQuery" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQuery.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupResourceQueryQuery;

ResourcegroupsGroupResourceQueryQuery.builder()
//  .resourceTypeFilters(java.util.List<java.lang.String>)
//  .stackIdentifier(java.lang.String)
//  .tagFilters(IResolvable|java.util.List<ResourcegroupsGroupResourceQueryQueryTagFilters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQuery.property.resourceTypeFilters">resourceTypeFilters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#resource_type_filters ResourcegroupsGroup#resource_type_filters}. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQuery.property.stackIdentifier">stackIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#stack_identifier ResourcegroupsGroup#stack_identifier}. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQuery.property.tagFilters">tagFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFilters">ResourcegroupsGroupResourceQueryQueryTagFilters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#tag_filters ResourcegroupsGroup#tag_filters}. |

---

##### `resourceTypeFilters`<sup>Optional</sup> <a name="resourceTypeFilters" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQuery.property.resourceTypeFilters"></a>

```java
public java.util.List<java.lang.String> getResourceTypeFilters();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#resource_type_filters ResourcegroupsGroup#resource_type_filters}.

---

##### `stackIdentifier`<sup>Optional</sup> <a name="stackIdentifier" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQuery.property.stackIdentifier"></a>

```java
public java.lang.String getStackIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#stack_identifier ResourcegroupsGroup#stack_identifier}.

---

##### `tagFilters`<sup>Optional</sup> <a name="tagFilters" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQuery.property.tagFilters"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupResourceQueryQueryTagFilters> getTagFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFilters">ResourcegroupsGroupResourceQueryQueryTagFilters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#tag_filters ResourcegroupsGroup#tag_filters}.

---

### ResourcegroupsGroupResourceQueryQueryTagFilters <a name="ResourcegroupsGroupResourceQueryQueryTagFilters" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupResourceQueryQueryTagFilters;

ResourcegroupsGroupResourceQueryQueryTagFilters.builder()
//  .key(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFilters.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#key ResourcegroupsGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFilters.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#values ResourcegroupsGroup#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFilters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#key ResourcegroupsGroup#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFilters.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#values ResourcegroupsGroup#values}.

---

### ResourcegroupsGroupTags <a name="ResourcegroupsGroupTags" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupTags;

ResourcegroupsGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#key ResourcegroupsGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#value ResourcegroupsGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#key ResourcegroupsGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resourcegroups_group#value ResourcegroupsGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourcegroupsGroupConfigurationList <a name="ResourcegroupsGroupConfigurationList" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupConfigurationList;

new ResourcegroupsGroupConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.get"></a>

```java
public ResourcegroupsGroupConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>>

---


### ResourcegroupsGroupConfigurationOutputReference <a name="ResourcegroupsGroupConfigurationOutputReference" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupConfigurationOutputReference;

new ResourcegroupsGroupConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.List<ResourcegroupsGroupConfigurationParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>>

---

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList">ResourcegroupsGroupConfigurationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.parameters"></a>

```java
public ResourcegroupsGroupConfigurationParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList">ResourcegroupsGroupConfigurationParametersList</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.parametersInput"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupConfigurationParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ResourcegroupsGroupConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>

---


### ResourcegroupsGroupConfigurationParametersList <a name="ResourcegroupsGroupConfigurationParametersList" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupConfigurationParametersList;

new ResourcegroupsGroupConfigurationParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.get"></a>

```java
public ResourcegroupsGroupConfigurationParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupConfigurationParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>>

---


### ResourcegroupsGroupConfigurationParametersOutputReference <a name="ResourcegroupsGroupConfigurationParametersOutputReference" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupConfigurationParametersOutputReference;

new ResourcegroupsGroupConfigurationParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|ResourcegroupsGroupConfigurationParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>

---


### ResourcegroupsGroupResourceQueryOutputReference <a name="ResourcegroupsGroupResourceQueryOutputReference" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupResourceQueryOutputReference;

new ResourcegroupsGroupResourceQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQuery` <a name="putQuery" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.putQuery"></a>

```java
public void putQuery(ResourcegroupsGroupResourceQueryQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQuery">ResourcegroupsGroupResourceQueryQuery</a>

---

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.query">query</a></code> | <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference">ResourcegroupsGroupResourceQueryQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.queryInput">queryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQuery">ResourcegroupsGroupResourceQueryQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.query"></a>

```java
public ResourcegroupsGroupResourceQueryQueryOutputReference getQuery();
```

- *Type:* <a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference">ResourcegroupsGroupResourceQueryQueryOutputReference</a>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.queryInput"></a>

```java
public IResolvable|ResourcegroupsGroupResourceQueryQuery getQueryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQuery">ResourcegroupsGroupResourceQueryQuery</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.internalValue"></a>

```java
public IResolvable|ResourcegroupsGroupResourceQuery getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

---


### ResourcegroupsGroupResourceQueryQueryOutputReference <a name="ResourcegroupsGroupResourceQueryQueryOutputReference" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupResourceQueryQueryOutputReference;

new ResourcegroupsGroupResourceQueryQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.putTagFilters">putTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.resetResourceTypeFilters">resetResourceTypeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.resetStackIdentifier">resetStackIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.resetTagFilters">resetTagFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagFilters` <a name="putTagFilters" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.putTagFilters"></a>

```java
public void putTagFilters(IResolvable|java.util.List<ResourcegroupsGroupResourceQueryQueryTagFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.putTagFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFilters">ResourcegroupsGroupResourceQueryQueryTagFilters</a>>

---

##### `resetResourceTypeFilters` <a name="resetResourceTypeFilters" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.resetResourceTypeFilters"></a>

```java
public void resetResourceTypeFilters()
```

##### `resetStackIdentifier` <a name="resetStackIdentifier" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.resetStackIdentifier"></a>

```java
public void resetStackIdentifier()
```

##### `resetTagFilters` <a name="resetTagFilters" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.resetTagFilters"></a>

```java
public void resetTagFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList">ResourcegroupsGroupResourceQueryQueryTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.resourceTypeFiltersInput">resourceTypeFiltersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.stackIdentifierInput">stackIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.tagFiltersInput">tagFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFilters">ResourcegroupsGroupResourceQueryQueryTagFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.resourceTypeFilters">resourceTypeFilters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.stackIdentifier">stackIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQuery">ResourcegroupsGroupResourceQueryQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagFilters`<sup>Required</sup> <a name="tagFilters" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.tagFilters"></a>

```java
public ResourcegroupsGroupResourceQueryQueryTagFiltersList getTagFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList">ResourcegroupsGroupResourceQueryQueryTagFiltersList</a>

---

##### `resourceTypeFiltersInput`<sup>Optional</sup> <a name="resourceTypeFiltersInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.resourceTypeFiltersInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypeFiltersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stackIdentifierInput`<sup>Optional</sup> <a name="stackIdentifierInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.stackIdentifierInput"></a>

```java
public java.lang.String getStackIdentifierInput();
```

- *Type:* java.lang.String

---

##### `tagFiltersInput`<sup>Optional</sup> <a name="tagFiltersInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.tagFiltersInput"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupResourceQueryQueryTagFilters> getTagFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFilters">ResourcegroupsGroupResourceQueryQueryTagFilters</a>>

---

##### `resourceTypeFilters`<sup>Required</sup> <a name="resourceTypeFilters" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.resourceTypeFilters"></a>

```java
public java.util.List<java.lang.String> getResourceTypeFilters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stackIdentifier`<sup>Required</sup> <a name="stackIdentifier" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.stackIdentifier"></a>

```java
public java.lang.String getStackIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryOutputReference.property.internalValue"></a>

```java
public IResolvable|ResourcegroupsGroupResourceQueryQuery getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQuery">ResourcegroupsGroupResourceQueryQuery</a>

---


### ResourcegroupsGroupResourceQueryQueryTagFiltersList <a name="ResourcegroupsGroupResourceQueryQueryTagFiltersList" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupResourceQueryQueryTagFiltersList;

new ResourcegroupsGroupResourceQueryQueryTagFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.get"></a>

```java
public ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFilters">ResourcegroupsGroupResourceQueryQueryTagFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupResourceQueryQueryTagFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFilters">ResourcegroupsGroupResourceQueryQueryTagFilters</a>>

---


### ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference <a name="ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference;

new ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFilters">ResourcegroupsGroupResourceQueryQueryTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|ResourcegroupsGroupResourceQueryQueryTagFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupResourceQueryQueryTagFilters">ResourcegroupsGroupResourceQueryQueryTagFilters</a>

---


### ResourcegroupsGroupTagsList <a name="ResourcegroupsGroupTagsList" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupTagsList;

new ResourcegroupsGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.get"></a>

```java
public ResourcegroupsGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags">ResourcegroupsGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ResourcegroupsGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags">ResourcegroupsGroupTags</a>>

---


### ResourcegroupsGroupTagsOutputReference <a name="ResourcegroupsGroupTagsOutputReference" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resourcegroups_group.ResourcegroupsGroupTagsOutputReference;

new ResourcegroupsGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags">ResourcegroupsGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ResourcegroupsGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resourcegroupsGroup.ResourcegroupsGroupTags">ResourcegroupsGroupTags</a>

---



