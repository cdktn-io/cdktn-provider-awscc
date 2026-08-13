# `bedrockagentcorePolicy` Submodule <a name="`bedrockagentcorePolicy` Submodule" id="@cdktn/provider-awscc.bedrockagentcorePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcorePolicy <a name="BedrockagentcorePolicy" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy awscc_bedrockagentcore_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy.BedrockagentcorePolicy;

BedrockagentcorePolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .definition(BedrockagentcorePolicyDefinition)
    .name(java.lang.String)
    .policyEngineId(java.lang.String)
//  .description(java.lang.String)
//  .enforcementMode(java.lang.String)
//  .validationMode(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a></code> | The definition structure for policies. Encapsulates different policy formats. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The customer-assigned immutable name for the policy. Must be unique within the policy engine. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.policyEngineId">policyEngineId</a></code> | <code>java.lang.String</code> | The identifier of the policy engine which contains this policy. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the policy's purpose and functionality. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.enforcementMode">enforcementMode</a></code> | <code>java.lang.String</code> | Whether the policy contributes to the enforce decision returned to Gateway. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.validationMode">validationMode</a></code> | <code>java.lang.String</code> | The validation mode for the policy. Determines how Cedar analyzer validation results are handled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.definition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>

The definition structure for policies. Encapsulates different policy formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#definition BedrockagentcorePolicy#definition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The customer-assigned immutable name for the policy. Must be unique within the policy engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#name BedrockagentcorePolicy#name}

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.policyEngineId"></a>

- *Type:* java.lang.String

The identifier of the policy engine which contains this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#policy_engine_id BedrockagentcorePolicy#policy_engine_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the policy's purpose and functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#description BedrockagentcorePolicy#description}

---

##### `enforcementMode`<sup>Optional</sup> <a name="enforcementMode" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.enforcementMode"></a>

- *Type:* java.lang.String

Whether the policy contributes to the enforce decision returned to Gateway.

LOG_ONLY policies are still evaluated but their decisions are observed only, allowing customers to validate a policy against real traffic before promoting it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#enforcement_mode BedrockagentcorePolicy#enforcement_mode}

---

##### `validationMode`<sup>Optional</sup> <a name="validationMode" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.Initializer.parameter.validationMode"></a>

- *Type:* java.lang.String

The validation mode for the policy. Determines how Cedar analyzer validation results are handled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#validation_mode BedrockagentcorePolicy#validation_mode}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.putDefinition">putDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.resetEnforcementMode">resetEnforcementMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.resetValidationMode">resetValidationMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefinition` <a name="putDefinition" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.putDefinition"></a>

```java
public void putDefinition(BedrockagentcorePolicyDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.putDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnforcementMode` <a name="resetEnforcementMode" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.resetEnforcementMode"></a>

```java
public void resetEnforcementMode()
```

##### `resetValidationMode` <a name="resetValidationMode" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.resetValidationMode"></a>

```java
public void resetValidationMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcorePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy.BedrockagentcorePolicy;

BedrockagentcorePolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy.BedrockagentcorePolicy;

BedrockagentcorePolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy.BedrockagentcorePolicy;

BedrockagentcorePolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy.BedrockagentcorePolicy;

BedrockagentcorePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcorePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockagentcorePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcorePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcorePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcorePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference">BedrockagentcorePolicyDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyArn">policyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.statusReasons">statusReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.definitionInput">definitionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.enforcementModeInput">enforcementModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyEngineIdInput">policyEngineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.validationModeInput">validationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.enforcementMode">enforcementMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyEngineId">policyEngineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.validationMode">validationMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.definition"></a>

```java
public BedrockagentcorePolicyDefinitionOutputReference getDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference">BedrockagentcorePolicyDefinitionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyArn"></a>

```java
public java.lang.String getPolicyArn();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReasons`<sup>Required</sup> <a name="statusReasons" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.statusReasons"></a>

```java
public java.util.List<java.lang.String> getStatusReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.definitionInput"></a>

```java
public IResolvable|BedrockagentcorePolicyDefinition getDefinitionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enforcementModeInput`<sup>Optional</sup> <a name="enforcementModeInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.enforcementModeInput"></a>

```java
public java.lang.String getEnforcementModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyEngineIdInput`<sup>Optional</sup> <a name="policyEngineIdInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyEngineIdInput"></a>

```java
public java.lang.String getPolicyEngineIdInput();
```

- *Type:* java.lang.String

---

##### `validationModeInput`<sup>Optional</sup> <a name="validationModeInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.validationModeInput"></a>

```java
public java.lang.String getValidationModeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.enforcementMode"></a>

```java
public java.lang.String getEnforcementMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.policyEngineId"></a>

```java
public java.lang.String getPolicyEngineId();
```

- *Type:* java.lang.String

---

##### `validationMode`<sup>Required</sup> <a name="validationMode" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.validationMode"></a>

```java
public java.lang.String getValidationMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcorePolicyConfig <a name="BedrockagentcorePolicyConfig" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy.BedrockagentcorePolicyConfig;

BedrockagentcorePolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .definition(BedrockagentcorePolicyDefinition)
    .name(java.lang.String)
    .policyEngineId(java.lang.String)
//  .description(java.lang.String)
//  .enforcementMode(java.lang.String)
//  .validationMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a></code> | The definition structure for policies. Encapsulates different policy formats. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The customer-assigned immutable name for the policy. Must be unique within the policy engine. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.policyEngineId">policyEngineId</a></code> | <code>java.lang.String</code> | The identifier of the policy engine which contains this policy. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the policy's purpose and functionality. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.enforcementMode">enforcementMode</a></code> | <code>java.lang.String</code> | Whether the policy contributes to the enforce decision returned to Gateway. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.validationMode">validationMode</a></code> | <code>java.lang.String</code> | The validation mode for the policy. Determines how Cedar analyzer validation results are handled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.definition"></a>

```java
public BedrockagentcorePolicyDefinition getDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>

The definition structure for policies. Encapsulates different policy formats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#definition BedrockagentcorePolicy#definition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The customer-assigned immutable name for the policy. Must be unique within the policy engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#name BedrockagentcorePolicy#name}

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.policyEngineId"></a>

```java
public java.lang.String getPolicyEngineId();
```

- *Type:* java.lang.String

The identifier of the policy engine which contains this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#policy_engine_id BedrockagentcorePolicy#policy_engine_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the policy's purpose and functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#description BedrockagentcorePolicy#description}

---

##### `enforcementMode`<sup>Optional</sup> <a name="enforcementMode" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.enforcementMode"></a>

```java
public java.lang.String getEnforcementMode();
```

- *Type:* java.lang.String

Whether the policy contributes to the enforce decision returned to Gateway.

LOG_ONLY policies are still evaluated but their decisions are observed only, allowing customers to validate a policy against real traffic before promoting it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#enforcement_mode BedrockagentcorePolicy#enforcement_mode}

---

##### `validationMode`<sup>Optional</sup> <a name="validationMode" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyConfig.property.validationMode"></a>

```java
public java.lang.String getValidationMode();
```

- *Type:* java.lang.String

The validation mode for the policy. Determines how Cedar analyzer validation results are handled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#validation_mode BedrockagentcorePolicy#validation_mode}

---

### BedrockagentcorePolicyDefinition <a name="BedrockagentcorePolicyDefinition" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy.BedrockagentcorePolicyDefinition;

BedrockagentcorePolicyDefinition.builder()
//  .cedar(BedrockagentcorePolicyDefinitionCedar)
//  .policy(BedrockagentcorePolicyDefinitionPolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition.property.cedar">cedar</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a></code> | A Cedar policy statement within the AgentCore Policy system. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy">BedrockagentcorePolicyDefinitionPolicy</a></code> | A policy statement within the AgentCore Policy system. |

---

##### `cedar`<sup>Optional</sup> <a name="cedar" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition.property.cedar"></a>

```java
public BedrockagentcorePolicyDefinitionCedar getCedar();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a>

A Cedar policy statement within the AgentCore Policy system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#cedar BedrockagentcorePolicy#cedar}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition.property.policy"></a>

```java
public BedrockagentcorePolicyDefinitionPolicy getPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy">BedrockagentcorePolicyDefinitionPolicy</a>

A policy statement within the AgentCore Policy system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#policy BedrockagentcorePolicy#policy}

---

### BedrockagentcorePolicyDefinitionCedar <a name="BedrockagentcorePolicyDefinitionCedar" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy.BedrockagentcorePolicyDefinitionCedar;

BedrockagentcorePolicyDefinitionCedar.builder()
//  .statement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar.property.statement">statement</a></code> | <code>java.lang.String</code> | The Cedar policy statement that defines the authorization logic. |

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar.property.statement"></a>

```java
public java.lang.String getStatement();
```

- *Type:* java.lang.String

The Cedar policy statement that defines the authorization logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#statement BedrockagentcorePolicy#statement}

---

### BedrockagentcorePolicyDefinitionPolicy <a name="BedrockagentcorePolicyDefinitionPolicy" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy.BedrockagentcorePolicyDefinitionPolicy;

BedrockagentcorePolicyDefinitionPolicy.builder()
//  .statement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy.property.statement">statement</a></code> | <code>java.lang.String</code> | The policy statement. |

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy.property.statement"></a>

```java
public java.lang.String getStatement();
```

- *Type:* java.lang.String

The policy statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_policy#statement BedrockagentcorePolicy#statement}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcorePolicyDefinitionCedarOutputReference <a name="BedrockagentcorePolicyDefinitionCedarOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy.BedrockagentcorePolicyDefinitionCedarOutputReference;

new BedrockagentcorePolicyDefinitionCedarOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.resetStatement">resetStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatement` <a name="resetStatement" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.resetStatement"></a>

```java
public void resetStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.statementInput">statementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.statement">statement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.statementInput"></a>

```java
public java.lang.String getStatementInput();
```

- *Type:* java.lang.String

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.statement"></a>

```java
public java.lang.String getStatement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcorePolicyDefinitionCedar getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a>

---


### BedrockagentcorePolicyDefinitionOutputReference <a name="BedrockagentcorePolicyDefinitionOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy.BedrockagentcorePolicyDefinitionOutputReference;

new BedrockagentcorePolicyDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.putCedar">putCedar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resetCedar">resetCedar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCedar` <a name="putCedar" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.putCedar"></a>

```java
public void putCedar(BedrockagentcorePolicyDefinitionCedar value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.putCedar.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a>

---

##### `putPolicy` <a name="putPolicy" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.putPolicy"></a>

```java
public void putPolicy(BedrockagentcorePolicyDefinitionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy">BedrockagentcorePolicyDefinitionPolicy</a>

---

##### `resetCedar` <a name="resetCedar" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resetCedar"></a>

```java
public void resetCedar()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.resetPolicy"></a>

```java
public void resetPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.cedar">cedar</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference">BedrockagentcorePolicyDefinitionCedarOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference">BedrockagentcorePolicyDefinitionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.cedarInput">cedarInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.policyInput">policyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy">BedrockagentcorePolicyDefinitionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cedar`<sup>Required</sup> <a name="cedar" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.cedar"></a>

```java
public BedrockagentcorePolicyDefinitionCedarOutputReference getCedar();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedarOutputReference">BedrockagentcorePolicyDefinitionCedarOutputReference</a>

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.policy"></a>

```java
public BedrockagentcorePolicyDefinitionPolicyOutputReference getPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference">BedrockagentcorePolicyDefinitionPolicyOutputReference</a>

---

##### `cedarInput`<sup>Optional</sup> <a name="cedarInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.cedarInput"></a>

```java
public IResolvable|BedrockagentcorePolicyDefinitionCedar getCedarInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionCedar">BedrockagentcorePolicyDefinitionCedar</a>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.policyInput"></a>

```java
public IResolvable|BedrockagentcorePolicyDefinitionPolicy getPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy">BedrockagentcorePolicyDefinitionPolicy</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcorePolicyDefinition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinition">BedrockagentcorePolicyDefinition</a>

---


### BedrockagentcorePolicyDefinitionPolicyOutputReference <a name="BedrockagentcorePolicyDefinitionPolicyOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_policy.BedrockagentcorePolicyDefinitionPolicyOutputReference;

new BedrockagentcorePolicyDefinitionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.resetStatement">resetStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatement` <a name="resetStatement" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.resetStatement"></a>

```java
public void resetStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.statementInput">statementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.statement">statement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy">BedrockagentcorePolicyDefinitionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.statementInput"></a>

```java
public java.lang.String getStatementInput();
```

- *Type:* java.lang.String

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.statement"></a>

```java
public java.lang.String getStatement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcorePolicyDefinitionPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePolicy.BedrockagentcorePolicyDefinitionPolicy">BedrockagentcorePolicyDefinitionPolicy</a>

---



