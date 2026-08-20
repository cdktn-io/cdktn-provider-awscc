# `billingconductorBillingGroup` Submodule <a name="`billingconductorBillingGroup` Submodule" id="@cdktn/provider-awscc.billingconductorBillingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingconductorBillingGroup <a name="BillingconductorBillingGroup" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group awscc_billingconductor_billing_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_billing_group.BillingconductorBillingGroup;

BillingconductorBillingGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountGrouping(BillingconductorBillingGroupAccountGrouping)
    .computationPreference(BillingconductorBillingGroupComputationPreference)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .primaryAccountId(java.lang.String)
//  .tags(IResolvable|java.util.List<BillingconductorBillingGroupTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.accountGrouping">accountGrouping</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#account_grouping BillingconductorBillingGroup#account_grouping}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.computationPreference">computationPreference</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#computation_preference BillingconductorBillingGroup#computation_preference}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#name BillingconductorBillingGroup#name}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#description BillingconductorBillingGroup#description}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.primaryAccountId">primaryAccountId</a></code> | <code>java.lang.String</code> | This account will act as a virtual payer account of the billing group. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#tags BillingconductorBillingGroup#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountGrouping`<sup>Required</sup> <a name="accountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.accountGrouping"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#account_grouping BillingconductorBillingGroup#account_grouping}.

---

##### `computationPreference`<sup>Required</sup> <a name="computationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.computationPreference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#computation_preference BillingconductorBillingGroup#computation_preference}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#name BillingconductorBillingGroup#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#description BillingconductorBillingGroup#description}.

---

##### `primaryAccountId`<sup>Optional</sup> <a name="primaryAccountId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.primaryAccountId"></a>

- *Type:* java.lang.String

This account will act as a virtual payer account of the billing group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#primary_account_id BillingconductorBillingGroup#primary_account_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#tags BillingconductorBillingGroup#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping">putAccountGrouping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putComputationPreference">putComputationPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetPrimaryAccountId">resetPrimaryAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccountGrouping` <a name="putAccountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping"></a>

```java
public void putAccountGrouping(BillingconductorBillingGroupAccountGrouping value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

---

##### `putComputationPreference` <a name="putComputationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putComputationPreference"></a>

```java
public void putComputationPreference(BillingconductorBillingGroupComputationPreference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putComputationPreference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BillingconductorBillingGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetPrimaryAccountId` <a name="resetPrimaryAccountId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetPrimaryAccountId"></a>

```java
public void resetPrimaryAccountId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BillingconductorBillingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.billingconductor_billing_group.BillingconductorBillingGroup;

BillingconductorBillingGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.billingconductor_billing_group.BillingconductorBillingGroup;

BillingconductorBillingGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.billingconductor_billing_group.BillingconductorBillingGroup;

BillingconductorBillingGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.billingconductor_billing_group.BillingconductorBillingGroup;

BillingconductorBillingGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BillingconductorBillingGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BillingconductorBillingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BillingconductorBillingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BillingconductorBillingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BillingconductorBillingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGrouping">accountGrouping</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference">BillingconductorBillingGroupAccountGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreference">computationPreference</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference">BillingconductorBillingGroupComputationPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList">BillingconductorBillingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGroupingInput">accountGroupingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreferenceInput">computationPreferenceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountIdInput">primaryAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountId">primaryAccountId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountGrouping`<sup>Required</sup> <a name="accountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGrouping"></a>

```java
public BillingconductorBillingGroupAccountGroupingOutputReference getAccountGrouping();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference">BillingconductorBillingGroupAccountGroupingOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `computationPreference`<sup>Required</sup> <a name="computationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreference"></a>

```java
public BillingconductorBillingGroupComputationPreferenceOutputReference getComputationPreference();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference">BillingconductorBillingGroupComputationPreferenceOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lastModifiedTime"></a>

```java
public java.lang.Number getLastModifiedTime();
```

- *Type:* java.lang.Number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tags"></a>

```java
public BillingconductorBillingGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList">BillingconductorBillingGroupTagsList</a>

---

##### `accountGroupingInput`<sup>Optional</sup> <a name="accountGroupingInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGroupingInput"></a>

```java
public IResolvable|BillingconductorBillingGroupAccountGrouping getAccountGroupingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

---

##### `computationPreferenceInput`<sup>Optional</sup> <a name="computationPreferenceInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreferenceInput"></a>

```java
public IResolvable|BillingconductorBillingGroupComputationPreference getComputationPreferenceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `primaryAccountIdInput`<sup>Optional</sup> <a name="primaryAccountIdInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountIdInput"></a>

```java
public java.lang.String getPrimaryAccountIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BillingconductorBillingGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primaryAccountId`<sup>Required</sup> <a name="primaryAccountId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountId"></a>

```java
public java.lang.String getPrimaryAccountId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BillingconductorBillingGroupAccountGrouping <a name="BillingconductorBillingGroupAccountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_billing_group.BillingconductorBillingGroupAccountGrouping;

BillingconductorBillingGroupAccountGrouping.builder()
//  .autoAssociate(java.lang.Boolean|IResolvable)
//  .linkedAccountIds(java.util.List<java.lang.String>)
//  .responsibilityTransferArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.autoAssociate">autoAssociate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#auto_associate BillingconductorBillingGroup#auto_associate}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.linkedAccountIds">linkedAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#linked_account_ids BillingconductorBillingGroup#linked_account_ids}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.responsibilityTransferArn">responsibilityTransferArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#responsibility_transfer_arn BillingconductorBillingGroup#responsibility_transfer_arn}. |

---

##### `autoAssociate`<sup>Optional</sup> <a name="autoAssociate" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.autoAssociate"></a>

```java
public java.lang.Boolean|IResolvable getAutoAssociate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#auto_associate BillingconductorBillingGroup#auto_associate}.

---

##### `linkedAccountIds`<sup>Optional</sup> <a name="linkedAccountIds" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.linkedAccountIds"></a>

```java
public java.util.List<java.lang.String> getLinkedAccountIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#linked_account_ids BillingconductorBillingGroup#linked_account_ids}.

---

##### `responsibilityTransferArn`<sup>Optional</sup> <a name="responsibilityTransferArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.responsibilityTransferArn"></a>

```java
public java.lang.String getResponsibilityTransferArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#responsibility_transfer_arn BillingconductorBillingGroup#responsibility_transfer_arn}.

---

### BillingconductorBillingGroupComputationPreference <a name="BillingconductorBillingGroupComputationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_billing_group.BillingconductorBillingGroupComputationPreference;

BillingconductorBillingGroupComputationPreference.builder()
    .pricingPlanArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference.property.pricingPlanArn">pricingPlanArn</a></code> | <code>java.lang.String</code> | ARN of the attached pricing plan. |

---

##### `pricingPlanArn`<sup>Required</sup> <a name="pricingPlanArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference.property.pricingPlanArn"></a>

```java
public java.lang.String getPricingPlanArn();
```

- *Type:* java.lang.String

ARN of the attached pricing plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#pricing_plan_arn BillingconductorBillingGroup#pricing_plan_arn}

---

### BillingconductorBillingGroupConfig <a name="BillingconductorBillingGroupConfig" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_billing_group.BillingconductorBillingGroupConfig;

BillingconductorBillingGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountGrouping(BillingconductorBillingGroupAccountGrouping)
    .computationPreference(BillingconductorBillingGroupComputationPreference)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .primaryAccountId(java.lang.String)
//  .tags(IResolvable|java.util.List<BillingconductorBillingGroupTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.accountGrouping">accountGrouping</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#account_grouping BillingconductorBillingGroup#account_grouping}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.computationPreference">computationPreference</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#computation_preference BillingconductorBillingGroup#computation_preference}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#name BillingconductorBillingGroup#name}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#description BillingconductorBillingGroup#description}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.primaryAccountId">primaryAccountId</a></code> | <code>java.lang.String</code> | This account will act as a virtual payer account of the billing group. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#tags BillingconductorBillingGroup#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountGrouping`<sup>Required</sup> <a name="accountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.accountGrouping"></a>

```java
public BillingconductorBillingGroupAccountGrouping getAccountGrouping();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#account_grouping BillingconductorBillingGroup#account_grouping}.

---

##### `computationPreference`<sup>Required</sup> <a name="computationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.computationPreference"></a>

```java
public BillingconductorBillingGroupComputationPreference getComputationPreference();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#computation_preference BillingconductorBillingGroup#computation_preference}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#name BillingconductorBillingGroup#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#description BillingconductorBillingGroup#description}.

---

##### `primaryAccountId`<sup>Optional</sup> <a name="primaryAccountId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.primaryAccountId"></a>

```java
public java.lang.String getPrimaryAccountId();
```

- *Type:* java.lang.String

This account will act as a virtual payer account of the billing group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#primary_account_id BillingconductorBillingGroup#primary_account_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BillingconductorBillingGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#tags BillingconductorBillingGroup#tags}.

---

### BillingconductorBillingGroupTags <a name="BillingconductorBillingGroupTags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_billing_group.BillingconductorBillingGroupTags;

BillingconductorBillingGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#key BillingconductorBillingGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#value BillingconductorBillingGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#key BillingconductorBillingGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_billing_group#value BillingconductorBillingGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingconductorBillingGroupAccountGroupingOutputReference <a name="BillingconductorBillingGroupAccountGroupingOutputReference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_billing_group.BillingconductorBillingGroupAccountGroupingOutputReference;

new BillingconductorBillingGroupAccountGroupingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetAutoAssociate">resetAutoAssociate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetLinkedAccountIds">resetLinkedAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetResponsibilityTransferArn">resetResponsibilityTransferArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoAssociate` <a name="resetAutoAssociate" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetAutoAssociate"></a>

```java
public void resetAutoAssociate()
```

##### `resetLinkedAccountIds` <a name="resetLinkedAccountIds" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetLinkedAccountIds"></a>

```java
public void resetLinkedAccountIds()
```

##### `resetResponsibilityTransferArn` <a name="resetResponsibilityTransferArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetResponsibilityTransferArn"></a>

```java
public void resetResponsibilityTransferArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociateInput">autoAssociateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIdsInput">linkedAccountIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArnInput">responsibilityTransferArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociate">autoAssociate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIds">linkedAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArn">responsibilityTransferArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoAssociateInput`<sup>Optional</sup> <a name="autoAssociateInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociateInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoAssociateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `linkedAccountIdsInput`<sup>Optional</sup> <a name="linkedAccountIdsInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIdsInput"></a>

```java
public java.util.List<java.lang.String> getLinkedAccountIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responsibilityTransferArnInput`<sup>Optional</sup> <a name="responsibilityTransferArnInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArnInput"></a>

```java
public java.lang.String getResponsibilityTransferArnInput();
```

- *Type:* java.lang.String

---

##### `autoAssociate`<sup>Required</sup> <a name="autoAssociate" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociate"></a>

```java
public java.lang.Boolean|IResolvable getAutoAssociate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `linkedAccountIds`<sup>Required</sup> <a name="linkedAccountIds" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIds"></a>

```java
public java.util.List<java.lang.String> getLinkedAccountIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responsibilityTransferArn`<sup>Required</sup> <a name="responsibilityTransferArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArn"></a>

```java
public java.lang.String getResponsibilityTransferArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.internalValue"></a>

```java
public IResolvable|BillingconductorBillingGroupAccountGrouping getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

---


### BillingconductorBillingGroupComputationPreferenceOutputReference <a name="BillingconductorBillingGroupComputationPreferenceOutputReference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_billing_group.BillingconductorBillingGroupComputationPreferenceOutputReference;

new BillingconductorBillingGroupComputationPreferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArnInput">pricingPlanArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArn">pricingPlanArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pricingPlanArnInput`<sup>Optional</sup> <a name="pricingPlanArnInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArnInput"></a>

```java
public java.lang.String getPricingPlanArnInput();
```

- *Type:* java.lang.String

---

##### `pricingPlanArn`<sup>Required</sup> <a name="pricingPlanArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArn"></a>

```java
public java.lang.String getPricingPlanArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.internalValue"></a>

```java
public IResolvable|BillingconductorBillingGroupComputationPreference getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

---


### BillingconductorBillingGroupTagsList <a name="BillingconductorBillingGroupTagsList" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_billing_group.BillingconductorBillingGroupTagsList;

new BillingconductorBillingGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.get"></a>

```java
public BillingconductorBillingGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BillingconductorBillingGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>>

---


### BillingconductorBillingGroupTagsOutputReference <a name="BillingconductorBillingGroupTagsOutputReference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_billing_group.BillingconductorBillingGroupTagsOutputReference;

new BillingconductorBillingGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BillingconductorBillingGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>

---



