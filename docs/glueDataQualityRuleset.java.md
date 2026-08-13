# `glueDataQualityRuleset` Submodule <a name="`glueDataQualityRuleset` Submodule" id="@cdktn/provider-awscc.glueDataQualityRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueDataQualityRuleset <a name="GlueDataQualityRuleset" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset awscc_glue_data_quality_ruleset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_data_quality_ruleset.GlueDataQualityRuleset;

GlueDataQualityRuleset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .clientToken(java.lang.String)
//  .description(java.lang.String)
//  .ruleset(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .targetTable(GlueDataQualityRulesetTargetTable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A unique name for the data quality ruleset. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.clientToken">clientToken</a></code> | <code>java.lang.String</code> | A unique token for idempotency. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the data quality ruleset. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.ruleset">ruleset</a></code> | <code>java.lang.String</code> | A Data Quality Definition Language (DQDL) ruleset. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | An object representing an AWS Glue table. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A unique name for the data quality ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#name GlueDataQualityRuleset#name}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.clientToken"></a>

- *Type:* java.lang.String

A unique token for idempotency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#client_token GlueDataQualityRuleset#client_token}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the data quality ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#description GlueDataQualityRuleset#description}

---

##### `ruleset`<sup>Optional</sup> <a name="ruleset" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.ruleset"></a>

- *Type:* java.lang.String

A Data Quality Definition Language (DQDL) ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#ruleset GlueDataQualityRuleset#ruleset}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#tags GlueDataQualityRuleset#tags}

---

##### `targetTable`<sup>Optional</sup> <a name="targetTable" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.targetTable"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

An object representing an AWS Glue table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#target_table GlueDataQualityRuleset#target_table}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable">putTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetRuleset">resetRuleset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetTargetTable">resetTargetTable</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTargetTable` <a name="putTargetTable" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable"></a>

```java
public void putTargetTable(GlueDataQualityRulesetTargetTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

---

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetClientToken"></a>

```java
public void resetClientToken()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRuleset` <a name="resetRuleset" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetRuleset"></a>

```java
public void resetRuleset()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetTable` <a name="resetTargetTable" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.resetTargetTable"></a>

```java
public void resetTargetTable()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueDataQualityRuleset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isConstruct"></a>

```java
import io.cdktn.providers.awscc.glue_data_quality_ruleset.GlueDataQualityRuleset;

GlueDataQualityRuleset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.glue_data_quality_ruleset.GlueDataQualityRuleset;

GlueDataQualityRuleset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.glue_data_quality_ruleset.GlueDataQualityRuleset;

GlueDataQualityRuleset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.glue_data_quality_ruleset.GlueDataQualityRuleset;

GlueDataQualityRuleset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GlueDataQualityRuleset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GlueDataQualityRuleset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GlueDataQualityRuleset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GlueDataQualityRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GlueDataQualityRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference">GlueDataQualityRulesetTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.clientTokenInput">clientTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.rulesetInput">rulesetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTableInput">targetTableInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.ruleset">ruleset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `targetTable`<sup>Required</sup> <a name="targetTable" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTable"></a>

```java
public GlueDataQualityRulesetTargetTableOutputReference getTargetTable();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference">GlueDataQualityRulesetTargetTableOutputReference</a>

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.clientTokenInput"></a>

```java
public java.lang.String getClientTokenInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rulesetInput`<sup>Optional</sup> <a name="rulesetInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.rulesetInput"></a>

```java
public java.lang.String getRulesetInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetTableInput`<sup>Optional</sup> <a name="targetTableInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTableInput"></a>

```java
public IResolvable|GlueDataQualityRulesetTargetTable getTargetTableInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.ruleset"></a>

```java
public java.lang.String getRuleset();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRuleset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlueDataQualityRulesetConfig <a name="GlueDataQualityRulesetConfig" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_data_quality_ruleset.GlueDataQualityRulesetConfig;

GlueDataQualityRulesetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .clientToken(java.lang.String)
//  .description(java.lang.String)
//  .ruleset(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .targetTable(GlueDataQualityRulesetTargetTable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.name">name</a></code> | <code>java.lang.String</code> | A unique name for the data quality ruleset. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | A unique token for idempotency. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the data quality ruleset. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.ruleset">ruleset</a></code> | <code>java.lang.String</code> | A Data Quality Definition Language (DQDL) ruleset. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | An object representing an AWS Glue table. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique name for the data quality ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#name GlueDataQualityRuleset#name}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

A unique token for idempotency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#client_token GlueDataQualityRuleset#client_token}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the data quality ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#description GlueDataQualityRuleset#description}

---

##### `ruleset`<sup>Optional</sup> <a name="ruleset" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.ruleset"></a>

```java
public java.lang.String getRuleset();
```

- *Type:* java.lang.String

A Data Quality Definition Language (DQDL) ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#ruleset GlueDataQualityRuleset#ruleset}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#tags GlueDataQualityRuleset#tags}

---

##### `targetTable`<sup>Optional</sup> <a name="targetTable" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.targetTable"></a>

```java
public GlueDataQualityRulesetTargetTable getTargetTable();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

An object representing an AWS Glue table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#target_table GlueDataQualityRuleset#target_table}

---

### GlueDataQualityRulesetTargetTable <a name="GlueDataQualityRulesetTargetTable" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_data_quality_ruleset.GlueDataQualityRulesetTargetTable;

GlueDataQualityRulesetTargetTable.builder()
//  .databaseName(java.lang.String)
//  .tableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of the database where the AWS Glue table exists. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.tableName">tableName</a></code> | <code>java.lang.String</code> | The name of the AWS Glue table. |

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

The name of the database where the AWS Glue table exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#database_name GlueDataQualityRuleset#database_name}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

The name of the AWS Glue table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_quality_ruleset#table_name GlueDataQualityRuleset#table_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueDataQualityRulesetTargetTableOutputReference <a name="GlueDataQualityRulesetTargetTableOutputReference" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_data_quality_ruleset.GlueDataQualityRulesetTargetTableOutputReference;

new GlueDataQualityRulesetTargetTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resetTableName"></a>

```java
public void resetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueDataQualityRulesetTargetTable getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

---



