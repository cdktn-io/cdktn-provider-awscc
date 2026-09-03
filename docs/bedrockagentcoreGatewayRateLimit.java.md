# `bedrockagentcoreGatewayRateLimit` Submodule <a name="`bedrockagentcoreGatewayRateLimit` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreGatewayRateLimit <a name="BedrockagentcoreGatewayRateLimit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit awscc_bedrockagentcore_gateway_rate_limit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimit;

BedrockagentcoreGatewayRateLimit.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dimensionKeys(java.util.List<java.lang.String>)
    .entries(IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntries>)
//  .description(java.lang.String)
//  .gatewayIdentifier(java.lang.String)
//  .rateLimitId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.dimensionKeys">dimensionKeys</a></code> | <code>java.util.List<java.lang.String></code> | Ordered list of dimension names defining the scope of this limit. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.entries">entries</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>></code> | Rule entries mapping dimension values to rate configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional human-readable description for this limit. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.gatewayIdentifier">gatewayIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#gateway_identifier BedrockagentcoreGatewayRateLimit#gateway_identifier}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.rateLimitId">rateLimitId</a></code> | <code>java.lang.String</code> | Limit identifier. Optional on Create (system-generates if not provided by customer). Always present in responses. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dimensionKeys`<sup>Required</sup> <a name="dimensionKeys" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.dimensionKeys"></a>

- *Type:* java.util.List<java.lang.String>

Ordered list of dimension names defining the scope of this limit.

Unique per gateway — no two limits can share the same dimensionKeys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#dimension_keys BedrockagentcoreGatewayRateLimit#dimension_keys}

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.entries"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>>

Rule entries mapping dimension values to rate configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#entries BedrockagentcoreGatewayRateLimit#entries}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional human-readable description for this limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#description BedrockagentcoreGatewayRateLimit#description}

---

##### `gatewayIdentifier`<sup>Optional</sup> <a name="gatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.gatewayIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#gateway_identifier BedrockagentcoreGatewayRateLimit#gateway_identifier}.

---

##### `rateLimitId`<sup>Optional</sup> <a name="rateLimitId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.rateLimitId"></a>

- *Type:* java.lang.String

Limit identifier. Optional on Create (system-generates if not provided by customer). Always present in responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate_limit_id BedrockagentcoreGatewayRateLimit#rate_limit_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetGatewayIdentifier">resetGatewayIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetRateLimitId">resetRateLimitId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntries` <a name="putEntries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.putEntries"></a>

```java
public void putEntries(IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.putEntries.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGatewayIdentifier` <a name="resetGatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetGatewayIdentifier"></a>

```java
public void resetGatewayIdentifier()
```

##### `resetRateLimitId` <a name="resetRateLimitId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetRateLimitId"></a>

```java
public void resetRateLimitId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreGatewayRateLimit resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimit;

BedrockagentcoreGatewayRateLimit.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimit;

BedrockagentcoreGatewayRateLimit.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimit;

BedrockagentcoreGatewayRateLimit.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimit;

BedrockagentcoreGatewayRateLimit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcoreGatewayRateLimit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockagentcoreGatewayRateLimit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcoreGatewayRateLimit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcoreGatewayRateLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreGatewayRateLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList">BedrockagentcoreGatewayRateLimitEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dimensionKeysInput">dimensionKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.entriesInput">entriesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.gatewayIdentifierInput">gatewayIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.rateLimitIdInput">rateLimitIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dimensionKeys">dimensionKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.gatewayIdentifier">gatewayIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.rateLimitId">rateLimitId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.entries"></a>

```java
public BedrockagentcoreGatewayRateLimitEntriesList getEntries();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList">BedrockagentcoreGatewayRateLimitEntriesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dimensionKeysInput`<sup>Optional</sup> <a name="dimensionKeysInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dimensionKeysInput"></a>

```java
public java.util.List<java.lang.String> getDimensionKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.entriesInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntries> getEntriesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>>

---

##### `gatewayIdentifierInput`<sup>Optional</sup> <a name="gatewayIdentifierInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.gatewayIdentifierInput"></a>

```java
public java.lang.String getGatewayIdentifierInput();
```

- *Type:* java.lang.String

---

##### `rateLimitIdInput`<sup>Optional</sup> <a name="rateLimitIdInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.rateLimitIdInput"></a>

```java
public java.lang.String getRateLimitIdInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dimensionKeys`<sup>Required</sup> <a name="dimensionKeys" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dimensionKeys"></a>

```java
public java.util.List<java.lang.String> getDimensionKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gatewayIdentifier`<sup>Required</sup> <a name="gatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.gatewayIdentifier"></a>

```java
public java.lang.String getGatewayIdentifier();
```

- *Type:* java.lang.String

---

##### `rateLimitId`<sup>Required</sup> <a name="rateLimitId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.rateLimitId"></a>

```java
public java.lang.String getRateLimitId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreGatewayRateLimitConfig <a name="BedrockagentcoreGatewayRateLimitConfig" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimitConfig;

BedrockagentcoreGatewayRateLimitConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dimensionKeys(java.util.List<java.lang.String>)
    .entries(IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntries>)
//  .description(java.lang.String)
//  .gatewayIdentifier(java.lang.String)
//  .rateLimitId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.dimensionKeys">dimensionKeys</a></code> | <code>java.util.List<java.lang.String></code> | Ordered list of dimension names defining the scope of this limit. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.entries">entries</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>></code> | Rule entries mapping dimension values to rate configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional human-readable description for this limit. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.gatewayIdentifier">gatewayIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#gateway_identifier BedrockagentcoreGatewayRateLimit#gateway_identifier}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.rateLimitId">rateLimitId</a></code> | <code>java.lang.String</code> | Limit identifier. Optional on Create (system-generates if not provided by customer). Always present in responses. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dimensionKeys`<sup>Required</sup> <a name="dimensionKeys" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.dimensionKeys"></a>

```java
public java.util.List<java.lang.String> getDimensionKeys();
```

- *Type:* java.util.List<java.lang.String>

Ordered list of dimension names defining the scope of this limit.

Unique per gateway — no two limits can share the same dimensionKeys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#dimension_keys BedrockagentcoreGatewayRateLimit#dimension_keys}

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.entries"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntries> getEntries();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>>

Rule entries mapping dimension values to rate configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#entries BedrockagentcoreGatewayRateLimit#entries}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional human-readable description for this limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#description BedrockagentcoreGatewayRateLimit#description}

---

##### `gatewayIdentifier`<sup>Optional</sup> <a name="gatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.gatewayIdentifier"></a>

```java
public java.lang.String getGatewayIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#gateway_identifier BedrockagentcoreGatewayRateLimit#gateway_identifier}.

---

##### `rateLimitId`<sup>Optional</sup> <a name="rateLimitId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.rateLimitId"></a>

```java
public java.lang.String getRateLimitId();
```

- *Type:* java.lang.String

Limit identifier. Optional on Create (system-generates if not provided by customer). Always present in responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate_limit_id BedrockagentcoreGatewayRateLimit#rate_limit_id}

---

### BedrockagentcoreGatewayRateLimitEntries <a name="BedrockagentcoreGatewayRateLimitEntries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimitEntries;

BedrockagentcoreGatewayRateLimitEntries.builder()
    .dimensions(java.util.Map<java.lang.String, java.lang.String>)
//  .connections(IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntriesConnections>)
//  .requests(IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntriesRequests>)
//  .tokens(IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntriesTokens>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of dimension name to dimension value for a rule entry. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.connections">connections</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>></code> | Connection rate limits (per second only). Limited to 1 entry for now. — P2. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.requests">requests</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>></code> | Request rate limits (RPS or RPM). Limited to 1 entry for now. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.tokens">tokens</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>></code> | Token rate limits (TPM). Limited to 1 entry for now. — P1. |

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of dimension name to dimension value for a rule entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#dimensions BedrockagentcoreGatewayRateLimit#dimensions}

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.connections"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntriesConnections> getConnections();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>>

Connection rate limits (per second only). Limited to 1 entry for now. — P2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#connections BedrockagentcoreGatewayRateLimit#connections}

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.requests"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntriesRequests> getRequests();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>>

Request rate limits (RPS or RPM). Limited to 1 entry for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#requests BedrockagentcoreGatewayRateLimit#requests}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.tokens"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntriesTokens> getTokens();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>>

Token rate limits (TPM). Limited to 1 entry for now. — P1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#tokens BedrockagentcoreGatewayRateLimit#tokens}

---

### BedrockagentcoreGatewayRateLimitEntriesConnections <a name="BedrockagentcoreGatewayRateLimitEntriesConnections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimitEntriesConnections;

BedrockagentcoreGatewayRateLimitEntriesConnections.builder()
//  .period(java.lang.String)
//  .rate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.property.period">period</a></code> | <code>java.lang.String</code> | Time period for rate limiting. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.property.rate">rate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}. |

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

Time period for rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#period BedrockagentcoreGatewayRateLimit#period}

---

##### `rate`<sup>Optional</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.property.rate"></a>

```java
public java.lang.Number getRate();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}.

---

### BedrockagentcoreGatewayRateLimitEntriesRequests <a name="BedrockagentcoreGatewayRateLimitEntriesRequests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimitEntriesRequests;

BedrockagentcoreGatewayRateLimitEntriesRequests.builder()
//  .period(java.lang.String)
//  .rate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.property.period">period</a></code> | <code>java.lang.String</code> | Time period for rate limiting. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.property.rate">rate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}. |

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

Time period for rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#period BedrockagentcoreGatewayRateLimit#period}

---

##### `rate`<sup>Optional</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.property.rate"></a>

```java
public java.lang.Number getRate();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}.

---

### BedrockagentcoreGatewayRateLimitEntriesTokens <a name="BedrockagentcoreGatewayRateLimitEntriesTokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimitEntriesTokens;

BedrockagentcoreGatewayRateLimitEntriesTokens.builder()
//  .period(java.lang.String)
//  .rate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.property.period">period</a></code> | <code>java.lang.String</code> | Time period for rate limiting. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.property.rate">rate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}. |

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

Time period for rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#period BedrockagentcoreGatewayRateLimit#period}

---

##### `rate`<sup>Optional</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.property.rate"></a>

```java
public java.lang.Number getRate();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreGatewayRateLimitEntriesConnectionsList <a name="BedrockagentcoreGatewayRateLimitEntriesConnectionsList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList;

new BedrockagentcoreGatewayRateLimitEntriesConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.get"></a>

```java
public BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntriesConnections> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>>

---


### BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference <a name="BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference;

new BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resetRate">resetRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetRate` <a name="resetRate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resetRate"></a>

```java
public void resetRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rateInput">rateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rate">rate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `rateInput`<sup>Optional</sup> <a name="rateInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rateInput"></a>

```java
public java.lang.Number getRateInput();
```

- *Type:* java.lang.Number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rate"></a>

```java
public java.lang.Number getRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRateLimitEntriesConnections getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>

---


### BedrockagentcoreGatewayRateLimitEntriesList <a name="BedrockagentcoreGatewayRateLimitEntriesList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimitEntriesList;

new BedrockagentcoreGatewayRateLimitEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.get"></a>

```java
public BedrockagentcoreGatewayRateLimitEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntries> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>>

---


### BedrockagentcoreGatewayRateLimitEntriesOutputReference <a name="BedrockagentcoreGatewayRateLimitEntriesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimitEntriesOutputReference;

new BedrockagentcoreGatewayRateLimitEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putRequests">putRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putTokens">putTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetConnections">resetConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetRequests">resetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetTokens">resetTokens</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnections` <a name="putConnections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putConnections"></a>

```java
public void putConnections(IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntriesConnections> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putConnections.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>>

---

##### `putRequests` <a name="putRequests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putRequests"></a>

```java
public void putRequests(IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntriesRequests> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putRequests.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>>

---

##### `putTokens` <a name="putTokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putTokens"></a>

```java
public void putTokens(IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntriesTokens> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putTokens.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>>

---

##### `resetConnections` <a name="resetConnections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetConnections"></a>

```java
public void resetConnections()
```

##### `resetRequests` <a name="resetRequests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetRequests"></a>

```java
public void resetRequests()
```

##### `resetTokens` <a name="resetTokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetTokens"></a>

```java
public void resetTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList">BedrockagentcoreGatewayRateLimitEntriesConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requests">requests</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList">BedrockagentcoreGatewayRateLimitEntriesRequestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokens">tokens</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList">BedrockagentcoreGatewayRateLimitEntriesTokensList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connectionsInput">connectionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requestsInput">requestsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokensInput">tokensInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensions">dimensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connections"></a>

```java
public BedrockagentcoreGatewayRateLimitEntriesConnectionsList getConnections();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList">BedrockagentcoreGatewayRateLimitEntriesConnectionsList</a>

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requests"></a>

```java
public BedrockagentcoreGatewayRateLimitEntriesRequestsList getRequests();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList">BedrockagentcoreGatewayRateLimitEntriesRequestsList</a>

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokens"></a>

```java
public BedrockagentcoreGatewayRateLimitEntriesTokensList getTokens();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList">BedrockagentcoreGatewayRateLimitEntriesTokensList</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connectionsInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntriesConnections> getConnectionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requestsInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntriesRequests> getRequestsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>>

---

##### `tokensInput`<sup>Optional</sup> <a name="tokensInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokensInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntriesTokens> getTokensInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDimensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRateLimitEntries getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>

---


### BedrockagentcoreGatewayRateLimitEntriesRequestsList <a name="BedrockagentcoreGatewayRateLimitEntriesRequestsList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimitEntriesRequestsList;

new BedrockagentcoreGatewayRateLimitEntriesRequestsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.get"></a>

```java
public BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntriesRequests> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>>

---


### BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference <a name="BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference;

new BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resetRate">resetRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetRate` <a name="resetRate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resetRate"></a>

```java
public void resetRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rateInput">rateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rate">rate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `rateInput`<sup>Optional</sup> <a name="rateInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rateInput"></a>

```java
public java.lang.Number getRateInput();
```

- *Type:* java.lang.Number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rate"></a>

```java
public java.lang.Number getRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRateLimitEntriesRequests getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>

---


### BedrockagentcoreGatewayRateLimitEntriesTokensList <a name="BedrockagentcoreGatewayRateLimitEntriesTokensList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimitEntriesTokensList;

new BedrockagentcoreGatewayRateLimitEntriesTokensList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.get"></a>

```java
public BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreGatewayRateLimitEntriesTokens> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>>

---


### BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference <a name="BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_gateway_rate_limit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference;

new BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resetRate">resetRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetRate` <a name="resetRate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resetRate"></a>

```java
public void resetRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rateInput">rateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rate">rate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `rateInput`<sup>Optional</sup> <a name="rateInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rateInput"></a>

```java
public java.lang.Number getRateInput();
```

- *Type:* java.lang.Number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rate"></a>

```java
public java.lang.Number getRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreGatewayRateLimitEntriesTokens getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>

---



