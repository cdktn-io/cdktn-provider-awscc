# `resiliencehubResiliencyPolicy` Submodule <a name="`resiliencehubResiliencyPolicy` Submodule" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResiliencehubResiliencyPolicy <a name="ResiliencehubResiliencyPolicy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy awscc_resiliencehub_resiliency_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicy;

ResiliencehubResiliencyPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .policy(ResiliencehubResiliencyPolicyPolicy)
    .policyName(java.lang.String)
    .tier(java.lang.String)
//  .dataLocationConstraint(java.lang.String)
//  .policyDescription(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy ResiliencehubResiliencyPolicy#policy}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.policyName">policyName</a></code> | <code>java.lang.String</code> | Name of Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | Resiliency Policy Tier. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.dataLocationConstraint">dataLocationConstraint</a></code> | <code>java.lang.String</code> | Data Location Constraint of the Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.policyDescription">policyDescription</a></code> | <code>java.lang.String</code> | Description of Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.policy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy ResiliencehubResiliencyPolicy#policy}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.policyName"></a>

- *Type:* java.lang.String

Name of Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy_name ResiliencehubResiliencyPolicy#policy_name}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

Resiliency Policy Tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#tier ResiliencehubResiliencyPolicy#tier}

---

##### `dataLocationConstraint`<sup>Optional</sup> <a name="dataLocationConstraint" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.dataLocationConstraint"></a>

- *Type:* java.lang.String

Data Location Constraint of the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#data_location_constraint ResiliencehubResiliencyPolicy#data_location_constraint}

---

##### `policyDescription`<sup>Optional</sup> <a name="policyDescription" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.policyDescription"></a>

- *Type:* java.lang.String

Description of Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy_description ResiliencehubResiliencyPolicy#policy_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetDataLocationConstraint">resetDataLocationConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetPolicyDescription">resetPolicyDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicy` <a name="putPolicy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy"></a>

```java
public void putPolicy(ResiliencehubResiliencyPolicyPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

---

##### `resetDataLocationConstraint` <a name="resetDataLocationConstraint" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetDataLocationConstraint"></a>

```java
public void resetDataLocationConstraint()
```

##### `resetPolicyDescription` <a name="resetPolicyDescription" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetPolicyDescription"></a>

```java
public void resetPolicyDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ResiliencehubResiliencyPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isConstruct"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicy;

ResiliencehubResiliencyPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicy;

ResiliencehubResiliencyPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicy;

ResiliencehubResiliencyPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicy;

ResiliencehubResiliencyPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResiliencehubResiliencyPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ResiliencehubResiliencyPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResiliencehubResiliencyPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResiliencehubResiliencyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ResiliencehubResiliencyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference">ResiliencehubResiliencyPolicyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyArn">policyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraintInput">dataLocationConstraintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyDescriptionInput">policyDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyInput">policyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraint">dataLocationConstraint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyDescription">policyDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policy"></a>

```java
public ResiliencehubResiliencyPolicyPolicyOutputReference getPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference">ResiliencehubResiliencyPolicyPolicyOutputReference</a>

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyArn"></a>

```java
public java.lang.String getPolicyArn();
```

- *Type:* java.lang.String

---

##### `dataLocationConstraintInput`<sup>Optional</sup> <a name="dataLocationConstraintInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraintInput"></a>

```java
public java.lang.String getDataLocationConstraintInput();
```

- *Type:* java.lang.String

---

##### `policyDescriptionInput`<sup>Optional</sup> <a name="policyDescriptionInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyDescriptionInput"></a>

```java
public java.lang.String getPolicyDescriptionInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyInput"></a>

```java
public IResolvable|ResiliencehubResiliencyPolicyPolicy getPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `dataLocationConstraint`<sup>Required</sup> <a name="dataLocationConstraint" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraint"></a>

```java
public java.lang.String getDataLocationConstraint();
```

- *Type:* java.lang.String

---

##### `policyDescription`<sup>Required</sup> <a name="policyDescription" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyDescription"></a>

```java
public java.lang.String getPolicyDescription();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResiliencehubResiliencyPolicyConfig <a name="ResiliencehubResiliencyPolicyConfig" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyConfig;

ResiliencehubResiliencyPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .policy(ResiliencehubResiliencyPolicyPolicy)
    .policyName(java.lang.String)
    .tier(java.lang.String)
//  .dataLocationConstraint(java.lang.String)
//  .policyDescription(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy ResiliencehubResiliencyPolicy#policy}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policyName">policyName</a></code> | <code>java.lang.String</code> | Name of Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | Resiliency Policy Tier. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dataLocationConstraint">dataLocationConstraint</a></code> | <code>java.lang.String</code> | Data Location Constraint of the Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policyDescription">policyDescription</a></code> | <code>java.lang.String</code> | Description of Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policy"></a>

```java
public ResiliencehubResiliencyPolicyPolicy getPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy ResiliencehubResiliencyPolicy#policy}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

Name of Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy_name ResiliencehubResiliencyPolicy#policy_name}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

Resiliency Policy Tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#tier ResiliencehubResiliencyPolicy#tier}

---

##### `dataLocationConstraint`<sup>Optional</sup> <a name="dataLocationConstraint" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dataLocationConstraint"></a>

```java
public java.lang.String getDataLocationConstraint();
```

- *Type:* java.lang.String

Data Location Constraint of the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#data_location_constraint ResiliencehubResiliencyPolicy#data_location_constraint}

---

##### `policyDescription`<sup>Optional</sup> <a name="policyDescription" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policyDescription"></a>

```java
public java.lang.String getPolicyDescription();
```

- *Type:* java.lang.String

Description of Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy_description ResiliencehubResiliencyPolicy#policy_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}.

---

### ResiliencehubResiliencyPolicyPolicy <a name="ResiliencehubResiliencyPolicyPolicy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicy;

ResiliencehubResiliencyPolicyPolicy.builder()
    .az(ResiliencehubResiliencyPolicyPolicyAz)
    .hardware(ResiliencehubResiliencyPolicyPolicyHardware)
    .softwareAttribute(ResiliencehubResiliencyPolicyPolicySoftware)
//  .region(ResiliencehubResiliencyPolicyPolicyRegion)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.az">az</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a></code> | Failure Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.hardware">hardware</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a></code> | Failure Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.softwareAttribute">softwareAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a></code> | Failure Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.region">region</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a></code> | Failure Policy. |

---

##### `az`<sup>Required</sup> <a name="az" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.az"></a>

```java
public ResiliencehubResiliencyPolicyPolicyAz getAz();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a>

Failure Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#az ResiliencehubResiliencyPolicy#az}

---

##### `hardware`<sup>Required</sup> <a name="hardware" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.hardware"></a>

```java
public ResiliencehubResiliencyPolicyPolicyHardware getHardware();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a>

Failure Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#hardware ResiliencehubResiliencyPolicy#hardware}

---

##### `softwareAttribute`<sup>Required</sup> <a name="softwareAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.softwareAttribute"></a>

```java
public ResiliencehubResiliencyPolicyPolicySoftware getSoftwareAttribute();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a>

Failure Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#software ResiliencehubResiliencyPolicy#software}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.region"></a>

```java
public ResiliencehubResiliencyPolicyPolicyRegion getRegion();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a>

Failure Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#region ResiliencehubResiliencyPolicy#region}

---

### ResiliencehubResiliencyPolicyPolicyAz <a name="ResiliencehubResiliencyPolicyPolicyAz" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicyAz;

ResiliencehubResiliencyPolicyPolicyAz.builder()
    .rpoInSecs(java.lang.Number)
    .rtoInSecs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rpoInSecs">rpoInSecs</a></code> | <code>java.lang.Number</code> | RPO in seconds. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rtoInSecs">rtoInSecs</a></code> | <code>java.lang.Number</code> | RTO in seconds. |

---

##### `rpoInSecs`<sup>Required</sup> <a name="rpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rpoInSecs"></a>

```java
public java.lang.Number getRpoInSecs();
```

- *Type:* java.lang.Number

RPO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}

---

##### `rtoInSecs`<sup>Required</sup> <a name="rtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rtoInSecs"></a>

```java
public java.lang.Number getRtoInSecs();
```

- *Type:* java.lang.Number

RTO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}

---

### ResiliencehubResiliencyPolicyPolicyHardware <a name="ResiliencehubResiliencyPolicyPolicyHardware" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicyHardware;

ResiliencehubResiliencyPolicyPolicyHardware.builder()
    .rpoInSecs(java.lang.Number)
    .rtoInSecs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rpoInSecs">rpoInSecs</a></code> | <code>java.lang.Number</code> | RPO in seconds. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rtoInSecs">rtoInSecs</a></code> | <code>java.lang.Number</code> | RTO in seconds. |

---

##### `rpoInSecs`<sup>Required</sup> <a name="rpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rpoInSecs"></a>

```java
public java.lang.Number getRpoInSecs();
```

- *Type:* java.lang.Number

RPO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}

---

##### `rtoInSecs`<sup>Required</sup> <a name="rtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rtoInSecs"></a>

```java
public java.lang.Number getRtoInSecs();
```

- *Type:* java.lang.Number

RTO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}

---

### ResiliencehubResiliencyPolicyPolicyRegion <a name="ResiliencehubResiliencyPolicyPolicyRegion" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicyRegion;

ResiliencehubResiliencyPolicyPolicyRegion.builder()
//  .rpoInSecs(java.lang.Number)
//  .rtoInSecs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rpoInSecs">rpoInSecs</a></code> | <code>java.lang.Number</code> | RPO in seconds. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rtoInSecs">rtoInSecs</a></code> | <code>java.lang.Number</code> | RTO in seconds. |

---

##### `rpoInSecs`<sup>Optional</sup> <a name="rpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rpoInSecs"></a>

```java
public java.lang.Number getRpoInSecs();
```

- *Type:* java.lang.Number

RPO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}

---

##### `rtoInSecs`<sup>Optional</sup> <a name="rtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rtoInSecs"></a>

```java
public java.lang.Number getRtoInSecs();
```

- *Type:* java.lang.Number

RTO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}

---

### ResiliencehubResiliencyPolicyPolicySoftware <a name="ResiliencehubResiliencyPolicyPolicySoftware" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicySoftware;

ResiliencehubResiliencyPolicyPolicySoftware.builder()
    .rpoInSecs(java.lang.Number)
    .rtoInSecs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rpoInSecs">rpoInSecs</a></code> | <code>java.lang.Number</code> | RPO in seconds. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rtoInSecs">rtoInSecs</a></code> | <code>java.lang.Number</code> | RTO in seconds. |

---

##### `rpoInSecs`<sup>Required</sup> <a name="rpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rpoInSecs"></a>

```java
public java.lang.Number getRpoInSecs();
```

- *Type:* java.lang.Number

RPO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}

---

##### `rtoInSecs`<sup>Required</sup> <a name="rtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rtoInSecs"></a>

```java
public java.lang.Number getRtoInSecs();
```

- *Type:* java.lang.Number

RTO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}

---

## Classes <a name="Classes" id="Classes"></a>

### ResiliencehubResiliencyPolicyPolicyAzOutputReference <a name="ResiliencehubResiliencyPolicyPolicyAzOutputReference" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicyAzOutputReference;

new ResiliencehubResiliencyPolicyPolicyAzOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInSecsInput">rpoInSecsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInSecsInput">rtoInSecsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInSecs">rpoInSecs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInSecs">rtoInSecs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rpoInSecsInput`<sup>Optional</sup> <a name="rpoInSecsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInSecsInput"></a>

```java
public java.lang.Number getRpoInSecsInput();
```

- *Type:* java.lang.Number

---

##### `rtoInSecsInput`<sup>Optional</sup> <a name="rtoInSecsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInSecsInput"></a>

```java
public java.lang.Number getRtoInSecsInput();
```

- *Type:* java.lang.Number

---

##### `rpoInSecs`<sup>Required</sup> <a name="rpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInSecs"></a>

```java
public java.lang.Number getRpoInSecs();
```

- *Type:* java.lang.Number

---

##### `rtoInSecs`<sup>Required</sup> <a name="rtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInSecs"></a>

```java
public java.lang.Number getRtoInSecs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.internalValue"></a>

```java
public IResolvable|ResiliencehubResiliencyPolicyPolicyAz getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a>

---


### ResiliencehubResiliencyPolicyPolicyHardwareOutputReference <a name="ResiliencehubResiliencyPolicyPolicyHardwareOutputReference" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference;

new ResiliencehubResiliencyPolicyPolicyHardwareOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInSecsInput">rpoInSecsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInSecsInput">rtoInSecsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInSecs">rpoInSecs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInSecs">rtoInSecs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rpoInSecsInput`<sup>Optional</sup> <a name="rpoInSecsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInSecsInput"></a>

```java
public java.lang.Number getRpoInSecsInput();
```

- *Type:* java.lang.Number

---

##### `rtoInSecsInput`<sup>Optional</sup> <a name="rtoInSecsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInSecsInput"></a>

```java
public java.lang.Number getRtoInSecsInput();
```

- *Type:* java.lang.Number

---

##### `rpoInSecs`<sup>Required</sup> <a name="rpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInSecs"></a>

```java
public java.lang.Number getRpoInSecs();
```

- *Type:* java.lang.Number

---

##### `rtoInSecs`<sup>Required</sup> <a name="rtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInSecs"></a>

```java
public java.lang.Number getRtoInSecs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.internalValue"></a>

```java
public IResolvable|ResiliencehubResiliencyPolicyPolicyHardware getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a>

---


### ResiliencehubResiliencyPolicyPolicyOutputReference <a name="ResiliencehubResiliencyPolicyPolicyOutputReference" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicyOutputReference;

new ResiliencehubResiliencyPolicyPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putAz">putAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putHardware">putHardware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putRegion">putRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putSoftwareAttribute">putSoftwareAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAz` <a name="putAz" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putAz"></a>

```java
public void putAz(ResiliencehubResiliencyPolicyPolicyAz value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putAz.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a>

---

##### `putHardware` <a name="putHardware" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putHardware"></a>

```java
public void putHardware(ResiliencehubResiliencyPolicyPolicyHardware value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putHardware.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a>

---

##### `putRegion` <a name="putRegion" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putRegion"></a>

```java
public void putRegion(ResiliencehubResiliencyPolicyPolicyRegion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putRegion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a>

---

##### `putSoftwareAttribute` <a name="putSoftwareAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putSoftwareAttribute"></a>

```java
public void putSoftwareAttribute(ResiliencehubResiliencyPolicyPolicySoftware value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putSoftwareAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.az">az</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference">ResiliencehubResiliencyPolicyPolicyAzOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardware">hardware</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference">ResiliencehubResiliencyPolicyPolicyHardwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.region">region</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference">ResiliencehubResiliencyPolicyPolicyRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttribute">softwareAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference">ResiliencehubResiliencyPolicyPolicySoftwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.azInput">azInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardwareInput">hardwareInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.regionInput">regionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttributeInput">softwareAttributeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `az`<sup>Required</sup> <a name="az" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.az"></a>

```java
public ResiliencehubResiliencyPolicyPolicyAzOutputReference getAz();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference">ResiliencehubResiliencyPolicyPolicyAzOutputReference</a>

---

##### `hardware`<sup>Required</sup> <a name="hardware" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardware"></a>

```java
public ResiliencehubResiliencyPolicyPolicyHardwareOutputReference getHardware();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference">ResiliencehubResiliencyPolicyPolicyHardwareOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.region"></a>

```java
public ResiliencehubResiliencyPolicyPolicyRegionOutputReference getRegion();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference">ResiliencehubResiliencyPolicyPolicyRegionOutputReference</a>

---

##### `softwareAttribute`<sup>Required</sup> <a name="softwareAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttribute"></a>

```java
public ResiliencehubResiliencyPolicyPolicySoftwareOutputReference getSoftwareAttribute();
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference">ResiliencehubResiliencyPolicyPolicySoftwareOutputReference</a>

---

##### `azInput`<sup>Optional</sup> <a name="azInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.azInput"></a>

```java
public IResolvable|ResiliencehubResiliencyPolicyPolicyAz getAzInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a>

---

##### `hardwareInput`<sup>Optional</sup> <a name="hardwareInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardwareInput"></a>

```java
public IResolvable|ResiliencehubResiliencyPolicyPolicyHardware getHardwareInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.regionInput"></a>

```java
public IResolvable|ResiliencehubResiliencyPolicyPolicyRegion getRegionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a>

---

##### `softwareAttributeInput`<sup>Optional</sup> <a name="softwareAttributeInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttributeInput"></a>

```java
public IResolvable|ResiliencehubResiliencyPolicyPolicySoftware getSoftwareAttributeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|ResiliencehubResiliencyPolicyPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

---


### ResiliencehubResiliencyPolicyPolicyRegionOutputReference <a name="ResiliencehubResiliencyPolicyPolicyRegionOutputReference" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference;

new ResiliencehubResiliencyPolicyPolicyRegionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRpoInSecs">resetRpoInSecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRtoInSecs">resetRtoInSecs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRpoInSecs` <a name="resetRpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRpoInSecs"></a>

```java
public void resetRpoInSecs()
```

##### `resetRtoInSecs` <a name="resetRtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRtoInSecs"></a>

```java
public void resetRtoInSecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInSecsInput">rpoInSecsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInSecsInput">rtoInSecsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInSecs">rpoInSecs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInSecs">rtoInSecs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rpoInSecsInput`<sup>Optional</sup> <a name="rpoInSecsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInSecsInput"></a>

```java
public java.lang.Number getRpoInSecsInput();
```

- *Type:* java.lang.Number

---

##### `rtoInSecsInput`<sup>Optional</sup> <a name="rtoInSecsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInSecsInput"></a>

```java
public java.lang.Number getRtoInSecsInput();
```

- *Type:* java.lang.Number

---

##### `rpoInSecs`<sup>Required</sup> <a name="rpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInSecs"></a>

```java
public java.lang.Number getRpoInSecs();
```

- *Type:* java.lang.Number

---

##### `rtoInSecs`<sup>Required</sup> <a name="rtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInSecs"></a>

```java
public java.lang.Number getRtoInSecs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.internalValue"></a>

```java
public IResolvable|ResiliencehubResiliencyPolicyPolicyRegion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a>

---


### ResiliencehubResiliencyPolicyPolicySoftwareOutputReference <a name="ResiliencehubResiliencyPolicyPolicySoftwareOutputReference" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.resiliencehub_resiliency_policy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference;

new ResiliencehubResiliencyPolicyPolicySoftwareOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInSecsInput">rpoInSecsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInSecsInput">rtoInSecsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInSecs">rpoInSecs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInSecs">rtoInSecs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rpoInSecsInput`<sup>Optional</sup> <a name="rpoInSecsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInSecsInput"></a>

```java
public java.lang.Number getRpoInSecsInput();
```

- *Type:* java.lang.Number

---

##### `rtoInSecsInput`<sup>Optional</sup> <a name="rtoInSecsInput" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInSecsInput"></a>

```java
public java.lang.Number getRtoInSecsInput();
```

- *Type:* java.lang.Number

---

##### `rpoInSecs`<sup>Required</sup> <a name="rpoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInSecs"></a>

```java
public java.lang.Number getRpoInSecs();
```

- *Type:* java.lang.Number

---

##### `rtoInSecs`<sup>Required</sup> <a name="rtoInSecs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInSecs"></a>

```java
public java.lang.Number getRtoInSecs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.internalValue"></a>

```java
public IResolvable|ResiliencehubResiliencyPolicyPolicySoftware getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a>

---



