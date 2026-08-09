# `opensearchserverlessSecurityConfig` Submodule <a name="`opensearchserverlessSecurityConfig` Submodule" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessSecurityConfig <a name="OpensearchserverlessSecurityConfig" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config awscc_opensearchserverless_security_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_security_config.OpensearchserverlessSecurityConfig;

OpensearchserverlessSecurityConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .iamFederationOptions(OpensearchserverlessSecurityConfigIamFederationOptions)
//  .iamIdentityCenterOptions(OpensearchserverlessSecurityConfigIamIdentityCenterOptions)
//  .name(java.lang.String)
//  .samlOptions(OpensearchserverlessSecurityConfigSamlOptions)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Security config description. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.iamFederationOptions">iamFederationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a></code> | Describe IAM federation options in form of key value map. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.iamIdentityCenterOptions">iamIdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a></code> | Describes IAM Identity Center options for an OpenSearch Serverless security configuration in the form of a key-value map. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The friendly name of the security config. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.samlOptions">samlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a></code> | Describes saml options in form of key value map. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Config type for security config. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Security config description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#description OpensearchserverlessSecurityConfig#description}

---

##### `iamFederationOptions`<sup>Optional</sup> <a name="iamFederationOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.iamFederationOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>

Describe IAM federation options in form of key value map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#iam_federation_options OpensearchserverlessSecurityConfig#iam_federation_options}

---

##### `iamIdentityCenterOptions`<sup>Optional</sup> <a name="iamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.iamIdentityCenterOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>

Describes IAM Identity Center options for an OpenSearch Serverless security configuration in the form of a key-value map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#iam_identity_center_options OpensearchserverlessSecurityConfig#iam_identity_center_options}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The friendly name of the security config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#name OpensearchserverlessSecurityConfig#name}

---

##### `samlOptions`<sup>Optional</sup> <a name="samlOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.samlOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>

Describes saml options in form of key value map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#saml_options OpensearchserverlessSecurityConfig#saml_options}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Config type for security config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#type OpensearchserverlessSecurityConfig#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamFederationOptions">putIamFederationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamIdentityCenterOptions">putIamIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions">putSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetIamFederationOptions">resetIamFederationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetIamIdentityCenterOptions">resetIamIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetSamlOptions">resetSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIamFederationOptions` <a name="putIamFederationOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamFederationOptions"></a>

```java
public void putIamFederationOptions(OpensearchserverlessSecurityConfigIamFederationOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamFederationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>

---

##### `putIamIdentityCenterOptions` <a name="putIamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamIdentityCenterOptions"></a>

```java
public void putIamIdentityCenterOptions(OpensearchserverlessSecurityConfigIamIdentityCenterOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putIamIdentityCenterOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>

---

##### `putSamlOptions` <a name="putSamlOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions"></a>

```java
public void putSamlOptions(OpensearchserverlessSecurityConfigSamlOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIamFederationOptions` <a name="resetIamFederationOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetIamFederationOptions"></a>

```java
public void resetIamFederationOptions()
```

##### `resetIamIdentityCenterOptions` <a name="resetIamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetIamIdentityCenterOptions"></a>

```java
public void resetIamIdentityCenterOptions()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetName"></a>

```java
public void resetName()
```

##### `resetSamlOptions` <a name="resetSamlOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetSamlOptions"></a>

```java
public void resetSamlOptions()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserverlessSecurityConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isConstruct"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_security_config.OpensearchserverlessSecurityConfig;

OpensearchserverlessSecurityConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_security_config.OpensearchserverlessSecurityConfig;

OpensearchserverlessSecurityConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_security_config.OpensearchserverlessSecurityConfig;

OpensearchserverlessSecurityConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_security_config.OpensearchserverlessSecurityConfig;

OpensearchserverlessSecurityConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpensearchserverlessSecurityConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OpensearchserverlessSecurityConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpensearchserverlessSecurityConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpensearchserverlessSecurityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessSecurityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamFederationOptions">iamFederationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference">OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamIdentityCenterOptions">iamIdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference">OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptions">samlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference">OpensearchserverlessSecurityConfigSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.securityConfigId">securityConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamFederationOptionsInput">iamFederationOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamIdentityCenterOptionsInput">iamIdentityCenterOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptionsInput">samlOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `iamFederationOptions`<sup>Required</sup> <a name="iamFederationOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamFederationOptions"></a>

```java
public OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference getIamFederationOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference">OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference</a>

---

##### `iamIdentityCenterOptions`<sup>Required</sup> <a name="iamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamIdentityCenterOptions"></a>

```java
public OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference getIamIdentityCenterOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference">OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `samlOptions`<sup>Required</sup> <a name="samlOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptions"></a>

```java
public OpensearchserverlessSecurityConfigSamlOptionsOutputReference getSamlOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference">OpensearchserverlessSecurityConfigSamlOptionsOutputReference</a>

---

##### `securityConfigId`<sup>Required</sup> <a name="securityConfigId" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.securityConfigId"></a>

```java
public java.lang.String getSecurityConfigId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `iamFederationOptionsInput`<sup>Optional</sup> <a name="iamFederationOptionsInput" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamFederationOptionsInput"></a>

```java
public IResolvable|OpensearchserverlessSecurityConfigIamFederationOptions getIamFederationOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>

---

##### `iamIdentityCenterOptionsInput`<sup>Optional</sup> <a name="iamIdentityCenterOptionsInput" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.iamIdentityCenterOptionsInput"></a>

```java
public IResolvable|OpensearchserverlessSecurityConfigIamIdentityCenterOptions getIamIdentityCenterOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `samlOptionsInput`<sup>Optional</sup> <a name="samlOptionsInput" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptionsInput"></a>

```java
public IResolvable|OpensearchserverlessSecurityConfigSamlOptions getSamlOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessSecurityConfigConfig <a name="OpensearchserverlessSecurityConfigConfig" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_security_config.OpensearchserverlessSecurityConfigConfig;

OpensearchserverlessSecurityConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .iamFederationOptions(OpensearchserverlessSecurityConfigIamFederationOptions)
//  .iamIdentityCenterOptions(OpensearchserverlessSecurityConfigIamIdentityCenterOptions)
//  .name(java.lang.String)
//  .samlOptions(OpensearchserverlessSecurityConfigSamlOptions)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | Security config description. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.iamFederationOptions">iamFederationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a></code> | Describe IAM federation options in form of key value map. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.iamIdentityCenterOptions">iamIdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a></code> | Describes IAM Identity Center options for an OpenSearch Serverless security configuration in the form of a key-value map. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | The friendly name of the security config. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.samlOptions">samlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a></code> | Describes saml options in form of key value map. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.type">type</a></code> | <code>java.lang.String</code> | Config type for security config. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Security config description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#description OpensearchserverlessSecurityConfig#description}

---

##### `iamFederationOptions`<sup>Optional</sup> <a name="iamFederationOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.iamFederationOptions"></a>

```java
public OpensearchserverlessSecurityConfigIamFederationOptions getIamFederationOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>

Describe IAM federation options in form of key value map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#iam_federation_options OpensearchserverlessSecurityConfig#iam_federation_options}

---

##### `iamIdentityCenterOptions`<sup>Optional</sup> <a name="iamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.iamIdentityCenterOptions"></a>

```java
public OpensearchserverlessSecurityConfigIamIdentityCenterOptions getIamIdentityCenterOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>

Describes IAM Identity Center options for an OpenSearch Serverless security configuration in the form of a key-value map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#iam_identity_center_options OpensearchserverlessSecurityConfig#iam_identity_center_options}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The friendly name of the security config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#name OpensearchserverlessSecurityConfig#name}

---

##### `samlOptions`<sup>Optional</sup> <a name="samlOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.samlOptions"></a>

```java
public OpensearchserverlessSecurityConfigSamlOptions getSamlOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>

Describes saml options in form of key value map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#saml_options OpensearchserverlessSecurityConfig#saml_options}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Config type for security config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#type OpensearchserverlessSecurityConfig#type}

---

### OpensearchserverlessSecurityConfigIamFederationOptions <a name="OpensearchserverlessSecurityConfigIamFederationOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_security_config.OpensearchserverlessSecurityConfigIamFederationOptions;

OpensearchserverlessSecurityConfigIamFederationOptions.builder()
//  .groupAttribute(java.lang.String)
//  .userAttribute(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions.property.groupAttribute">groupAttribute</a></code> | <code>java.lang.String</code> | Group attribute for this IAM federation integration. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions.property.userAttribute">userAttribute</a></code> | <code>java.lang.String</code> | User attribute for this IAM federation integration. |

---

##### `groupAttribute`<sup>Optional</sup> <a name="groupAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions.property.groupAttribute"></a>

```java
public java.lang.String getGroupAttribute();
```

- *Type:* java.lang.String

Group attribute for this IAM federation integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}

---

##### `userAttribute`<sup>Optional</sup> <a name="userAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions.property.userAttribute"></a>

```java
public java.lang.String getUserAttribute();
```

- *Type:* java.lang.String

User attribute for this IAM federation integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}

---

### OpensearchserverlessSecurityConfigIamIdentityCenterOptions <a name="OpensearchserverlessSecurityConfigIamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_security_config.OpensearchserverlessSecurityConfigIamIdentityCenterOptions;

OpensearchserverlessSecurityConfigIamIdentityCenterOptions.builder()
//  .groupAttribute(java.lang.String)
//  .instanceArn(java.lang.String)
//  .userAttribute(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.groupAttribute">groupAttribute</a></code> | <code>java.lang.String</code> | Group attribute for this IAM Identity Center integration. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM Identity Center instance used to integrate with OpenSearch Serverless. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.userAttribute">userAttribute</a></code> | <code>java.lang.String</code> | User attribute for this IAM Identity Center integration. |

---

##### `groupAttribute`<sup>Optional</sup> <a name="groupAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.groupAttribute"></a>

```java
public java.lang.String getGroupAttribute();
```

- *Type:* java.lang.String

Group attribute for this IAM Identity Center integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}

---

##### `instanceArn`<sup>Optional</sup> <a name="instanceArn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

The ARN of the IAM Identity Center instance used to integrate with OpenSearch Serverless.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#instance_arn OpensearchserverlessSecurityConfig#instance_arn}

---

##### `userAttribute`<sup>Optional</sup> <a name="userAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions.property.userAttribute"></a>

```java
public java.lang.String getUserAttribute();
```

- *Type:* java.lang.String

User attribute for this IAM Identity Center integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}

---

### OpensearchserverlessSecurityConfigSamlOptions <a name="OpensearchserverlessSecurityConfigSamlOptions" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_security_config.OpensearchserverlessSecurityConfigSamlOptions;

OpensearchserverlessSecurityConfigSamlOptions.builder()
//  .groupAttribute(java.lang.String)
//  .metadata(java.lang.String)
//  .openSearchServerlessEntityId(java.lang.String)
//  .sessionTimeout(java.lang.Number)
//  .userAttribute(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.groupAttribute">groupAttribute</a></code> | <code>java.lang.String</code> | Group attribute for this saml integration. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.metadata">metadata</a></code> | <code>java.lang.String</code> | The XML saml provider metadata document that you want to use. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.openSearchServerlessEntityId">openSearchServerlessEntityId</a></code> | <code>java.lang.String</code> | Custom entity id attribute to override default entity id for this saml integration. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.sessionTimeout">sessionTimeout</a></code> | <code>java.lang.Number</code> | Defines the session timeout in minutes. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.userAttribute">userAttribute</a></code> | <code>java.lang.String</code> | Custom attribute for this saml integration. |

---

##### `groupAttribute`<sup>Optional</sup> <a name="groupAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.groupAttribute"></a>

```java
public java.lang.String getGroupAttribute();
```

- *Type:* java.lang.String

Group attribute for this saml integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

The XML saml provider metadata document that you want to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#metadata OpensearchserverlessSecurityConfig#metadata}

---

##### `openSearchServerlessEntityId`<sup>Optional</sup> <a name="openSearchServerlessEntityId" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.openSearchServerlessEntityId"></a>

```java
public java.lang.String getOpenSearchServerlessEntityId();
```

- *Type:* java.lang.String

Custom entity id attribute to override default entity id for this saml integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#open_search_serverless_entity_id OpensearchserverlessSecurityConfig#open_search_serverless_entity_id}

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.sessionTimeout"></a>

```java
public java.lang.Number getSessionTimeout();
```

- *Type:* java.lang.Number

Defines the session timeout in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#session_timeout OpensearchserverlessSecurityConfig#session_timeout}

---

##### `userAttribute`<sup>Optional</sup> <a name="userAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.userAttribute"></a>

```java
public java.lang.String getUserAttribute();
```

- *Type:* java.lang.String

Custom attribute for this saml integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference <a name="OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_security_config.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference;

new OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resetGroupAttribute">resetGroupAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resetUserAttribute">resetUserAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupAttribute` <a name="resetGroupAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resetGroupAttribute"></a>

```java
public void resetGroupAttribute()
```

##### `resetUserAttribute` <a name="resetUserAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resetUserAttribute"></a>

```java
public void resetUserAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.groupAttributeInput">groupAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.userAttributeInput">userAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.groupAttribute">groupAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.userAttribute">userAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupAttributeInput`<sup>Optional</sup> <a name="groupAttributeInput" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.groupAttributeInput"></a>

```java
public java.lang.String getGroupAttributeInput();
```

- *Type:* java.lang.String

---

##### `userAttributeInput`<sup>Optional</sup> <a name="userAttributeInput" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.userAttributeInput"></a>

```java
public java.lang.String getUserAttributeInput();
```

- *Type:* java.lang.String

---

##### `groupAttribute`<sup>Required</sup> <a name="groupAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.groupAttribute"></a>

```java
public java.lang.String getGroupAttribute();
```

- *Type:* java.lang.String

---

##### `userAttribute`<sup>Required</sup> <a name="userAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.userAttribute"></a>

```java
public java.lang.String getUserAttribute();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserverlessSecurityConfigIamFederationOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamFederationOptions">OpensearchserverlessSecurityConfigIamFederationOptions</a>

---


### OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference <a name="OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_security_config.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference;

new OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resetGroupAttribute">resetGroupAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resetInstanceArn">resetInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resetUserAttribute">resetUserAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupAttribute` <a name="resetGroupAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resetGroupAttribute"></a>

```java
public void resetGroupAttribute()
```

##### `resetInstanceArn` <a name="resetInstanceArn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resetInstanceArn"></a>

```java
public void resetInstanceArn()
```

##### `resetUserAttribute` <a name="resetUserAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resetUserAttribute"></a>

```java
public void resetUserAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationDescription">applicationDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.groupAttributeInput">groupAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.userAttributeInput">userAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.groupAttribute">groupAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.userAttribute">userAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationArn"></a>

```java
public java.lang.String getApplicationArn();
```

- *Type:* java.lang.String

---

##### `applicationDescription`<sup>Required</sup> <a name="applicationDescription" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationDescription"></a>

```java
public java.lang.String getApplicationDescription();
```

- *Type:* java.lang.String

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

---

##### `groupAttributeInput`<sup>Optional</sup> <a name="groupAttributeInput" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.groupAttributeInput"></a>

```java
public java.lang.String getGroupAttributeInput();
```

- *Type:* java.lang.String

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `userAttributeInput`<sup>Optional</sup> <a name="userAttributeInput" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.userAttributeInput"></a>

```java
public java.lang.String getUserAttributeInput();
```

- *Type:* java.lang.String

---

##### `groupAttribute`<sup>Required</sup> <a name="groupAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.groupAttribute"></a>

```java
public java.lang.String getGroupAttribute();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `userAttribute`<sup>Required</sup> <a name="userAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.userAttribute"></a>

```java
public java.lang.String getUserAttribute();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserverlessSecurityConfigIamIdentityCenterOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigIamIdentityCenterOptions">OpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>

---


### OpensearchserverlessSecurityConfigSamlOptionsOutputReference <a name="OpensearchserverlessSecurityConfigSamlOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchserverless_security_config.OpensearchserverlessSecurityConfigSamlOptionsOutputReference;

new OpensearchserverlessSecurityConfigSamlOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetGroupAttribute">resetGroupAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetOpenSearchServerlessEntityId">resetOpenSearchServerlessEntityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetUserAttribute">resetUserAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupAttribute` <a name="resetGroupAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetGroupAttribute"></a>

```java
public void resetGroupAttribute()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetOpenSearchServerlessEntityId` <a name="resetOpenSearchServerlessEntityId" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetOpenSearchServerlessEntityId"></a>

```java
public void resetOpenSearchServerlessEntityId()
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetSessionTimeout"></a>

```java
public void resetSessionTimeout()
```

##### `resetUserAttribute` <a name="resetUserAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetUserAttribute"></a>

```java
public void resetUserAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttributeInput">groupAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.openSearchServerlessEntityIdInput">openSearchServerlessEntityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttributeInput">userAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttribute">groupAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.openSearchServerlessEntityId">openSearchServerlessEntityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttribute">userAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupAttributeInput`<sup>Optional</sup> <a name="groupAttributeInput" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttributeInput"></a>

```java
public java.lang.String getGroupAttributeInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `openSearchServerlessEntityIdInput`<sup>Optional</sup> <a name="openSearchServerlessEntityIdInput" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.openSearchServerlessEntityIdInput"></a>

```java
public java.lang.String getOpenSearchServerlessEntityIdInput();
```

- *Type:* java.lang.String

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeoutInput"></a>

```java
public java.lang.Number getSessionTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `userAttributeInput`<sup>Optional</sup> <a name="userAttributeInput" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttributeInput"></a>

```java
public java.lang.String getUserAttributeInput();
```

- *Type:* java.lang.String

---

##### `groupAttribute`<sup>Required</sup> <a name="groupAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttribute"></a>

```java
public java.lang.String getGroupAttribute();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `openSearchServerlessEntityId`<sup>Required</sup> <a name="openSearchServerlessEntityId" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.openSearchServerlessEntityId"></a>

```java
public java.lang.String getOpenSearchServerlessEntityId();
```

- *Type:* java.lang.String

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeout"></a>

```java
public java.lang.Number getSessionTimeout();
```

- *Type:* java.lang.Number

---

##### `userAttribute`<sup>Required</sup> <a name="userAttribute" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttribute"></a>

```java
public java.lang.String getUserAttribute();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserverlessSecurityConfigSamlOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>

---



