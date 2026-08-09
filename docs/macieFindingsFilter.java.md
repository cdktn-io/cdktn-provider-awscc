# `macieFindingsFilter` Submodule <a name="`macieFindingsFilter` Submodule" id="@cdktn/provider-awscc.macieFindingsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MacieFindingsFilter <a name="MacieFindingsFilter" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter awscc_macie_findings_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_findings_filter.MacieFindingsFilter;

MacieFindingsFilter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .findingCriteria(MacieFindingsFilterFindingCriteria)
    .name(java.lang.String)
//  .action(java.lang.String)
//  .description(java.lang.String)
//  .position(java.lang.Number)
//  .tags(IResolvable|java.util.List<MacieFindingsFilterTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.findingCriteria">findingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a></code> | Findings filter criteria. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Findings filter name. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Findings filter action. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Findings filter description. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.position">position</a></code> | <code>java.lang.Number</code> | Findings filter position. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>></code> | A collection of tags associated with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `findingCriteria`<sup>Required</sup> <a name="findingCriteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.findingCriteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a>

Findings filter criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#finding_criteria MacieFindingsFilter#finding_criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Findings filter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#name MacieFindingsFilter#name}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Findings filter action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#action MacieFindingsFilter#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Findings filter description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#description MacieFindingsFilter#description}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.position"></a>

- *Type:* java.lang.Number

Findings filter position.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#position MacieFindingsFilter#position}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>>

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#tags MacieFindingsFilter#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putFindingCriteria">putFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFindingCriteria` <a name="putFindingCriteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putFindingCriteria"></a>

```java
public void putFindingCriteria(MacieFindingsFilterFindingCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putFindingCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<MacieFindingsFilterTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetAction"></a>

```java
public void resetAction()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetPosition` <a name="resetPosition" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MacieFindingsFilter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isConstruct"></a>

```java
import io.cdktn.providers.awscc.macie_findings_filter.MacieFindingsFilter;

MacieFindingsFilter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.macie_findings_filter.MacieFindingsFilter;

MacieFindingsFilter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.macie_findings_filter.MacieFindingsFilter;

MacieFindingsFilter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.macie_findings_filter.MacieFindingsFilter;

MacieFindingsFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MacieFindingsFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MacieFindingsFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MacieFindingsFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MacieFindingsFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MacieFindingsFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingCriteria">findingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference">MacieFindingsFilterFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingsFilterId">findingsFilterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList">MacieFindingsFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingCriteriaInput">findingCriteriaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `findingCriteria`<sup>Required</sup> <a name="findingCriteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingCriteria"></a>

```java
public MacieFindingsFilterFindingCriteriaOutputReference getFindingCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference">MacieFindingsFilterFindingCriteriaOutputReference</a>

---

##### `findingsFilterId`<sup>Required</sup> <a name="findingsFilterId" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingsFilterId"></a>

```java
public java.lang.String getFindingsFilterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tags"></a>

```java
public MacieFindingsFilterTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList">MacieFindingsFilterTagsList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `findingCriteriaInput`<sup>Optional</sup> <a name="findingCriteriaInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.findingCriteriaInput"></a>

```java
public IResolvable|MacieFindingsFilterFindingCriteria getFindingCriteriaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tagsInput"></a>

```java
public IResolvable|java.util.List<MacieFindingsFilterTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MacieFindingsFilterConfig <a name="MacieFindingsFilterConfig" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_findings_filter.MacieFindingsFilterConfig;

MacieFindingsFilterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .findingCriteria(MacieFindingsFilterFindingCriteria)
    .name(java.lang.String)
//  .action(java.lang.String)
//  .description(java.lang.String)
//  .position(java.lang.Number)
//  .tags(IResolvable|java.util.List<MacieFindingsFilterTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.findingCriteria">findingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a></code> | Findings filter criteria. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Findings filter name. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.action">action</a></code> | <code>java.lang.String</code> | Findings filter action. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.description">description</a></code> | <code>java.lang.String</code> | Findings filter description. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.position">position</a></code> | <code>java.lang.Number</code> | Findings filter position. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>></code> | A collection of tags associated with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `findingCriteria`<sup>Required</sup> <a name="findingCriteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.findingCriteria"></a>

```java
public MacieFindingsFilterFindingCriteria getFindingCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a>

Findings filter criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#finding_criteria MacieFindingsFilter#finding_criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Findings filter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#name MacieFindingsFilter#name}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Findings filter action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#action MacieFindingsFilter#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Findings filter description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#description MacieFindingsFilter#description}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Findings filter position.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#position MacieFindingsFilter#position}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterConfig.property.tags"></a>

```java
public IResolvable|java.util.List<MacieFindingsFilterTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>>

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#tags MacieFindingsFilter#tags}

---

### MacieFindingsFilterFindingCriteria <a name="MacieFindingsFilterFindingCriteria" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_findings_filter.MacieFindingsFilterFindingCriteria;

MacieFindingsFilterFindingCriteria.builder()
//  .criterion(IResolvable|java.util.Map<java.lang.String, MacieFindingsFilterFindingCriteriaCriterion>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria.property.criterion">criterion</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>></code> | Map of filter criteria. |

---

##### `criterion`<sup>Optional</sup> <a name="criterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria.property.criterion"></a>

```java
public IResolvable|java.util.Map<java.lang.String, MacieFindingsFilterFindingCriteriaCriterion> getCriterion();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>>

Map of filter criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#criterion MacieFindingsFilter#criterion}

---

### MacieFindingsFilterFindingCriteriaCriterion <a name="MacieFindingsFilterFindingCriteriaCriterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_findings_filter.MacieFindingsFilterFindingCriteriaCriterion;

MacieFindingsFilterFindingCriteriaCriterion.builder()
//  .eq(java.util.List<java.lang.String>)
//  .gt(java.lang.Number)
//  .gte(java.lang.Number)
//  .lt(java.lang.Number)
//  .lte(java.lang.Number)
//  .neq(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.eq">eq</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#eq MacieFindingsFilter#eq}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.gt">gt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#gt MacieFindingsFilter#gt}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.gte">gte</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#gte MacieFindingsFilter#gte}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.lt">lt</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#lt MacieFindingsFilter#lt}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.lte">lte</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#lte MacieFindingsFilter#lte}. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.neq">neq</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#neq MacieFindingsFilter#neq}. |

---

##### `eq`<sup>Optional</sup> <a name="eq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.eq"></a>

```java
public java.util.List<java.lang.String> getEq();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#eq MacieFindingsFilter#eq}.

---

##### `gt`<sup>Optional</sup> <a name="gt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.gt"></a>

```java
public java.lang.Number getGt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#gt MacieFindingsFilter#gt}.

---

##### `gte`<sup>Optional</sup> <a name="gte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.gte"></a>

```java
public java.lang.Number getGte();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#gte MacieFindingsFilter#gte}.

---

##### `lt`<sup>Optional</sup> <a name="lt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.lt"></a>

```java
public java.lang.Number getLt();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#lt MacieFindingsFilter#lt}.

---

##### `lte`<sup>Optional</sup> <a name="lte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.lte"></a>

```java
public java.lang.Number getLte();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#lte MacieFindingsFilter#lte}.

---

##### `neq`<sup>Optional</sup> <a name="neq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion.property.neq"></a>

```java
public java.util.List<java.lang.String> getNeq();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#neq MacieFindingsFilter#neq}.

---

### MacieFindingsFilterTags <a name="MacieFindingsFilterTags" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_findings_filter.MacieFindingsFilterTags;

MacieFindingsFilterTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#key MacieFindingsFilter#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/macie_findings_filter#value MacieFindingsFilter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MacieFindingsFilterFindingCriteriaCriterionMap <a name="MacieFindingsFilterFindingCriteriaCriterionMap" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_findings_filter.MacieFindingsFilterFindingCriteriaCriterionMap;

new MacieFindingsFilterFindingCriteriaCriterionMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.get"></a>

```java
public MacieFindingsFilterFindingCriteriaCriterionOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, MacieFindingsFilterFindingCriteriaCriterion> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>>

---


### MacieFindingsFilterFindingCriteriaCriterionOutputReference <a name="MacieFindingsFilterFindingCriteriaCriterionOutputReference" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_findings_filter.MacieFindingsFilterFindingCriteriaCriterionOutputReference;

new MacieFindingsFilterFindingCriteriaCriterionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetEq">resetEq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetGt">resetGt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetGte">resetGte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetLt">resetLt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetLte">resetLte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetNeq">resetNeq</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEq` <a name="resetEq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetEq"></a>

```java
public void resetEq()
```

##### `resetGt` <a name="resetGt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetGt"></a>

```java
public void resetGt()
```

##### `resetGte` <a name="resetGte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetGte"></a>

```java
public void resetGte()
```

##### `resetLt` <a name="resetLt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetLt"></a>

```java
public void resetLt()
```

##### `resetLte` <a name="resetLte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetLte"></a>

```java
public void resetLte()
```

##### `resetNeq` <a name="resetNeq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.resetNeq"></a>

```java
public void resetNeq()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eqInput">eqInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gteInput">gteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gtInput">gtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lteInput">lteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.ltInput">ltInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neqInput">neqInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eq">eq</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gt">gt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gte">gte</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lt">lt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lte">lte</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neq">neq</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eqInput`<sup>Optional</sup> <a name="eqInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eqInput"></a>

```java
public java.util.List<java.lang.String> getEqInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gteInput`<sup>Optional</sup> <a name="gteInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gteInput"></a>

```java
public java.lang.Number getGteInput();
```

- *Type:* java.lang.Number

---

##### `gtInput`<sup>Optional</sup> <a name="gtInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gtInput"></a>

```java
public java.lang.Number getGtInput();
```

- *Type:* java.lang.Number

---

##### `lteInput`<sup>Optional</sup> <a name="lteInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lteInput"></a>

```java
public java.lang.Number getLteInput();
```

- *Type:* java.lang.Number

---

##### `ltInput`<sup>Optional</sup> <a name="ltInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.ltInput"></a>

```java
public java.lang.Number getLtInput();
```

- *Type:* java.lang.Number

---

##### `neqInput`<sup>Optional</sup> <a name="neqInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neqInput"></a>

```java
public java.util.List<java.lang.String> getNeqInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eq`<sup>Required</sup> <a name="eq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.eq"></a>

```java
public java.util.List<java.lang.String> getEq();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gt`<sup>Required</sup> <a name="gt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gt"></a>

```java
public java.lang.Number getGt();
```

- *Type:* java.lang.Number

---

##### `gte`<sup>Required</sup> <a name="gte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.gte"></a>

```java
public java.lang.Number getGte();
```

- *Type:* java.lang.Number

---

##### `lt`<sup>Required</sup> <a name="lt" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lt"></a>

```java
public java.lang.Number getLt();
```

- *Type:* java.lang.Number

---

##### `lte`<sup>Required</sup> <a name="lte" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.lte"></a>

```java
public java.lang.Number getLte();
```

- *Type:* java.lang.Number

---

##### `neq`<sup>Required</sup> <a name="neq" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.neq"></a>

```java
public java.util.List<java.lang.String> getNeq();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionOutputReference.property.internalValue"></a>

```java
public IResolvable|MacieFindingsFilterFindingCriteriaCriterion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>

---


### MacieFindingsFilterFindingCriteriaOutputReference <a name="MacieFindingsFilterFindingCriteriaOutputReference" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_findings_filter.MacieFindingsFilterFindingCriteriaOutputReference;

new MacieFindingsFilterFindingCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.putCriterion">putCriterion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resetCriterion">resetCriterion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriterion` <a name="putCriterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.putCriterion"></a>

```java
public void putCriterion(IResolvable|java.util.Map<java.lang.String, MacieFindingsFilterFindingCriteriaCriterion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.putCriterion.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>>

---

##### `resetCriterion` <a name="resetCriterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.resetCriterion"></a>

```java
public void resetCriterion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.criterion">criterion</a></code> | <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap">MacieFindingsFilterFindingCriteriaCriterionMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.criterionInput">criterionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `criterion`<sup>Required</sup> <a name="criterion" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.criterion"></a>

```java
public MacieFindingsFilterFindingCriteriaCriterionMap getCriterion();
```

- *Type:* <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterionMap">MacieFindingsFilterFindingCriteriaCriterionMap</a>

---

##### `criterionInput`<sup>Optional</sup> <a name="criterionInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.criterionInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, MacieFindingsFilterFindingCriteriaCriterion> getCriterionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaCriterion">MacieFindingsFilterFindingCriteriaCriterion</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteriaOutputReference.property.internalValue"></a>

```java
public IResolvable|MacieFindingsFilterFindingCriteria getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterFindingCriteria">MacieFindingsFilterFindingCriteria</a>

---


### MacieFindingsFilterTagsList <a name="MacieFindingsFilterTagsList" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_findings_filter.MacieFindingsFilterTagsList;

new MacieFindingsFilterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.get"></a>

```java
public MacieFindingsFilterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MacieFindingsFilterTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>>

---


### MacieFindingsFilterTagsOutputReference <a name="MacieFindingsFilterTagsOutputReference" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.macie_findings_filter.MacieFindingsFilterTagsOutputReference;

new MacieFindingsFilterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|MacieFindingsFilterTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieFindingsFilter.MacieFindingsFilterTags">MacieFindingsFilterTags</a>

---



