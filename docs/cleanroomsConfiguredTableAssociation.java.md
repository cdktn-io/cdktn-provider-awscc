# `cleanroomsConfiguredTableAssociation` Submodule <a name="`cleanroomsConfiguredTableAssociation` Submodule" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsConfiguredTableAssociation <a name="CleanroomsConfiguredTableAssociation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association awscc_cleanrooms_configured_table_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociation;

CleanroomsConfiguredTableAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configuredTableIdentifier(java.lang.String)
    .membershipIdentifier(java.lang.String)
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .configuredTableAssociationAnalysisRules(IResolvable|java.util.List<CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules>)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<CleanroomsConfiguredTableAssociationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.configuredTableIdentifier">configuredTableIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#configured_table_identifier CleanroomsConfiguredTableAssociation#configured_table_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.membershipIdentifier">membershipIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#membership_identifier CleanroomsConfiguredTableAssociation#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#name CleanroomsConfiguredTableAssociation#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#role_arn CleanroomsConfiguredTableAssociation#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.configuredTableAssociationAnalysisRules">configuredTableAssociationAnalysisRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#configured_table_association_analysis_rules CleanroomsConfiguredTableAssociation#configured_table_association_analysis_rules}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#description CleanroomsConfiguredTableAssociation#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>></code> | An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuredTableIdentifier`<sup>Required</sup> <a name="configuredTableIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.configuredTableIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#configured_table_identifier CleanroomsConfiguredTableAssociation#configured_table_identifier}.

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.membershipIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#membership_identifier CleanroomsConfiguredTableAssociation#membership_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#name CleanroomsConfiguredTableAssociation#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#role_arn CleanroomsConfiguredTableAssociation#role_arn}.

---

##### `configuredTableAssociationAnalysisRules`<sup>Optional</sup> <a name="configuredTableAssociationAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.configuredTableAssociationAnalysisRules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#configured_table_association_analysis_rules CleanroomsConfiguredTableAssociation#configured_table_association_analysis_rules}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#description CleanroomsConfiguredTableAssociation#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>>

An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#tags CleanroomsConfiguredTableAssociation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putConfiguredTableAssociationAnalysisRules">putConfiguredTableAssociationAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetConfiguredTableAssociationAnalysisRules">resetConfiguredTableAssociationAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguredTableAssociationAnalysisRules` <a name="putConfiguredTableAssociationAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putConfiguredTableAssociationAnalysisRules"></a>

```java
public void putConfiguredTableAssociationAnalysisRules(IResolvable|java.util.List<CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putConfiguredTableAssociationAnalysisRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CleanroomsConfiguredTableAssociationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>>

---

##### `resetConfiguredTableAssociationAnalysisRules` <a name="resetConfiguredTableAssociationAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetConfiguredTableAssociationAnalysisRules"></a>

```java
public void resetConfiguredTableAssociationAnalysisRules()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsConfiguredTableAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociation;

CleanroomsConfiguredTableAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociation;

CleanroomsConfiguredTableAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociation;

CleanroomsConfiguredTableAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociation;

CleanroomsConfiguredTableAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CleanroomsConfiguredTableAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CleanroomsConfiguredTableAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CleanroomsConfiguredTableAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CleanroomsConfiguredTableAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsConfiguredTableAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationAnalysisRules">configuredTableAssociationAnalysisRules</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationIdentifier">configuredTableAssociationIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList">CleanroomsConfiguredTableAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationAnalysisRulesInput">configuredTableAssociationAnalysisRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableIdentifierInput">configuredTableIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.membershipIdentifierInput">membershipIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableIdentifier">configuredTableIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.membershipIdentifier">membershipIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `configuredTableAssociationAnalysisRules`<sup>Required</sup> <a name="configuredTableAssociationAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationAnalysisRules"></a>

```java
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList getConfiguredTableAssociationAnalysisRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList</a>

---

##### `configuredTableAssociationIdentifier`<sup>Required</sup> <a name="configuredTableAssociationIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationIdentifier"></a>

```java
public java.lang.String getConfiguredTableAssociationIdentifier();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tags"></a>

```java
public CleanroomsConfiguredTableAssociationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList">CleanroomsConfiguredTableAssociationTagsList</a>

---

##### `configuredTableAssociationAnalysisRulesInput`<sup>Optional</sup> <a name="configuredTableAssociationAnalysisRulesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationAnalysisRulesInput"></a>

```java
public IResolvable|java.util.List<CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules> getConfiguredTableAssociationAnalysisRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>>

---

##### `configuredTableIdentifierInput`<sup>Optional</sup> <a name="configuredTableIdentifierInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableIdentifierInput"></a>

```java
public java.lang.String getConfiguredTableIdentifierInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `membershipIdentifierInput`<sup>Optional</sup> <a name="membershipIdentifierInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.membershipIdentifierInput"></a>

```java
public java.lang.String getMembershipIdentifierInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CleanroomsConfiguredTableAssociationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>>

---

##### `configuredTableIdentifier`<sup>Required</sup> <a name="configuredTableIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableIdentifier"></a>

```java
public java.lang.String getConfiguredTableIdentifier();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.membershipIdentifier"></a>

```java
public java.lang.String getMembershipIdentifier();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsConfiguredTableAssociationConfig <a name="CleanroomsConfiguredTableAssociationConfig" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationConfig;

CleanroomsConfiguredTableAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configuredTableIdentifier(java.lang.String)
    .membershipIdentifier(java.lang.String)
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .configuredTableAssociationAnalysisRules(IResolvable|java.util.List<CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules>)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<CleanroomsConfiguredTableAssociationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.configuredTableIdentifier">configuredTableIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#configured_table_identifier CleanroomsConfiguredTableAssociation#configured_table_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.membershipIdentifier">membershipIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#membership_identifier CleanroomsConfiguredTableAssociation#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#name CleanroomsConfiguredTableAssociation#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#role_arn CleanroomsConfiguredTableAssociation#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.configuredTableAssociationAnalysisRules">configuredTableAssociationAnalysisRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#configured_table_association_analysis_rules CleanroomsConfiguredTableAssociation#configured_table_association_analysis_rules}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#description CleanroomsConfiguredTableAssociation#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>></code> | An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuredTableIdentifier`<sup>Required</sup> <a name="configuredTableIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.configuredTableIdentifier"></a>

```java
public java.lang.String getConfiguredTableIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#configured_table_identifier CleanroomsConfiguredTableAssociation#configured_table_identifier}.

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.membershipIdentifier"></a>

```java
public java.lang.String getMembershipIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#membership_identifier CleanroomsConfiguredTableAssociation#membership_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#name CleanroomsConfiguredTableAssociation#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#role_arn CleanroomsConfiguredTableAssociation#role_arn}.

---

##### `configuredTableAssociationAnalysisRules`<sup>Optional</sup> <a name="configuredTableAssociationAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.configuredTableAssociationAnalysisRules"></a>

```java
public IResolvable|java.util.List<CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules> getConfiguredTableAssociationAnalysisRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#configured_table_association_analysis_rules CleanroomsConfiguredTableAssociation#configured_table_association_analysis_rules}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#description CleanroomsConfiguredTableAssociation#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CleanroomsConfiguredTableAssociationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>>

An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#tags CleanroomsConfiguredTableAssociation#tags}

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules;

CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.builder()
//  .policy(CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#policy CleanroomsConfiguredTableAssociation#policy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#type CleanroomsConfiguredTableAssociation#type}. |

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.property.policy"></a>

```java
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy getPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#policy CleanroomsConfiguredTableAssociation#policy}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#type CleanroomsConfiguredTableAssociation#type}.

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy;

CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy.builder()
//  .v1(CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy.property.v1">v1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#v1 CleanroomsConfiguredTableAssociation#v1}. |

---

##### `v1`<sup>Optional</sup> <a name="v1" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy.property.v1"></a>

```java
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 getV1();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#v1 CleanroomsConfiguredTableAssociation#v1}.

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1;

CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.builder()
//  .aggregation(CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation)
//  .custom(CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom)
//  .list(CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.aggregation">aggregation</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#aggregation CleanroomsConfiguredTableAssociation#aggregation}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#custom CleanroomsConfiguredTableAssociation#custom}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.list">list</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#list CleanroomsConfiguredTableAssociation#list}. |

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.aggregation"></a>

```java
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation getAggregation();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#aggregation CleanroomsConfiguredTableAssociation#aggregation}.

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.custom"></a>

```java
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom getCustom();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#custom CleanroomsConfiguredTableAssociation#custom}.

---

##### `list`<sup>Optional</sup> <a name="list" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.list"></a>

```java
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct getList();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#list CleanroomsConfiguredTableAssociation#list}.

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation;

CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.builder()
//  .allowedAdditionalAnalyses(java.util.List<java.lang.String>)
//  .allowedResultReceivers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.property.allowedAdditionalAnalyses">allowedAdditionalAnalyses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.property.allowedResultReceivers">allowedResultReceivers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}. |

---

##### `allowedAdditionalAnalyses`<sup>Optional</sup> <a name="allowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.property.allowedAdditionalAnalyses"></a>

```java
public java.util.List<java.lang.String> getAllowedAdditionalAnalyses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}.

---

##### `allowedResultReceivers`<sup>Optional</sup> <a name="allowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.property.allowedResultReceivers"></a>

```java
public java.util.List<java.lang.String> getAllowedResultReceivers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}.

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom;

CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.builder()
//  .allowedAdditionalAnalyses(java.util.List<java.lang.String>)
//  .allowedResultReceivers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.property.allowedAdditionalAnalyses">allowedAdditionalAnalyses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.property.allowedResultReceivers">allowedResultReceivers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}. |

---

##### `allowedAdditionalAnalyses`<sup>Optional</sup> <a name="allowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.property.allowedAdditionalAnalyses"></a>

```java
public java.util.List<java.lang.String> getAllowedAdditionalAnalyses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}.

---

##### `allowedResultReceivers`<sup>Optional</sup> <a name="allowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.property.allowedResultReceivers"></a>

```java
public java.util.List<java.lang.String> getAllowedResultReceivers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}.

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct;

CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.builder()
//  .allowedAdditionalAnalyses(java.util.List<java.lang.String>)
//  .allowedResultReceivers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.property.allowedAdditionalAnalyses">allowedAdditionalAnalyses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.property.allowedResultReceivers">allowedResultReceivers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}. |

---

##### `allowedAdditionalAnalyses`<sup>Optional</sup> <a name="allowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.property.allowedAdditionalAnalyses"></a>

```java
public java.util.List<java.lang.String> getAllowedAdditionalAnalyses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}.

---

##### `allowedResultReceivers`<sup>Optional</sup> <a name="allowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.property.allowedResultReceivers"></a>

```java
public java.util.List<java.lang.String> getAllowedResultReceivers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}.

---

### CleanroomsConfiguredTableAssociationTags <a name="CleanroomsConfiguredTableAssociationTags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationTags;

CleanroomsConfiguredTableAssociationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#key CleanroomsConfiguredTableAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#value CleanroomsConfiguredTableAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#key CleanroomsConfiguredTableAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table_association#value CleanroomsConfiguredTableAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.get"></a>

```java
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>>

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicy` <a name="putPolicy" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.putPolicy"></a>

```java
public void putPolicy(CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a>

---

##### `resetPolicy` <a name="resetPolicy" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resetPolicy"></a>

```java
public void resetPolicy()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.policyInput">policyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.policy"></a>

```java
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference getPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference</a>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.policyInput"></a>

```java
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy getPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.putV1">putV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resetV1">resetV1</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putV1` <a name="putV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.putV1"></a>

```java
public void putV1(CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.putV1.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a>

---

##### `resetV1` <a name="resetV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resetV1"></a>

```java
public void resetV1()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.v1">v1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.v1Input">v1Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `v1`<sup>Required</sup> <a name="v1" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.v1"></a>

```java
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference getV1();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference</a>

---

##### `v1Input`<sup>Optional</sup> <a name="v1Input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.v1Input"></a>

```java
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 getV1Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a>

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resetAllowedAdditionalAnalyses">resetAllowedAdditionalAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resetAllowedResultReceivers">resetAllowedResultReceivers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAdditionalAnalyses` <a name="resetAllowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resetAllowedAdditionalAnalyses"></a>

```java
public void resetAllowedAdditionalAnalyses()
```

##### `resetAllowedResultReceivers` <a name="resetAllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resetAllowedResultReceivers"></a>

```java
public void resetAllowedResultReceivers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedAdditionalAnalysesInput">allowedAdditionalAnalysesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedResultReceiversInput">allowedResultReceiversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedAdditionalAnalyses">allowedAdditionalAnalyses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedResultReceivers">allowedResultReceivers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAdditionalAnalysesInput`<sup>Optional</sup> <a name="allowedAdditionalAnalysesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedAdditionalAnalysesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAdditionalAnalysesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedResultReceiversInput`<sup>Optional</sup> <a name="allowedResultReceiversInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedResultReceiversInput"></a>

```java
public java.util.List<java.lang.String> getAllowedResultReceiversInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedAdditionalAnalyses`<sup>Required</sup> <a name="allowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedAdditionalAnalyses"></a>

```java
public java.util.List<java.lang.String> getAllowedAdditionalAnalyses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedResultReceivers`<sup>Required</sup> <a name="allowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedResultReceivers"></a>

```java
public java.util.List<java.lang.String> getAllowedResultReceivers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a>

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAdditionalAnalyses">resetAllowedAdditionalAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resetAllowedResultReceivers">resetAllowedResultReceivers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAdditionalAnalyses` <a name="resetAllowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAdditionalAnalyses"></a>

```java
public void resetAllowedAdditionalAnalyses()
```

##### `resetAllowedResultReceivers` <a name="resetAllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resetAllowedResultReceivers"></a>

```java
public void resetAllowedResultReceivers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedAdditionalAnalysesInput">allowedAdditionalAnalysesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceiversInput">allowedResultReceiversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedAdditionalAnalyses">allowedAdditionalAnalyses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers">allowedResultReceivers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAdditionalAnalysesInput`<sup>Optional</sup> <a name="allowedAdditionalAnalysesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedAdditionalAnalysesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAdditionalAnalysesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedResultReceiversInput`<sup>Optional</sup> <a name="allowedResultReceiversInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceiversInput"></a>

```java
public java.util.List<java.lang.String> getAllowedResultReceiversInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedAdditionalAnalyses`<sup>Required</sup> <a name="allowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedAdditionalAnalyses"></a>

```java
public java.util.List<java.lang.String> getAllowedAdditionalAnalyses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedResultReceivers`<sup>Required</sup> <a name="allowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers"></a>

```java
public java.util.List<java.lang.String> getAllowedResultReceivers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a>

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resetAllowedAdditionalAnalyses">resetAllowedAdditionalAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resetAllowedResultReceivers">resetAllowedResultReceivers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAdditionalAnalyses` <a name="resetAllowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resetAllowedAdditionalAnalyses"></a>

```java
public void resetAllowedAdditionalAnalyses()
```

##### `resetAllowedResultReceivers` <a name="resetAllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resetAllowedResultReceivers"></a>

```java
public void resetAllowedResultReceivers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedAdditionalAnalysesInput">allowedAdditionalAnalysesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedResultReceiversInput">allowedResultReceiversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedAdditionalAnalyses">allowedAdditionalAnalyses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedResultReceivers">allowedResultReceivers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAdditionalAnalysesInput`<sup>Optional</sup> <a name="allowedAdditionalAnalysesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedAdditionalAnalysesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAdditionalAnalysesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedResultReceiversInput`<sup>Optional</sup> <a name="allowedResultReceiversInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedResultReceiversInput"></a>

```java
public java.util.List<java.lang.String> getAllowedResultReceiversInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedAdditionalAnalyses`<sup>Required</sup> <a name="allowedAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedAdditionalAnalyses"></a>

```java
public java.util.List<java.lang.String> getAllowedAdditionalAnalyses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedResultReceivers`<sup>Required</sup> <a name="allowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedResultReceivers"></a>

```java
public java.util.List<java.lang.String> getAllowedResultReceivers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a>

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference;

new CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putAggregation">putAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putCustom">putCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putList">putList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetCustom">resetCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetList">resetList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAggregation` <a name="putAggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putAggregation"></a>

```java
public void putAggregation(CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putAggregation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a>

---

##### `putCustom` <a name="putCustom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putCustom"></a>

```java
public void putCustom(CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a>

---

##### `putList` <a name="putList" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putList"></a>

```java
public void putList(CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a>

---

##### `resetAggregation` <a name="resetAggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetAggregation"></a>

```java
public void resetAggregation()
```

##### `resetCustom` <a name="resetCustom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetCustom"></a>

```java
public void resetCustom()
```

##### `resetList` <a name="resetList" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetList"></a>

```java
public void resetList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.aggregation">aggregation</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.list">list</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.aggregationInput">aggregationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.customInput">customInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.listInput">listInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.aggregation"></a>

```java
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference getAggregation();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference</a>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.custom"></a>

```java
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference getCustom();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference</a>

---

##### `list`<sup>Required</sup> <a name="list" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.list"></a>

```java
public CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference getList();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference</a>

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.aggregationInput"></a>

```java
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation getAggregationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a>

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.customInput"></a>

```java
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom getCustomInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a>

---

##### `listInput`<sup>Optional</sup> <a name="listInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.listInput"></a>

```java
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct getListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a>

---


### CleanroomsConfiguredTableAssociationTagsList <a name="CleanroomsConfiguredTableAssociationTagsList" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationTagsList;

new CleanroomsConfiguredTableAssociationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.get"></a>

```java
public CleanroomsConfiguredTableAssociationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CleanroomsConfiguredTableAssociationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>>

---


### CleanroomsConfiguredTableAssociationTagsOutputReference <a name="CleanroomsConfiguredTableAssociationTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_configured_table_association.CleanroomsConfiguredTableAssociationTagsOutputReference;

new CleanroomsConfiguredTableAssociationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsConfiguredTableAssociationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>

---



