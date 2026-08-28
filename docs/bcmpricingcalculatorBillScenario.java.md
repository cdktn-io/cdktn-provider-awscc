# `bcmpricingcalculatorBillScenario` Submodule <a name="`bcmpricingcalculatorBillScenario` Submodule" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmpricingcalculatorBillScenario <a name="BcmpricingcalculatorBillScenario" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario awscc_bcmpricingcalculator_bill_scenario}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcmpricingcalculator_bill_scenario.BcmpricingcalculatorBillScenario;

BcmpricingcalculatorBillScenario.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .costCategoryGroupSharingPreferenceArn(java.lang.String)
//  .expiresAt(java.lang.String)
//  .groupSharingPreference(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<BcmpricingcalculatorBillScenarioTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.costCategoryGroupSharingPreferenceArn">costCategoryGroupSharingPreferenceArn</a></code> | <code>java.lang.String</code> | The ARN of the cost category group sharing preference. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | The timestamp when the bill scenario expires. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.groupSharingPreference">groupSharingPreference</a></code> | <code>java.lang.String</code> | The group sharing preference for the bill scenario. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the bill scenario. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `costCategoryGroupSharingPreferenceArn`<sup>Optional</sup> <a name="costCategoryGroupSharingPreferenceArn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.costCategoryGroupSharingPreferenceArn"></a>

- *Type:* java.lang.String

The ARN of the cost category group sharing preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#cost_category_group_sharing_preference_arn BcmpricingcalculatorBillScenario#cost_category_group_sharing_preference_arn}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.expiresAt"></a>

- *Type:* java.lang.String

The timestamp when the bill scenario expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#expires_at BcmpricingcalculatorBillScenario#expires_at}

---

##### `groupSharingPreference`<sup>Optional</sup> <a name="groupSharingPreference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.groupSharingPreference"></a>

- *Type:* java.lang.String

The group sharing preference for the bill scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#group_sharing_preference BcmpricingcalculatorBillScenario#group_sharing_preference}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the bill scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#name BcmpricingcalculatorBillScenario#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#tags BcmpricingcalculatorBillScenario#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetCostCategoryGroupSharingPreferenceArn">resetCostCategoryGroupSharingPreferenceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetExpiresAt">resetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetGroupSharingPreference">resetGroupSharingPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BcmpricingcalculatorBillScenarioTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>>

---

##### `resetCostCategoryGroupSharingPreferenceArn` <a name="resetCostCategoryGroupSharingPreferenceArn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetCostCategoryGroupSharingPreferenceArn"></a>

```java
public void resetCostCategoryGroupSharingPreferenceArn()
```

##### `resetExpiresAt` <a name="resetExpiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetExpiresAt"></a>

```java
public void resetExpiresAt()
```

##### `resetGroupSharingPreference` <a name="resetGroupSharingPreference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetGroupSharingPreference"></a>

```java
public void resetGroupSharingPreference()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BcmpricingcalculatorBillScenario resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bcmpricingcalculator_bill_scenario.BcmpricingcalculatorBillScenario;

BcmpricingcalculatorBillScenario.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bcmpricingcalculator_bill_scenario.BcmpricingcalculatorBillScenario;

BcmpricingcalculatorBillScenario.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bcmpricingcalculator_bill_scenario.BcmpricingcalculatorBillScenario;

BcmpricingcalculatorBillScenario.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bcmpricingcalculator_bill_scenario.BcmpricingcalculatorBillScenario;

BcmpricingcalculatorBillScenario.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BcmpricingcalculatorBillScenario.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BcmpricingcalculatorBillScenario resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BcmpricingcalculatorBillScenario to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BcmpricingcalculatorBillScenario that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BcmpricingcalculatorBillScenario to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.billInterval">billInterval</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference">BcmpricingcalculatorBillScenarioBillIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.billScenarioId">billScenarioId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.failureMessage">failureMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList">BcmpricingcalculatorBillScenarioTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArnInput">costCategoryGroupSharingPreferenceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.expiresAtInput">expiresAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.groupSharingPreferenceInput">groupSharingPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArn">costCategoryGroupSharingPreferenceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.groupSharingPreference">groupSharingPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `billInterval`<sup>Required</sup> <a name="billInterval" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.billInterval"></a>

```java
public BcmpricingcalculatorBillScenarioBillIntervalOutputReference getBillInterval();
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference">BcmpricingcalculatorBillScenarioBillIntervalOutputReference</a>

---

##### `billScenarioId`<sup>Required</sup> <a name="billScenarioId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.billScenarioId"></a>

```java
public java.lang.String getBillScenarioId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `failureMessage`<sup>Required</sup> <a name="failureMessage" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.failureMessage"></a>

```java
public java.lang.String getFailureMessage();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tags"></a>

```java
public BcmpricingcalculatorBillScenarioTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList">BcmpricingcalculatorBillScenarioTagsList</a>

---

##### `costCategoryGroupSharingPreferenceArnInput`<sup>Optional</sup> <a name="costCategoryGroupSharingPreferenceArnInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArnInput"></a>

```java
public java.lang.String getCostCategoryGroupSharingPreferenceArnInput();
```

- *Type:* java.lang.String

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.expiresAtInput"></a>

```java
public java.lang.String getExpiresAtInput();
```

- *Type:* java.lang.String

---

##### `groupSharingPreferenceInput`<sup>Optional</sup> <a name="groupSharingPreferenceInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.groupSharingPreferenceInput"></a>

```java
public java.lang.String getGroupSharingPreferenceInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BcmpricingcalculatorBillScenarioTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>>

---

##### `costCategoryGroupSharingPreferenceArn`<sup>Required</sup> <a name="costCategoryGroupSharingPreferenceArn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArn"></a>

```java
public java.lang.String getCostCategoryGroupSharingPreferenceArn();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `groupSharingPreference`<sup>Required</sup> <a name="groupSharingPreference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.groupSharingPreference"></a>

```java
public java.lang.String getGroupSharingPreference();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BcmpricingcalculatorBillScenarioBillInterval <a name="BcmpricingcalculatorBillScenarioBillInterval" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcmpricingcalculator_bill_scenario.BcmpricingcalculatorBillScenarioBillInterval;

BcmpricingcalculatorBillScenarioBillInterval.builder()
    .build();
```


### BcmpricingcalculatorBillScenarioConfig <a name="BcmpricingcalculatorBillScenarioConfig" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcmpricingcalculator_bill_scenario.BcmpricingcalculatorBillScenarioConfig;

BcmpricingcalculatorBillScenarioConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .costCategoryGroupSharingPreferenceArn(java.lang.String)
//  .expiresAt(java.lang.String)
//  .groupSharingPreference(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<BcmpricingcalculatorBillScenarioTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.costCategoryGroupSharingPreferenceArn">costCategoryGroupSharingPreferenceArn</a></code> | <code>java.lang.String</code> | The ARN of the cost category group sharing preference. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | The timestamp when the bill scenario expires. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.groupSharingPreference">groupSharingPreference</a></code> | <code>java.lang.String</code> | The group sharing preference for the bill scenario. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the bill scenario. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `costCategoryGroupSharingPreferenceArn`<sup>Optional</sup> <a name="costCategoryGroupSharingPreferenceArn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.costCategoryGroupSharingPreferenceArn"></a>

```java
public java.lang.String getCostCategoryGroupSharingPreferenceArn();
```

- *Type:* java.lang.String

The ARN of the cost category group sharing preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#cost_category_group_sharing_preference_arn BcmpricingcalculatorBillScenario#cost_category_group_sharing_preference_arn}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

The timestamp when the bill scenario expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#expires_at BcmpricingcalculatorBillScenario#expires_at}

---

##### `groupSharingPreference`<sup>Optional</sup> <a name="groupSharingPreference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.groupSharingPreference"></a>

```java
public java.lang.String getGroupSharingPreference();
```

- *Type:* java.lang.String

The group sharing preference for the bill scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#group_sharing_preference BcmpricingcalculatorBillScenario#group_sharing_preference}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the bill scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#name BcmpricingcalculatorBillScenario#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BcmpricingcalculatorBillScenarioTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#tags BcmpricingcalculatorBillScenario#tags}

---

### BcmpricingcalculatorBillScenarioTags <a name="BcmpricingcalculatorBillScenarioTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcmpricingcalculator_bill_scenario.BcmpricingcalculatorBillScenarioTags;

BcmpricingcalculatorBillScenarioTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#key BcmpricingcalculatorBillScenario#key}. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#value BcmpricingcalculatorBillScenario#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#key BcmpricingcalculatorBillScenario#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmpricingcalculator_bill_scenario#value BcmpricingcalculatorBillScenario#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BcmpricingcalculatorBillScenarioBillIntervalOutputReference <a name="BcmpricingcalculatorBillScenarioBillIntervalOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcmpricingcalculator_bill_scenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference;

new BcmpricingcalculatorBillScenarioBillIntervalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.end">end</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.start">start</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval">BcmpricingcalculatorBillScenarioBillInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.internalValue"></a>

```java
public BcmpricingcalculatorBillScenarioBillInterval getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval">BcmpricingcalculatorBillScenarioBillInterval</a>

---


### BcmpricingcalculatorBillScenarioTagsList <a name="BcmpricingcalculatorBillScenarioTagsList" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcmpricingcalculator_bill_scenario.BcmpricingcalculatorBillScenarioTagsList;

new BcmpricingcalculatorBillScenarioTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.get"></a>

```java
public BcmpricingcalculatorBillScenarioTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BcmpricingcalculatorBillScenarioTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>>

---


### BcmpricingcalculatorBillScenarioTagsOutputReference <a name="BcmpricingcalculatorBillScenarioTagsOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bcmpricingcalculator_bill_scenario.BcmpricingcalculatorBillScenarioTagsOutputReference;

new BcmpricingcalculatorBillScenarioTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BcmpricingcalculatorBillScenarioTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>

---



