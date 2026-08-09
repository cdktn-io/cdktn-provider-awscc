# `bedrockagentcorePaymentConnector` Submodule <a name="`bedrockagentcorePaymentConnector` Submodule" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcorePaymentConnector <a name="BedrockagentcorePaymentConnector" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector awscc_bedrockagentcore_payment_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_connector.BedrockagentcorePaymentConnector;

BedrockagentcorePaymentConnector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectorName(java.lang.String)
    .connectorType(java.lang.String)
    .credentialProviderConfigurations(IResolvable|java.util.List<BedrockagentcorePaymentConnectorCredentialProviderConfigurations>)
    .paymentManagerId(java.lang.String)
//  .description(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.connectorName">connectorName</a></code> | <code>java.lang.String</code> | The name of the payment connector. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.connectorType">connectorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#connector_type BedrockagentcorePaymentConnector#connector_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.credentialProviderConfigurations">credentialProviderConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>></code> | The credential provider configurations for the connector. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.paymentManagerId">paymentManagerId</a></code> | <code>java.lang.String</code> | The identifier of the parent payment manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the payment connector. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.connectorName"></a>

- *Type:* java.lang.String

The name of the payment connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#connector_name BedrockagentcorePaymentConnector#connector_name}

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.connectorType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#connector_type BedrockagentcorePaymentConnector#connector_type}.

---

##### `credentialProviderConfigurations`<sup>Required</sup> <a name="credentialProviderConfigurations" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.credentialProviderConfigurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>>

The credential provider configurations for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#credential_provider_configurations BedrockagentcorePaymentConnector#credential_provider_configurations}

---

##### `paymentManagerId`<sup>Required</sup> <a name="paymentManagerId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.paymentManagerId"></a>

- *Type:* java.lang.String

The identifier of the parent payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#payment_manager_id BedrockagentcorePaymentConnector#payment_manager_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the payment connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#description BedrockagentcorePaymentConnector#description}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.putCredentialProviderConfigurations">putCredentialProviderConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCredentialProviderConfigurations` <a name="putCredentialProviderConfigurations" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.putCredentialProviderConfigurations"></a>

```java
public void putCredentialProviderConfigurations(IResolvable|java.util.List<BedrockagentcorePaymentConnectorCredentialProviderConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.putCredentialProviderConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.resetDescription"></a>

```java
public void resetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcorePaymentConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_connector.BedrockagentcorePaymentConnector;

BedrockagentcorePaymentConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_connector.BedrockagentcorePaymentConnector;

BedrockagentcorePaymentConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_connector.BedrockagentcorePaymentConnector;

BedrockagentcorePaymentConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_connector.BedrockagentcorePaymentConnector;

BedrockagentcorePaymentConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcorePaymentConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockagentcorePaymentConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcorePaymentConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcorePaymentConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcorePaymentConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorCreatedAt">connectorCreatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorLastUpdatedAt">connectorLastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorStatus">connectorStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.credentialProviderConfigurations">credentialProviderConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentConnectorArn">paymentConnectorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentConnectorId">paymentConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorNameInput">connectorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorTypeInput">connectorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.credentialProviderConfigurationsInput">credentialProviderConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentManagerIdInput">paymentManagerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorName">connectorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentManagerId">paymentManagerId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectorCreatedAt`<sup>Required</sup> <a name="connectorCreatedAt" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorCreatedAt"></a>

```java
public java.lang.String getConnectorCreatedAt();
```

- *Type:* java.lang.String

---

##### `connectorLastUpdatedAt`<sup>Required</sup> <a name="connectorLastUpdatedAt" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorLastUpdatedAt"></a>

```java
public java.lang.String getConnectorLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `connectorStatus`<sup>Required</sup> <a name="connectorStatus" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorStatus"></a>

```java
public java.lang.String getConnectorStatus();
```

- *Type:* java.lang.String

---

##### `credentialProviderConfigurations`<sup>Required</sup> <a name="credentialProviderConfigurations" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.credentialProviderConfigurations"></a>

```java
public BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList getCredentialProviderConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `paymentConnectorArn`<sup>Required</sup> <a name="paymentConnectorArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentConnectorArn"></a>

```java
public java.lang.String getPaymentConnectorArn();
```

- *Type:* java.lang.String

---

##### `paymentConnectorId`<sup>Required</sup> <a name="paymentConnectorId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentConnectorId"></a>

```java
public java.lang.String getPaymentConnectorId();
```

- *Type:* java.lang.String

---

##### `connectorNameInput`<sup>Optional</sup> <a name="connectorNameInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorNameInput"></a>

```java
public java.lang.String getConnectorNameInput();
```

- *Type:* java.lang.String

---

##### `connectorTypeInput`<sup>Optional</sup> <a name="connectorTypeInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorTypeInput"></a>

```java
public java.lang.String getConnectorTypeInput();
```

- *Type:* java.lang.String

---

##### `credentialProviderConfigurationsInput`<sup>Optional</sup> <a name="credentialProviderConfigurationsInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.credentialProviderConfigurationsInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcorePaymentConnectorCredentialProviderConfigurations> getCredentialProviderConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `paymentManagerIdInput`<sup>Optional</sup> <a name="paymentManagerIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentManagerIdInput"></a>

```java
public java.lang.String getPaymentManagerIdInput();
```

- *Type:* java.lang.String

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorName"></a>

```java
public java.lang.String getConnectorName();
```

- *Type:* java.lang.String

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `paymentManagerId`<sup>Required</sup> <a name="paymentManagerId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentManagerId"></a>

```java
public java.lang.String getPaymentManagerId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcorePaymentConnectorConfig <a name="BedrockagentcorePaymentConnectorConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_connector.BedrockagentcorePaymentConnectorConfig;

BedrockagentcorePaymentConnectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectorName(java.lang.String)
    .connectorType(java.lang.String)
    .credentialProviderConfigurations(IResolvable|java.util.List<BedrockagentcorePaymentConnectorCredentialProviderConfigurations>)
    .paymentManagerId(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connectorName">connectorName</a></code> | <code>java.lang.String</code> | The name of the payment connector. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#connector_type BedrockagentcorePaymentConnector#connector_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.credentialProviderConfigurations">credentialProviderConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>></code> | The credential provider configurations for the connector. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.paymentManagerId">paymentManagerId</a></code> | <code>java.lang.String</code> | The identifier of the parent payment manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the payment connector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connectorName"></a>

```java
public java.lang.String getConnectorName();
```

- *Type:* java.lang.String

The name of the payment connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#connector_name BedrockagentcorePaymentConnector#connector_name}

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#connector_type BedrockagentcorePaymentConnector#connector_type}.

---

##### `credentialProviderConfigurations`<sup>Required</sup> <a name="credentialProviderConfigurations" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.credentialProviderConfigurations"></a>

```java
public IResolvable|java.util.List<BedrockagentcorePaymentConnectorCredentialProviderConfigurations> getCredentialProviderConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>>

The credential provider configurations for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#credential_provider_configurations BedrockagentcorePaymentConnector#credential_provider_configurations}

---

##### `paymentManagerId`<sup>Required</sup> <a name="paymentManagerId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.paymentManagerId"></a>

```java
public java.lang.String getPaymentManagerId();
```

- *Type:* java.lang.String

The identifier of the parent payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#payment_manager_id BedrockagentcorePaymentConnector#payment_manager_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the payment connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#description BedrockagentcorePaymentConnector#description}

---

### BedrockagentcorePaymentConnectorCredentialProviderConfigurations <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurations" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_connector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations;

BedrockagentcorePaymentConnectorCredentialProviderConfigurations.builder()
//  .coinbaseCdp(BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp)
//  .stripePrivy(BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations.property.coinbaseCdp">coinbaseCdp</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#coinbase_cdp BedrockagentcorePaymentConnector#coinbase_cdp}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations.property.stripePrivy">stripePrivy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#stripe_privy BedrockagentcorePaymentConnector#stripe_privy}. |

---

##### `coinbaseCdp`<sup>Optional</sup> <a name="coinbaseCdp" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations.property.coinbaseCdp"></a>

```java
public BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp getCoinbaseCdp();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#coinbase_cdp BedrockagentcorePaymentConnector#coinbase_cdp}.

---

##### `stripePrivy`<sup>Optional</sup> <a name="stripePrivy" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations.property.stripePrivy"></a>

```java
public BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy getStripePrivy();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#stripe_privy BedrockagentcorePaymentConnector#stripe_privy}.

---

### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_connector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp;

BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp.builder()
//  .credentialProviderArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp.property.credentialProviderArn">credentialProviderArn</a></code> | <code>java.lang.String</code> | The ARN of the payment credential provider. |

---

##### `credentialProviderArn`<sup>Optional</sup> <a name="credentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp.property.credentialProviderArn"></a>

```java
public java.lang.String getCredentialProviderArn();
```

- *Type:* java.lang.String

The ARN of the payment credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#credential_provider_arn BedrockagentcorePaymentConnector#credential_provider_arn}

---

### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_connector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy;

BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy.builder()
//  .credentialProviderArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy.property.credentialProviderArn">credentialProviderArn</a></code> | <code>java.lang.String</code> | The ARN of the payment credential provider. |

---

##### `credentialProviderArn`<sup>Optional</sup> <a name="credentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy.property.credentialProviderArn"></a>

```java
public java.lang.String getCredentialProviderArn();
```

- *Type:* java.lang.String

The ARN of the payment credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_connector#credential_provider_arn BedrockagentcorePaymentConnector#credential_provider_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_connector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference;

new BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resetCredentialProviderArn">resetCredentialProviderArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialProviderArn` <a name="resetCredentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resetCredentialProviderArn"></a>

```java
public void resetCredentialProviderArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.credentialProviderArnInput">credentialProviderArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.credentialProviderArn">credentialProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialProviderArnInput`<sup>Optional</sup> <a name="credentialProviderArnInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.credentialProviderArnInput"></a>

```java
public java.lang.String getCredentialProviderArnInput();
```

- *Type:* java.lang.String

---

##### `credentialProviderArn`<sup>Required</sup> <a name="credentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.credentialProviderArn"></a>

```java
public java.lang.String getCredentialProviderArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a>

---


### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_connector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList;

new BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.get"></a>

```java
public BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcorePaymentConnectorCredentialProviderConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>>

---


### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_connector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference;

new BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putCoinbaseCdp">putCoinbaseCdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putStripePrivy">putStripePrivy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resetCoinbaseCdp">resetCoinbaseCdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resetStripePrivy">resetStripePrivy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCoinbaseCdp` <a name="putCoinbaseCdp" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putCoinbaseCdp"></a>

```java
public void putCoinbaseCdp(BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putCoinbaseCdp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a>

---

##### `putStripePrivy` <a name="putStripePrivy" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putStripePrivy"></a>

```java
public void putStripePrivy(BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putStripePrivy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a>

---

##### `resetCoinbaseCdp` <a name="resetCoinbaseCdp" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resetCoinbaseCdp"></a>

```java
public void resetCoinbaseCdp()
```

##### `resetStripePrivy` <a name="resetStripePrivy" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resetStripePrivy"></a>

```java
public void resetStripePrivy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.coinbaseCdp">coinbaseCdp</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.stripePrivy">stripePrivy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.coinbaseCdpInput">coinbaseCdpInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.stripePrivyInput">stripePrivyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coinbaseCdp`<sup>Required</sup> <a name="coinbaseCdp" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.coinbaseCdp"></a>

```java
public BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference getCoinbaseCdp();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference</a>

---

##### `stripePrivy`<sup>Required</sup> <a name="stripePrivy" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.stripePrivy"></a>

```java
public BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference getStripePrivy();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference</a>

---

##### `coinbaseCdpInput`<sup>Optional</sup> <a name="coinbaseCdpInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.coinbaseCdpInput"></a>

```java
public IResolvable|BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp getCoinbaseCdpInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a>

---

##### `stripePrivyInput`<sup>Optional</sup> <a name="stripePrivyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.stripePrivyInput"></a>

```java
public IResolvable|BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy getStripePrivyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcorePaymentConnectorCredentialProviderConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>

---


### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_payment_connector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference;

new BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resetCredentialProviderArn">resetCredentialProviderArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialProviderArn` <a name="resetCredentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resetCredentialProviderArn"></a>

```java
public void resetCredentialProviderArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.credentialProviderArnInput">credentialProviderArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.credentialProviderArn">credentialProviderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialProviderArnInput`<sup>Optional</sup> <a name="credentialProviderArnInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.credentialProviderArnInput"></a>

```java
public java.lang.String getCredentialProviderArnInput();
```

- *Type:* java.lang.String

---

##### `credentialProviderArn`<sup>Required</sup> <a name="credentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.credentialProviderArn"></a>

```java
public java.lang.String getCredentialProviderArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a>

---



