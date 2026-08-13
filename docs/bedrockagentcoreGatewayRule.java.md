# `bedrockagentcoreGatewayRule` Submodule <a name="`bedrockagentcoreGatewayRule` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreGatewayRule <a name="BedrockagentcoreGatewayRule" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule awscc_bedrockagentcore_gateway_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRule;

BedrockagentcoreGatewayRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actions(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActions>)
    .priority(java.lang.Number)
//  .conditions(IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditions>)
//  .description(java.lang.String)
//  .gatewayIdentifier(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.actions">actions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#actions BedrockagentcoreGatewayRule#actions}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#priority BedrockagentcoreGatewayRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#conditions BedrockagentcoreGatewayRule#conditions}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.gatewayIdentifier">gatewayIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier BedrockagentcoreGatewayRule#gateway_identifier}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.actions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#actions BedrockagentcoreGatewayRule#actions}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#priority BedrockagentcoreGatewayRule#priority}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.conditions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#conditions BedrockagentcoreGatewayRule#conditions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}.

---

##### `gatewayIdentifier`<sup>Optional</sup> <a name="gatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.Initializer.parameter.gatewayIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier BedrockagentcoreGatewayRule#gateway_identifier}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetGatewayIdentifier">resetGatewayIdentifier</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putActions"></a>

```java
public void putActions(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putActions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>>

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putConditions"></a>

```java
public void putConditions(IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.putConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>>

---

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGatewayIdentifier` <a name="resetGatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.resetGatewayIdentifier"></a>

```java
public void resetGatewayIdentifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreGatewayRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRule;

BedrockagentcoreGatewayRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRule;

BedrockagentcoreGatewayRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRule;

BedrockagentcoreGatewayRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRule;

BedrockagentcoreGatewayRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcoreGatewayRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockagentcoreGatewayRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcoreGatewayRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcoreGatewayRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreGatewayRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList">BedrockagentcoreGatewayRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList">BedrockagentcoreGatewayRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.actionsInput">actionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayIdentifierInput">gatewayIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayIdentifier">gatewayIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.actions"></a>

```java
public BedrockagentcoreGatewayRuleActionsList getActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList">BedrockagentcoreGatewayRuleActionsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.conditions"></a>

```java
public BedrockagentcoreGatewayRuleConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList">BedrockagentcoreGatewayRuleConditionsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.actionsInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActions> getActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.conditionsInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditions> getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `gatewayIdentifierInput`<sup>Optional</sup> <a name="gatewayIdentifierInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayIdentifierInput"></a>

```java
public java.lang.String getGatewayIdentifierInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `gatewayIdentifier`<sup>Required</sup> <a name="gatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.gatewayIdentifier"></a>

```java
public java.lang.String getGatewayIdentifier();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreGatewayRuleActions <a name="BedrockagentcoreGatewayRuleActions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActions;

BedrockagentcoreGatewayRuleActions.builder()
//  .configurationBundle(BedrockagentcoreGatewayRuleActionsConfigurationBundle)
//  .routeToTarget(BedrockagentcoreGatewayRuleActionsRouteToTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions.property.configurationBundle">configurationBundle</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundle</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle BedrockagentcoreGatewayRule#configuration_bundle}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions.property.routeToTarget">routeToTarget</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget">BedrockagentcoreGatewayRuleActionsRouteToTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#route_to_target BedrockagentcoreGatewayRule#route_to_target}. |

---

##### `configurationBundle`<sup>Optional</sup> <a name="configurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions.property.configurationBundle"></a>

```java
public BedrockagentcoreGatewayRuleActionsConfigurationBundle getConfigurationBundle();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundle</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle BedrockagentcoreGatewayRule#configuration_bundle}.

---

##### `routeToTarget`<sup>Optional</sup> <a name="routeToTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions.property.routeToTarget"></a>

```java
public BedrockagentcoreGatewayRuleActionsRouteToTarget getRouteToTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget">BedrockagentcoreGatewayRuleActionsRouteToTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#route_to_target BedrockagentcoreGatewayRule#route_to_target}.

---

### BedrockagentcoreGatewayRuleActionsConfigurationBundle <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsConfigurationBundle;

BedrockagentcoreGatewayRuleActionsConfigurationBundle.builder()
//  .staticOverride(BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride)
//  .weightedOverride(BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle.property.staticOverride">staticOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#static_override BedrockagentcoreGatewayRule#static_override}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle.property.weightedOverride">weightedOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#weighted_override BedrockagentcoreGatewayRule#weighted_override}. |

---

##### `staticOverride`<sup>Optional</sup> <a name="staticOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle.property.staticOverride"></a>

```java
public BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride getStaticOverride();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#static_override BedrockagentcoreGatewayRule#static_override}.

---

##### `weightedOverride`<sup>Optional</sup> <a name="weightedOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle.property.weightedOverride"></a>

```java
public BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride getWeightedOverride();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#weighted_override BedrockagentcoreGatewayRule#weighted_override}.

---

### BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride;

BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride.builder()
//  .bundleArn(java.lang.String)
//  .bundleVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride.property.bundleArn">bundleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride.property.bundleVersion">bundleVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}. |

---

##### `bundleArn`<sup>Optional</sup> <a name="bundleArn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride.property.bundleArn"></a>

```java
public java.lang.String getBundleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}.

---

##### `bundleVersion`<sup>Optional</sup> <a name="bundleVersion" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride.property.bundleVersion"></a>

```java
public java.lang.String getBundleVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}.

---

### BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride;

BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride.builder()
//  .trafficSplit(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride.property.trafficSplit">trafficSplit</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split BedrockagentcoreGatewayRule#traffic_split}. |

---

##### `trafficSplit`<sup>Optional</sup> <a name="trafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride.property.trafficSplit"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit> getTrafficSplit();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split BedrockagentcoreGatewayRule#traffic_split}.

---

### BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit;

BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.builder()
//  .configurationBundle(BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle)
//  .description(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.configurationBundle">configurationBundle</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle BedrockagentcoreGatewayRule#configuration_bundle}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}. |

---

##### `configurationBundle`<sup>Optional</sup> <a name="configurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.configurationBundle"></a>

```java
public BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle getConfigurationBundle();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#configuration_bundle BedrockagentcoreGatewayRule#configuration_bundle}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}.

---

### BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle;

BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.builder()
//  .bundleArn(java.lang.String)
//  .bundleVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.property.bundleArn">bundleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.property.bundleVersion">bundleVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}. |

---

##### `bundleArn`<sup>Optional</sup> <a name="bundleArn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.property.bundleArn"></a>

```java
public java.lang.String getBundleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#bundle_arn BedrockagentcoreGatewayRule#bundle_arn}.

---

##### `bundleVersion`<sup>Optional</sup> <a name="bundleVersion" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle.property.bundleVersion"></a>

```java
public java.lang.String getBundleVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#bundle_version BedrockagentcoreGatewayRule#bundle_version}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTarget <a name="BedrockagentcoreGatewayRuleActionsRouteToTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsRouteToTarget;

BedrockagentcoreGatewayRuleActionsRouteToTarget.builder()
//  .staticRoute(BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute)
//  .weightedRoute(BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget.property.staticRoute">staticRoute</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#static_route BedrockagentcoreGatewayRule#static_route}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget.property.weightedRoute">weightedRoute</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#weighted_route BedrockagentcoreGatewayRule#weighted_route}. |

---

##### `staticRoute`<sup>Optional</sup> <a name="staticRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget.property.staticRoute"></a>

```java
public BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute getStaticRoute();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#static_route BedrockagentcoreGatewayRule#static_route}.

---

##### `weightedRoute`<sup>Optional</sup> <a name="weightedRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget.property.weightedRoute"></a>

```java
public BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute getWeightedRoute();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#weighted_route BedrockagentcoreGatewayRule#weighted_route}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute;

BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute.builder()
//  .targetName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute.property.targetName">targetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}. |

---

##### `targetName`<sup>Optional</sup> <a name="targetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute;

BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute.builder()
//  .trafficSplit(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute.property.trafficSplit">trafficSplit</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split BedrockagentcoreGatewayRule#traffic_split}. |

---

##### `trafficSplit`<sup>Optional</sup> <a name="trafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute.property.trafficSplit"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit> getTrafficSplit();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#traffic_split BedrockagentcoreGatewayRule#traffic_split}.

---

### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit;

BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.builder()
//  .description(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .targetName(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.targetName">targetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#metadata BedrockagentcoreGatewayRule#metadata}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#name BedrockagentcoreGatewayRule#name}.

---

##### `targetName`<sup>Optional</sup> <a name="targetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#target_name BedrockagentcoreGatewayRule#target_name}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#weight BedrockagentcoreGatewayRule#weight}.

---

### BedrockagentcoreGatewayRuleConditions <a name="BedrockagentcoreGatewayRuleConditions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditions;

BedrockagentcoreGatewayRuleConditions.builder()
//  .matchPaths(BedrockagentcoreGatewayRuleConditionsMatchPaths)
//  .matchPrincipals(BedrockagentcoreGatewayRuleConditionsMatchPrincipals)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions.property.matchPaths">matchPaths</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths">BedrockagentcoreGatewayRuleConditionsMatchPaths</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#match_paths BedrockagentcoreGatewayRule#match_paths}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions.property.matchPrincipals">matchPrincipals</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals">BedrockagentcoreGatewayRuleConditionsMatchPrincipals</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#match_principals BedrockagentcoreGatewayRule#match_principals}. |

---

##### `matchPaths`<sup>Optional</sup> <a name="matchPaths" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions.property.matchPaths"></a>

```java
public BedrockagentcoreGatewayRuleConditionsMatchPaths getMatchPaths();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths">BedrockagentcoreGatewayRuleConditionsMatchPaths</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#match_paths BedrockagentcoreGatewayRule#match_paths}.

---

##### `matchPrincipals`<sup>Optional</sup> <a name="matchPrincipals" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions.property.matchPrincipals"></a>

```java
public BedrockagentcoreGatewayRuleConditionsMatchPrincipals getMatchPrincipals();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals">BedrockagentcoreGatewayRuleConditionsMatchPrincipals</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#match_principals BedrockagentcoreGatewayRule#match_principals}.

---

### BedrockagentcoreGatewayRuleConditionsMatchPaths <a name="BedrockagentcoreGatewayRuleConditionsMatchPaths" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionsMatchPaths;

BedrockagentcoreGatewayRuleConditionsMatchPaths.builder()
//  .anyOf(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths.property.anyOf">anyOf</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}. |

---

##### `anyOf`<sup>Optional</sup> <a name="anyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths.property.anyOf"></a>

```java
public java.util.List<java.lang.String> getAnyOf();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}.

---

### BedrockagentcoreGatewayRuleConditionsMatchPrincipals <a name="BedrockagentcoreGatewayRuleConditionsMatchPrincipals" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals;

BedrockagentcoreGatewayRuleConditionsMatchPrincipals.builder()
//  .anyOf(IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals.property.anyOf">anyOf</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}. |

---

##### `anyOf`<sup>Optional</sup> <a name="anyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals.property.anyOf"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf> getAnyOf();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#any_of BedrockagentcoreGatewayRule#any_of}.

---

### BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf <a name="BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf;

BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf.builder()
//  .iamPrincipal(BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf.property.iamPrincipal">iamPrincipal</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#iam_principal BedrockagentcoreGatewayRule#iam_principal}. |

---

##### `iamPrincipal`<sup>Optional</sup> <a name="iamPrincipal" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf.property.iamPrincipal"></a>

```java
public BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal getIamPrincipal();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#iam_principal BedrockagentcoreGatewayRule#iam_principal}.

---

### BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal <a name="BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal;

BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal.builder()
//  .arn(java.lang.String)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#arn BedrockagentcoreGatewayRule#arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#operator BedrockagentcoreGatewayRule#operator}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#arn BedrockagentcoreGatewayRule#arn}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#operator BedrockagentcoreGatewayRule#operator}.

---

### BedrockagentcoreGatewayRuleConfig <a name="BedrockagentcoreGatewayRuleConfig" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConfig;

BedrockagentcoreGatewayRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actions(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActions>)
    .priority(java.lang.Number)
//  .conditions(IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditions>)
//  .description(java.lang.String)
//  .gatewayIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.actions">actions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#actions BedrockagentcoreGatewayRule#actions}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#priority BedrockagentcoreGatewayRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#conditions BedrockagentcoreGatewayRule#conditions}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.gatewayIdentifier">gatewayIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier BedrockagentcoreGatewayRule#gateway_identifier}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.actions"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActions> getActions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#actions BedrockagentcoreGatewayRule#actions}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#priority BedrockagentcoreGatewayRule#priority}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.conditions"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditions> getConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#conditions BedrockagentcoreGatewayRule#conditions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#description BedrockagentcoreGatewayRule#description}.

---

##### `gatewayIdentifier`<sup>Optional</sup> <a name="gatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConfig.property.gatewayIdentifier"></a>

```java
public java.lang.String getGatewayIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_gateway_rule#gateway_identifier BedrockagentcoreGatewayRule#gateway_identifier}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference;

new BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.putStaticOverride">putStaticOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.putWeightedOverride">putWeightedOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.resetStaticOverride">resetStaticOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.resetWeightedOverride">resetWeightedOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStaticOverride` <a name="putStaticOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.putStaticOverride"></a>

```java
public void putStaticOverride(BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.putStaticOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride</a>

---

##### `putWeightedOverride` <a name="putWeightedOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.putWeightedOverride"></a>

```java
public void putWeightedOverride(BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.putWeightedOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride</a>

---

##### `resetStaticOverride` <a name="resetStaticOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.resetStaticOverride"></a>

```java
public void resetStaticOverride()
```

##### `resetWeightedOverride` <a name="resetWeightedOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.resetWeightedOverride"></a>

```java
public void resetWeightedOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.staticOverride">staticOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.weightedOverride">weightedOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.staticOverrideInput">staticOverrideInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.weightedOverrideInput">weightedOverrideInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `staticOverride`<sup>Required</sup> <a name="staticOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.staticOverride"></a>

```java
public BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference getStaticOverride();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference</a>

---

##### `weightedOverride`<sup>Required</sup> <a name="weightedOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.weightedOverride"></a>

```java
public BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference getWeightedOverride();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference</a>

---

##### `staticOverrideInput`<sup>Optional</sup> <a name="staticOverrideInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.staticOverrideInput"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride getStaticOverrideInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride</a>

---

##### `weightedOverrideInput`<sup>Optional</sup> <a name="weightedOverrideInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.weightedOverrideInput"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride getWeightedOverrideInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundle getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundle</a>

---


### BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference;

new BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.resetBundleArn">resetBundleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.resetBundleVersion">resetBundleVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBundleArn` <a name="resetBundleArn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.resetBundleArn"></a>

```java
public void resetBundleArn()
```

##### `resetBundleVersion` <a name="resetBundleVersion" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.resetBundleVersion"></a>

```java
public void resetBundleVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.bundleArnInput">bundleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.bundleVersionInput">bundleVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.bundleArn">bundleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.bundleVersion">bundleVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bundleArnInput`<sup>Optional</sup> <a name="bundleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.bundleArnInput"></a>

```java
public java.lang.String getBundleArnInput();
```

- *Type:* java.lang.String

---

##### `bundleVersionInput`<sup>Optional</sup> <a name="bundleVersionInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.bundleVersionInput"></a>

```java
public java.lang.String getBundleVersionInput();
```

- *Type:* java.lang.String

---

##### `bundleArn`<sup>Required</sup> <a name="bundleArn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.bundleArn"></a>

```java
public java.lang.String getBundleArn();
```

- *Type:* java.lang.String

---

##### `bundleVersion`<sup>Required</sup> <a name="bundleVersion" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.bundleVersion"></a>

```java
public java.lang.String getBundleVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverrideOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleStaticOverride</a>

---


### BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference;

new BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.putTrafficSplit">putTrafficSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.resetTrafficSplit">resetTrafficSplit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrafficSplit` <a name="putTrafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.putTrafficSplit"></a>

```java
public void putTrafficSplit(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.putTrafficSplit.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a>>

---

##### `resetTrafficSplit` <a name="resetTrafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.resetTrafficSplit"></a>

```java
public void resetTrafficSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.trafficSplit">trafficSplit</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.trafficSplitInput">trafficSplitInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trafficSplit`<sup>Required</sup> <a name="trafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.trafficSplit"></a>

```java
public BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList getTrafficSplit();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList</a>

---

##### `trafficSplitInput`<sup>Optional</sup> <a name="trafficSplitInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.trafficSplitInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit> getTrafficSplitInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverride</a>

---


### BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference;

new BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resetBundleArn">resetBundleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resetBundleVersion">resetBundleVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBundleArn` <a name="resetBundleArn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resetBundleArn"></a>

```java
public void resetBundleArn()
```

##### `resetBundleVersion` <a name="resetBundleVersion" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.resetBundleVersion"></a>

```java
public void resetBundleVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleArnInput">bundleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleVersionInput">bundleVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleArn">bundleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleVersion">bundleVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bundleArnInput`<sup>Optional</sup> <a name="bundleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleArnInput"></a>

```java
public java.lang.String getBundleArnInput();
```

- *Type:* java.lang.String

---

##### `bundleVersionInput`<sup>Optional</sup> <a name="bundleVersionInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleVersionInput"></a>

```java
public java.lang.String getBundleVersionInput();
```

- *Type:* java.lang.String

---

##### `bundleArn`<sup>Required</sup> <a name="bundleArn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleArn"></a>

```java
public java.lang.String getBundleArn();
```

- *Type:* java.lang.String

---

##### `bundleVersion`<sup>Required</sup> <a name="bundleVersion" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.bundleVersion"></a>

```java
public java.lang.String getBundleVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>

---


### BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList;

new BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.get"></a>

```java
public BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a>>

---


### BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference <a name="BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference;

new BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.putConfigurationBundle">putConfigurationBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetConfigurationBundle">resetConfigurationBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigurationBundle` <a name="putConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.putConfigurationBundle"></a>

```java
public void putConfigurationBundle(BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.putConfigurationBundle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>

---

##### `resetConfigurationBundle` <a name="resetConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetConfigurationBundle"></a>

```java
public void resetConfigurationBundle()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.configurationBundle">configurationBundle</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.configurationBundleInput">configurationBundleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationBundle`<sup>Required</sup> <a name="configurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.configurationBundle"></a>

```java
public BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference getConfigurationBundle();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundleOutputReference</a>

---

##### `configurationBundleInput`<sup>Optional</sup> <a name="configurationBundleInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.configurationBundleInput"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle getConfigurationBundleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitConfigurationBundle</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplitOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit">BedrockagentcoreGatewayRuleActionsConfigurationBundleWeightedOverrideTrafficSplit</a>

---


### BedrockagentcoreGatewayRuleActionsList <a name="BedrockagentcoreGatewayRuleActionsList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsList;

new BedrockagentcoreGatewayRuleActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.get"></a>

```java
public BedrockagentcoreGatewayRuleActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>>

---


### BedrockagentcoreGatewayRuleActionsOutputReference <a name="BedrockagentcoreGatewayRuleActionsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsOutputReference;

new BedrockagentcoreGatewayRuleActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.putConfigurationBundle">putConfigurationBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.putRouteToTarget">putRouteToTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.resetConfigurationBundle">resetConfigurationBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.resetRouteToTarget">resetRouteToTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigurationBundle` <a name="putConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.putConfigurationBundle"></a>

```java
public void putConfigurationBundle(BedrockagentcoreGatewayRuleActionsConfigurationBundle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.putConfigurationBundle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundle</a>

---

##### `putRouteToTarget` <a name="putRouteToTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.putRouteToTarget"></a>

```java
public void putRouteToTarget(BedrockagentcoreGatewayRuleActionsRouteToTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.putRouteToTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget">BedrockagentcoreGatewayRuleActionsRouteToTarget</a>

---

##### `resetConfigurationBundle` <a name="resetConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.resetConfigurationBundle"></a>

```java
public void resetConfigurationBundle()
```

##### `resetRouteToTarget` <a name="resetRouteToTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.resetRouteToTarget"></a>

```java
public void resetRouteToTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.configurationBundle">configurationBundle</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference">BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.routeToTarget">routeToTarget</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.configurationBundleInput">configurationBundleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.routeToTargetInput">routeToTargetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget">BedrockagentcoreGatewayRuleActionsRouteToTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationBundle`<sup>Required</sup> <a name="configurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.configurationBundle"></a>

```java
public BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference getConfigurationBundle();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference">BedrockagentcoreGatewayRuleActionsConfigurationBundleOutputReference</a>

---

##### `routeToTarget`<sup>Required</sup> <a name="routeToTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.routeToTarget"></a>

```java
public BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference getRouteToTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference</a>

---

##### `configurationBundleInput`<sup>Optional</sup> <a name="configurationBundleInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.configurationBundleInput"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionsConfigurationBundle getConfigurationBundleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsConfigurationBundle">BedrockagentcoreGatewayRuleActionsConfigurationBundle</a>

---

##### `routeToTargetInput`<sup>Optional</sup> <a name="routeToTargetInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.routeToTargetInput"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTarget getRouteToTargetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget">BedrockagentcoreGatewayRuleActionsRouteToTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActions">BedrockagentcoreGatewayRuleActions</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference;

new BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.putStaticRoute">putStaticRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.putWeightedRoute">putWeightedRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.resetStaticRoute">resetStaticRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.resetWeightedRoute">resetWeightedRoute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStaticRoute` <a name="putStaticRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.putStaticRoute"></a>

```java
public void putStaticRoute(BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.putStaticRoute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute</a>

---

##### `putWeightedRoute` <a name="putWeightedRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.putWeightedRoute"></a>

```java
public void putWeightedRoute(BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.putWeightedRoute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute</a>

---

##### `resetStaticRoute` <a name="resetStaticRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.resetStaticRoute"></a>

```java
public void resetStaticRoute()
```

##### `resetWeightedRoute` <a name="resetWeightedRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.resetWeightedRoute"></a>

```java
public void resetWeightedRoute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.staticRoute">staticRoute</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.weightedRoute">weightedRoute</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.staticRouteInput">staticRouteInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.weightedRouteInput">weightedRouteInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget">BedrockagentcoreGatewayRuleActionsRouteToTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `staticRoute`<sup>Required</sup> <a name="staticRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.staticRoute"></a>

```java
public BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference getStaticRoute();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference</a>

---

##### `weightedRoute`<sup>Required</sup> <a name="weightedRoute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.weightedRoute"></a>

```java
public BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference getWeightedRoute();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference</a>

---

##### `staticRouteInput`<sup>Optional</sup> <a name="staticRouteInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.staticRouteInput"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute getStaticRouteInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute</a>

---

##### `weightedRouteInput`<sup>Optional</sup> <a name="weightedRouteInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.weightedRouteInput"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute getWeightedRouteInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTarget getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTarget">BedrockagentcoreGatewayRuleActionsRouteToTarget</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference;

new BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.resetTargetName">resetTargetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetName` <a name="resetTargetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.resetTargetName"></a>

```java
public void resetTargetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.targetNameInput">targetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.targetName">targetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetNameInput`<sup>Optional</sup> <a name="targetNameInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.targetNameInput"></a>

```java
public java.lang.String getTargetNameInput();
```

- *Type:* java.lang.String

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRouteOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetStaticRoute</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.putTrafficSplit">putTrafficSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.resetTrafficSplit">resetTrafficSplit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrafficSplit` <a name="putTrafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.putTrafficSplit"></a>

```java
public void putTrafficSplit(IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.putTrafficSplit.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a>>

---

##### `resetTrafficSplit` <a name="resetTrafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.resetTrafficSplit"></a>

```java
public void resetTrafficSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.trafficSplit">trafficSplit</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.trafficSplitInput">trafficSplitInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trafficSplit`<sup>Required</sup> <a name="trafficSplit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.trafficSplit"></a>

```java
public BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList getTrafficSplit();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList</a>

---

##### `trafficSplitInput`<sup>Optional</sup> <a name="trafficSplitInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.trafficSplitInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit> getTrafficSplitInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRoute</a>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.get"></a>

```java
public BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a>>

---


### BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference <a name="BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference;

new BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetTargetName">resetTargetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTargetName` <a name="resetTargetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetTargetName"></a>

```java
public void resetTargetName()
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.targetNameInput">targetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.targetName">targetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `targetNameInput`<sup>Optional</sup> <a name="targetNameInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.targetNameInput"></a>

```java
public java.lang.String getTargetNameInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplitOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit">BedrockagentcoreGatewayRuleActionsRouteToTargetWeightedRouteTrafficSplit</a>

---


### BedrockagentcoreGatewayRuleConditionsList <a name="BedrockagentcoreGatewayRuleConditionsList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionsList;

new BedrockagentcoreGatewayRuleConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.get"></a>

```java
public BedrockagentcoreGatewayRuleConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>>

---


### BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference <a name="BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference;

new BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.resetAnyOf">resetAnyOf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnyOf` <a name="resetAnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.resetAnyOf"></a>

```java
public void resetAnyOf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.anyOfInput">anyOfInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.anyOf">anyOf</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths">BedrockagentcoreGatewayRuleConditionsMatchPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anyOfInput`<sup>Optional</sup> <a name="anyOfInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.anyOfInput"></a>

```java
public java.util.List<java.lang.String> getAnyOfInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.anyOf"></a>

```java
public java.util.List<java.lang.String> getAnyOf();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPaths getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths">BedrockagentcoreGatewayRuleConditionsMatchPaths</a>

---


### BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference <a name="BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference;

new BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.resetArn"></a>

```java
public void resetArn()
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal</a>

---


### BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList <a name="BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList;

new BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.get"></a>

```java
public BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a>>

---


### BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference <a name="BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference;

new BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.putIamPrincipal">putIamPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.resetIamPrincipal">resetIamPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIamPrincipal` <a name="putIamPrincipal" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.putIamPrincipal"></a>

```java
public void putIamPrincipal(BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.putIamPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal</a>

---

##### `resetIamPrincipal` <a name="resetIamPrincipal" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.resetIamPrincipal"></a>

```java
public void resetIamPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.iamPrincipal">iamPrincipal</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.iamPrincipalInput">iamPrincipalInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iamPrincipal`<sup>Required</sup> <a name="iamPrincipal" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.iamPrincipal"></a>

```java
public BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference getIamPrincipal();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipalOutputReference</a>

---

##### `iamPrincipalInput`<sup>Optional</sup> <a name="iamPrincipalInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.iamPrincipalInput"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal getIamPrincipalInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfIamPrincipal</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a>

---


### BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference <a name="BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference;

new BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.putAnyOf">putAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.resetAnyOf">resetAnyOf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnyOf` <a name="putAnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.putAnyOf"></a>

```java
public void putAnyOf(IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.putAnyOf.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a>>

---

##### `resetAnyOf` <a name="resetAnyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.resetAnyOf"></a>

```java
public void resetAnyOf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.anyOf">anyOf</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.anyOfInput">anyOfInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals">BedrockagentcoreGatewayRuleConditionsMatchPrincipals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.anyOf"></a>

```java
public BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList getAnyOf();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOfList</a>

---

##### `anyOfInput`<sup>Optional</sup> <a name="anyOfInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.anyOfInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf> getAnyOfInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsAnyOf</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPrincipals getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals">BedrockagentcoreGatewayRuleConditionsMatchPrincipals</a>

---


### BedrockagentcoreGatewayRuleConditionsOutputReference <a name="BedrockagentcoreGatewayRuleConditionsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rule.BedrockagentcoreGatewayRuleConditionsOutputReference;

new BedrockagentcoreGatewayRuleConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.putMatchPaths">putMatchPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.putMatchPrincipals">putMatchPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.resetMatchPaths">resetMatchPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.resetMatchPrincipals">resetMatchPrincipals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchPaths` <a name="putMatchPaths" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.putMatchPaths"></a>

```java
public void putMatchPaths(BedrockagentcoreGatewayRuleConditionsMatchPaths value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.putMatchPaths.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths">BedrockagentcoreGatewayRuleConditionsMatchPaths</a>

---

##### `putMatchPrincipals` <a name="putMatchPrincipals" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.putMatchPrincipals"></a>

```java
public void putMatchPrincipals(BedrockagentcoreGatewayRuleConditionsMatchPrincipals value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.putMatchPrincipals.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals">BedrockagentcoreGatewayRuleConditionsMatchPrincipals</a>

---

##### `resetMatchPaths` <a name="resetMatchPaths" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.resetMatchPaths"></a>

```java
public void resetMatchPaths()
```

##### `resetMatchPrincipals` <a name="resetMatchPrincipals" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.resetMatchPrincipals"></a>

```java
public void resetMatchPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchPaths">matchPaths</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference">BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchPrincipals">matchPrincipals</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchPathsInput">matchPathsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths">BedrockagentcoreGatewayRuleConditionsMatchPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchPrincipalsInput">matchPrincipalsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals">BedrockagentcoreGatewayRuleConditionsMatchPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchPaths`<sup>Required</sup> <a name="matchPaths" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchPaths"></a>

```java
public BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference getMatchPaths();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference">BedrockagentcoreGatewayRuleConditionsMatchPathsOutputReference</a>

---

##### `matchPrincipals`<sup>Required</sup> <a name="matchPrincipals" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchPrincipals"></a>

```java
public BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference getMatchPrincipals();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference">BedrockagentcoreGatewayRuleConditionsMatchPrincipalsOutputReference</a>

---

##### `matchPathsInput`<sup>Optional</sup> <a name="matchPathsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchPathsInput"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPaths getMatchPathsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPaths">BedrockagentcoreGatewayRuleConditionsMatchPaths</a>

---

##### `matchPrincipalsInput`<sup>Optional</sup> <a name="matchPrincipalsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.matchPrincipalsInput"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleConditionsMatchPrincipals getMatchPrincipalsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsMatchPrincipals">BedrockagentcoreGatewayRuleConditionsMatchPrincipals</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRuleConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRule.BedrockagentcoreGatewayRuleConditions">BedrockagentcoreGatewayRuleConditions</a>

---



