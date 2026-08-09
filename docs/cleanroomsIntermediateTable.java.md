# `cleanroomsIntermediateTable` Submodule <a name="`cleanroomsIntermediateTable` Submodule" id="@cdktn/provider-awscc.cleanroomsIntermediateTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsIntermediateTable <a name="CleanroomsIntermediateTable" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table awscc_cleanrooms_intermediate_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTable;

CleanroomsIntermediateTable.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .membershipIdentifier(java.lang.String)
    .name(java.lang.String)
    .populationAnalysisConfiguration(CleanroomsIntermediateTablePopulationAnalysisConfiguration)
//  .analysisRules(IResolvable|java.util.List<CleanroomsIntermediateTableAnalysisRules>)
//  .description(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .tags(IResolvable|java.util.List<CleanroomsIntermediateTableTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.membershipIdentifier">membershipIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#membership_identifier CleanroomsIntermediateTable#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.populationAnalysisConfiguration">populationAnalysisConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#population_analysis_configuration CleanroomsIntermediateTable#population_analysis_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.analysisRules">analysisRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#analysis_rules CleanroomsIntermediateTable#analysis_rules}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#description CleanroomsIntermediateTable#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#kms_key_arn CleanroomsIntermediateTable#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#tags CleanroomsIntermediateTable#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.membershipIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#membership_identifier CleanroomsIntermediateTable#membership_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}.

---

##### `populationAnalysisConfiguration`<sup>Required</sup> <a name="populationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.populationAnalysisConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#population_analysis_configuration CleanroomsIntermediateTable#population_analysis_configuration}.

---

##### `analysisRules`<sup>Optional</sup> <a name="analysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.analysisRules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#analysis_rules CleanroomsIntermediateTable#analysis_rules}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#description CleanroomsIntermediateTable#description}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#kms_key_arn CleanroomsIntermediateTable#kms_key_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#tags CleanroomsIntermediateTable#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putAnalysisRules">putAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putPopulationAnalysisConfiguration">putPopulationAnalysisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetAnalysisRules">resetAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnalysisRules` <a name="putAnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putAnalysisRules"></a>

```java
public void putAnalysisRules(IResolvable|java.util.List<CleanroomsIntermediateTableAnalysisRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putAnalysisRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>>

---

##### `putPopulationAnalysisConfiguration` <a name="putPopulationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putPopulationAnalysisConfiguration"></a>

```java
public void putPopulationAnalysisConfiguration(CleanroomsIntermediateTablePopulationAnalysisConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putPopulationAnalysisConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CleanroomsIntermediateTableTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>>

---

##### `resetAnalysisRules` <a name="resetAnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetAnalysisRules"></a>

```java
public void resetAnalysisRules()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsIntermediateTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTable;

CleanroomsIntermediateTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTable;

CleanroomsIntermediateTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTable;

CleanroomsIntermediateTable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTable;

CleanroomsIntermediateTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CleanroomsIntermediateTable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CleanroomsIntermediateTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CleanroomsIntermediateTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CleanroomsIntermediateTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsIntermediateTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRules">analysisRules</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList">CleanroomsIntermediateTableAnalysisRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationArn">collaborationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationIdentifier">collaborationIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.intermediateTableIdentifier">intermediateTableIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipArn">membershipArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfiguration">populationAnalysisConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList">CleanroomsIntermediateTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRulesInput">analysisRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifierInput">membershipIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfigurationInput">populationAnalysisConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifier">membershipIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `analysisRules`<sup>Required</sup> <a name="analysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRules"></a>

```java
public CleanroomsIntermediateTableAnalysisRulesList getAnalysisRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList">CleanroomsIntermediateTableAnalysisRulesList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `collaborationArn`<sup>Required</sup> <a name="collaborationArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationArn"></a>

```java
public java.lang.String getCollaborationArn();
```

- *Type:* java.lang.String

---

##### `collaborationIdentifier`<sup>Required</sup> <a name="collaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationIdentifier"></a>

```java
public java.lang.String getCollaborationIdentifier();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `intermediateTableIdentifier`<sup>Required</sup> <a name="intermediateTableIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.intermediateTableIdentifier"></a>

```java
public java.lang.String getIntermediateTableIdentifier();
```

- *Type:* java.lang.String

---

##### `membershipArn`<sup>Required</sup> <a name="membershipArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipArn"></a>

```java
public java.lang.String getMembershipArn();
```

- *Type:* java.lang.String

---

##### `populationAnalysisConfiguration`<sup>Required</sup> <a name="populationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfiguration"></a>

```java
public CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference getPopulationAnalysisConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tags"></a>

```java
public CleanroomsIntermediateTableTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList">CleanroomsIntermediateTableTagsList</a>

---

##### `analysisRulesInput`<sup>Optional</sup> <a name="analysisRulesInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRulesInput"></a>

```java
public IResolvable|java.util.List<CleanroomsIntermediateTableAnalysisRules> getAnalysisRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `membershipIdentifierInput`<sup>Optional</sup> <a name="membershipIdentifierInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifierInput"></a>

```java
public java.lang.String getMembershipIdentifierInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `populationAnalysisConfigurationInput`<sup>Optional</sup> <a name="populationAnalysisConfigurationInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfigurationInput"></a>

```java
public IResolvable|CleanroomsIntermediateTablePopulationAnalysisConfiguration getPopulationAnalysisConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CleanroomsIntermediateTableTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifier"></a>

```java
public java.lang.String getMembershipIdentifier();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsIntermediateTableAnalysisRules <a name="CleanroomsIntermediateTableAnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableAnalysisRules;

CleanroomsIntermediateTableAnalysisRules.builder()
//  .policy(CleanroomsIntermediateTableAnalysisRulesPolicy)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#policy CleanroomsIntermediateTable#policy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#type CleanroomsIntermediateTable#type}. |

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.policy"></a>

```java
public CleanroomsIntermediateTableAnalysisRulesPolicy getPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#policy CleanroomsIntermediateTable#policy}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#type CleanroomsIntermediateTable#type}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicy <a name="CleanroomsIntermediateTableAnalysisRulesPolicy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableAnalysisRulesPolicy;

CleanroomsIntermediateTableAnalysisRulesPolicy.builder()
//  .v1(CleanroomsIntermediateTableAnalysisRulesPolicyV1)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy.property.v1">v1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#v1 CleanroomsIntermediateTable#v1}. |

---

##### `v1`<sup>Optional</sup> <a name="v1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy.property.v1"></a>

```java
public CleanroomsIntermediateTableAnalysisRulesPolicyV1 getV1();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#v1 CleanroomsIntermediateTable#v1}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1 <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableAnalysisRulesPolicyV1;

CleanroomsIntermediateTableAnalysisRulesPolicyV1.builder()
//  .custom(CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#custom CleanroomsIntermediateTable#custom}. |

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1.property.custom"></a>

```java
public CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom getCustom();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#custom CleanroomsIntermediateTable#custom}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom;

CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.builder()
//  .additionalAnalyses(java.lang.String)
//  .allowedAnalyses(java.util.List<java.lang.String>)
//  .allowedAnalysisProviders(java.util.List<java.lang.String>)
//  .allowedResultReceivers(java.util.List<java.lang.String>)
//  .differentialPrivacy(CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy)
//  .disallowedOutputColumns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.additionalAnalyses">additionalAnalyses</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#additional_analyses CleanroomsIntermediateTable#additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalyses">allowedAnalyses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#allowed_analyses CleanroomsIntermediateTable#allowed_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalysisProviders">allowedAnalysisProviders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#allowed_analysis_providers CleanroomsIntermediateTable#allowed_analysis_providers}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedResultReceivers">allowedResultReceivers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#allowed_result_receivers CleanroomsIntermediateTable#allowed_result_receivers}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.differentialPrivacy">differentialPrivacy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#differential_privacy CleanroomsIntermediateTable#differential_privacy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.disallowedOutputColumns">disallowedOutputColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#disallowed_output_columns CleanroomsIntermediateTable#disallowed_output_columns}. |

---

##### `additionalAnalyses`<sup>Optional</sup> <a name="additionalAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.additionalAnalyses"></a>

```java
public java.lang.String getAdditionalAnalyses();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#additional_analyses CleanroomsIntermediateTable#additional_analyses}.

---

##### `allowedAnalyses`<sup>Optional</sup> <a name="allowedAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalyses"></a>

```java
public java.util.List<java.lang.String> getAllowedAnalyses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#allowed_analyses CleanroomsIntermediateTable#allowed_analyses}.

---

##### `allowedAnalysisProviders`<sup>Optional</sup> <a name="allowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalysisProviders"></a>

```java
public java.util.List<java.lang.String> getAllowedAnalysisProviders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#allowed_analysis_providers CleanroomsIntermediateTable#allowed_analysis_providers}.

---

##### `allowedResultReceivers`<sup>Optional</sup> <a name="allowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedResultReceivers"></a>

```java
public java.util.List<java.lang.String> getAllowedResultReceivers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#allowed_result_receivers CleanroomsIntermediateTable#allowed_result_receivers}.

---

##### `differentialPrivacy`<sup>Optional</sup> <a name="differentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.differentialPrivacy"></a>

```java
public CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy getDifferentialPrivacy();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#differential_privacy CleanroomsIntermediateTable#differential_privacy}.

---

##### `disallowedOutputColumns`<sup>Optional</sup> <a name="disallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.disallowedOutputColumns"></a>

```java
public java.util.List<java.lang.String> getDisallowedOutputColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#disallowed_output_columns CleanroomsIntermediateTable#disallowed_output_columns}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy;

CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.builder()
//  .columns(IResolvable|java.util.List<CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.property.columns">columns</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#columns CleanroomsIntermediateTable#columns}. |

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.property.columns"></a>

```java
public IResolvable|java.util.List<CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns> getColumns();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#columns CleanroomsIntermediateTable#columns}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns;

CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}.

---

### CleanroomsIntermediateTableConfig <a name="CleanroomsIntermediateTableConfig" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableConfig;

CleanroomsIntermediateTableConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .membershipIdentifier(java.lang.String)
    .name(java.lang.String)
    .populationAnalysisConfiguration(CleanroomsIntermediateTablePopulationAnalysisConfiguration)
//  .analysisRules(IResolvable|java.util.List<CleanroomsIntermediateTableAnalysisRules>)
//  .description(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .tags(IResolvable|java.util.List<CleanroomsIntermediateTableTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.membershipIdentifier">membershipIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#membership_identifier CleanroomsIntermediateTable#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.populationAnalysisConfiguration">populationAnalysisConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#population_analysis_configuration CleanroomsIntermediateTable#population_analysis_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.analysisRules">analysisRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#analysis_rules CleanroomsIntermediateTable#analysis_rules}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#description CleanroomsIntermediateTable#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#kms_key_arn CleanroomsIntermediateTable#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#tags CleanroomsIntermediateTable#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.membershipIdentifier"></a>

```java
public java.lang.String getMembershipIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#membership_identifier CleanroomsIntermediateTable#membership_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}.

---

##### `populationAnalysisConfiguration`<sup>Required</sup> <a name="populationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.populationAnalysisConfiguration"></a>

```java
public CleanroomsIntermediateTablePopulationAnalysisConfiguration getPopulationAnalysisConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#population_analysis_configuration CleanroomsIntermediateTable#population_analysis_configuration}.

---

##### `analysisRules`<sup>Optional</sup> <a name="analysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.analysisRules"></a>

```java
public IResolvable|java.util.List<CleanroomsIntermediateTableAnalysisRules> getAnalysisRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#analysis_rules CleanroomsIntermediateTable#analysis_rules}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#description CleanroomsIntermediateTable#description}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#kms_key_arn CleanroomsIntermediateTable#kms_key_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CleanroomsIntermediateTableTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#tags CleanroomsIntermediateTable#tags}.

---

### CleanroomsIntermediateTablePopulationAnalysisConfiguration <a name="CleanroomsIntermediateTablePopulationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTablePopulationAnalysisConfiguration;

CleanroomsIntermediateTablePopulationAnalysisConfiguration.builder()
//  .sqlParameters(CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration.property.sqlParameters">sqlParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#sql_parameters CleanroomsIntermediateTable#sql_parameters}. |

---

##### `sqlParameters`<sup>Optional</sup> <a name="sqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration.property.sqlParameters"></a>

```java
public CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters getSqlParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#sql_parameters CleanroomsIntermediateTable#sql_parameters}.

---

### CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters <a name="CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters;

CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.builder()
//  .analysisTemplateArn(java.lang.String)
//  .queryString(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.analysisTemplateArn">analysisTemplateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#analysis_template_arn CleanroomsIntermediateTable#analysis_template_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.queryString">queryString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#query_string CleanroomsIntermediateTable#query_string}. |

---

##### `analysisTemplateArn`<sup>Optional</sup> <a name="analysisTemplateArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.analysisTemplateArn"></a>

```java
public java.lang.String getAnalysisTemplateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#analysis_template_arn CleanroomsIntermediateTable#analysis_template_arn}.

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#query_string CleanroomsIntermediateTable#query_string}.

---

### CleanroomsIntermediateTableTags <a name="CleanroomsIntermediateTableTags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableTags;

CleanroomsIntermediateTableTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#key CleanroomsIntermediateTable#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#value CleanroomsIntermediateTable#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#key CleanroomsIntermediateTable#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_intermediate_table#value CleanroomsIntermediateTable#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsIntermediateTableAnalysisRulesList <a name="CleanroomsIntermediateTableAnalysisRulesList" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableAnalysisRulesList;

new CleanroomsIntermediateTableAnalysisRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.get"></a>

```java
public CleanroomsIntermediateTableAnalysisRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CleanroomsIntermediateTableAnalysisRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>>

---


### CleanroomsIntermediateTableAnalysisRulesOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableAnalysisRulesOutputReference;

new CleanroomsIntermediateTableAnalysisRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicy` <a name="putPolicy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.putPolicy"></a>

```java
public void putPolicy(CleanroomsIntermediateTableAnalysisRulesPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

---

##### `resetPolicy` <a name="resetPolicy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetPolicy"></a>

```java
public void resetPolicy()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policyInput">policyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policy"></a>

```java
public CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference getPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference</a>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policyInput"></a>

```java
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicy getPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsIntermediateTableAnalysisRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference;

new CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.putV1">putV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resetV1">resetV1</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putV1` <a name="putV1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.putV1"></a>

```java
public void putV1(CleanroomsIntermediateTableAnalysisRulesPolicyV1 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.putV1.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

---

##### `resetV1` <a name="resetV1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resetV1"></a>

```java
public void resetV1()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1">v1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1Input">v1Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `v1`<sup>Required</sup> <a name="v1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1"></a>

```java
public CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference getV1();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference</a>

---

##### `v1Input`<sup>Optional</sup> <a name="v1Input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1Input"></a>

```java
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1 getV1Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList;

new CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get"></a>

```java
public CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference;

new CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference;

new CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns">putColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resetColumns">resetColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumns` <a name="putColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns"></a>

```java
public void putColumns(IResolvable|java.util.List<CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>>

---

##### `resetColumns` <a name="resetColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resetColumns"></a>

```java
public void resetColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columnsInput">columnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns"></a>

```java
public CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList getColumns();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a>

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columnsInput"></a>

```java
public IResolvable|java.util.List<CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns> getColumnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference;

new CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy">putDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAdditionalAnalyses">resetAdditionalAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalyses">resetAllowedAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalysisProviders">resetAllowedAnalysisProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedResultReceivers">resetAllowedResultReceivers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDifferentialPrivacy">resetDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDisallowedOutputColumns">resetDisallowedOutputColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDifferentialPrivacy` <a name="putDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy"></a>

```java
public void putDifferentialPrivacy(CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---

##### `resetAdditionalAnalyses` <a name="resetAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAdditionalAnalyses"></a>

```java
public void resetAdditionalAnalyses()
```

##### `resetAllowedAnalyses` <a name="resetAllowedAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalyses"></a>

```java
public void resetAllowedAnalyses()
```

##### `resetAllowedAnalysisProviders` <a name="resetAllowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalysisProviders"></a>

```java
public void resetAllowedAnalysisProviders()
```

##### `resetAllowedResultReceivers` <a name="resetAllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedResultReceivers"></a>

```java
public void resetAllowedResultReceivers()
```

##### `resetDifferentialPrivacy` <a name="resetDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDifferentialPrivacy"></a>

```java
public void resetDifferentialPrivacy()
```

##### `resetDisallowedOutputColumns` <a name="resetDisallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDisallowedOutputColumns"></a>

```java
public void resetDisallowedOutputColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy">differentialPrivacy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalysesInput">additionalAnalysesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysesInput">allowedAnalysesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProvidersInput">allowedAnalysisProvidersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceiversInput">allowedResultReceiversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacyInput">differentialPrivacyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumnsInput">disallowedOutputColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses">additionalAnalyses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses">allowedAnalyses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders">allowedAnalysisProviders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers">allowedResultReceivers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns">disallowedOutputColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `differentialPrivacy`<sup>Required</sup> <a name="differentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy"></a>

```java
public CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference getDifferentialPrivacy();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a>

---

##### `additionalAnalysesInput`<sup>Optional</sup> <a name="additionalAnalysesInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalysesInput"></a>

```java
public java.lang.String getAdditionalAnalysesInput();
```

- *Type:* java.lang.String

---

##### `allowedAnalysesInput`<sup>Optional</sup> <a name="allowedAnalysesInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAnalysesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedAnalysisProvidersInput`<sup>Optional</sup> <a name="allowedAnalysisProvidersInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProvidersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAnalysisProvidersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedResultReceiversInput`<sup>Optional</sup> <a name="allowedResultReceiversInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceiversInput"></a>

```java
public java.util.List<java.lang.String> getAllowedResultReceiversInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `differentialPrivacyInput`<sup>Optional</sup> <a name="differentialPrivacyInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacyInput"></a>

```java
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy getDifferentialPrivacyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---

##### `disallowedOutputColumnsInput`<sup>Optional</sup> <a name="disallowedOutputColumnsInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumnsInput"></a>

```java
public java.util.List<java.lang.String> getDisallowedOutputColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalAnalyses`<sup>Required</sup> <a name="additionalAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses"></a>

```java
public java.lang.String getAdditionalAnalyses();
```

- *Type:* java.lang.String

---

##### `allowedAnalyses`<sup>Required</sup> <a name="allowedAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses"></a>

```java
public java.util.List<java.lang.String> getAllowedAnalyses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedAnalysisProviders`<sup>Required</sup> <a name="allowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders"></a>

```java
public java.util.List<java.lang.String> getAllowedAnalysisProviders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedResultReceivers`<sup>Required</sup> <a name="allowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers"></a>

```java
public java.util.List<java.lang.String> getAllowedResultReceivers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disallowedOutputColumns`<sup>Required</sup> <a name="disallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns"></a>

```java
public java.util.List<java.lang.String> getDisallowedOutputColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference;

new CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom">putCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resetCustom">resetCustom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustom` <a name="putCustom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom"></a>

```java
public void putCustom(CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

---

##### `resetCustom` <a name="resetCustom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resetCustom"></a>

```java
public void resetCustom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.customInput">customInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.custom"></a>

```java
public CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference getCustom();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference</a>

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.customInput"></a>

```java
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom getCustomInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsIntermediateTableAnalysisRulesPolicyV1 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

---


### CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference <a name="CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference;

new CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.putSqlParameters">putSqlParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resetSqlParameters">resetSqlParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSqlParameters` <a name="putSqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.putSqlParameters"></a>

```java
public void putSqlParameters(CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.putSqlParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

---

##### `resetSqlParameters` <a name="resetSqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resetSqlParameters"></a>

```java
public void resetSqlParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParameters">sqlParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParametersInput">sqlParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sqlParameters`<sup>Required</sup> <a name="sqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParameters"></a>

```java
public CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference getSqlParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference</a>

---

##### `sqlParametersInput`<sup>Optional</sup> <a name="sqlParametersInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParametersInput"></a>

```java
public IResolvable|CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters getSqlParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsIntermediateTablePopulationAnalysisConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

---


### CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference <a name="CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference;

new CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetAnalysisTemplateArn">resetAnalysisTemplateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnalysisTemplateArn` <a name="resetAnalysisTemplateArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetAnalysisTemplateArn"></a>

```java
public void resetAnalysisTemplateArn()
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetQueryString"></a>

```java
public void resetQueryString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArnInput">analysisTemplateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArn">analysisTemplateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryString">queryString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `analysisTemplateArnInput`<sup>Optional</sup> <a name="analysisTemplateArnInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArnInput"></a>

```java
public java.lang.String getAnalysisTemplateArnInput();
```

- *Type:* java.lang.String

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryStringInput"></a>

```java
public java.lang.String getQueryStringInput();
```

- *Type:* java.lang.String

---

##### `analysisTemplateArn`<sup>Required</sup> <a name="analysisTemplateArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArn"></a>

```java
public java.lang.String getAnalysisTemplateArn();
```

- *Type:* java.lang.String

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

---


### CleanroomsIntermediateTableTagsList <a name="CleanroomsIntermediateTableTagsList" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableTagsList;

new CleanroomsIntermediateTableTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.get"></a>

```java
public CleanroomsIntermediateTableTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CleanroomsIntermediateTableTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>>

---


### CleanroomsIntermediateTableTagsOutputReference <a name="CleanroomsIntermediateTableTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cleanrooms_intermediate_table.CleanroomsIntermediateTableTagsOutputReference;

new CleanroomsIntermediateTableTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CleanroomsIntermediateTableTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>

---



