# `cognitoManagedLoginBranding` Submodule <a name="`cognitoManagedLoginBranding` Submodule" id="@cdktn/provider-awscc.cognitoManagedLoginBranding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoManagedLoginBranding <a name="CognitoManagedLoginBranding" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding awscc_cognito_managed_login_branding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_managed_login_branding.CognitoManagedLoginBranding;

CognitoManagedLoginBranding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .userPoolId(java.lang.String)
//  .assets(IResolvable|java.util.List<CognitoManagedLoginBrandingAssets>)
//  .clientId(java.lang.String)
//  .returnMergedResources(java.lang.Boolean|IResolvable)
//  .settings(java.lang.String)
//  .useCognitoProvidedValues(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#user_pool_id CognitoManagedLoginBranding#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.assets">assets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#assets CognitoManagedLoginBranding#assets}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#client_id CognitoManagedLoginBranding#client_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.returnMergedResources">returnMergedResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#return_merged_resources CognitoManagedLoginBranding#return_merged_resources}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.settings">settings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#settings CognitoManagedLoginBranding#settings}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.useCognitoProvidedValues">useCognitoProvidedValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#use_cognito_provided_values CognitoManagedLoginBranding#use_cognito_provided_values}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.userPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#user_pool_id CognitoManagedLoginBranding#user_pool_id}.

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.assets"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#assets CognitoManagedLoginBranding#assets}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#client_id CognitoManagedLoginBranding#client_id}.

---

##### `returnMergedResources`<sup>Optional</sup> <a name="returnMergedResources" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.returnMergedResources"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#return_merged_resources CognitoManagedLoginBranding#return_merged_resources}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.settings"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#settings CognitoManagedLoginBranding#settings}.

---

##### `useCognitoProvidedValues`<sup>Optional</sup> <a name="useCognitoProvidedValues" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.useCognitoProvidedValues"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#use_cognito_provided_values CognitoManagedLoginBranding#use_cognito_provided_values}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.putAssets">putAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetAssets">resetAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetReturnMergedResources">resetReturnMergedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetUseCognitoProvidedValues">resetUseCognitoProvidedValues</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssets` <a name="putAssets" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.putAssets"></a>

```java
public void putAssets(IResolvable|java.util.List<CognitoManagedLoginBrandingAssets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.putAssets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>>

---

##### `resetAssets` <a name="resetAssets" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetAssets"></a>

```java
public void resetAssets()
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetReturnMergedResources` <a name="resetReturnMergedResources" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetReturnMergedResources"></a>

```java
public void resetReturnMergedResources()
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetSettings"></a>

```java
public void resetSettings()
```

##### `resetUseCognitoProvidedValues` <a name="resetUseCognitoProvidedValues" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetUseCognitoProvidedValues"></a>

```java
public void resetUseCognitoProvidedValues()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoManagedLoginBranding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cognito_managed_login_branding.CognitoManagedLoginBranding;

CognitoManagedLoginBranding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cognito_managed_login_branding.CognitoManagedLoginBranding;

CognitoManagedLoginBranding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cognito_managed_login_branding.CognitoManagedLoginBranding;

CognitoManagedLoginBranding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cognito_managed_login_branding.CognitoManagedLoginBranding;

CognitoManagedLoginBranding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CognitoManagedLoginBranding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CognitoManagedLoginBranding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CognitoManagedLoginBranding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CognitoManagedLoginBranding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CognitoManagedLoginBranding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.assets">assets</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList">CognitoManagedLoginBrandingAssetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.managedLoginBrandingId">managedLoginBrandingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.assetsInput">assetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.returnMergedResourcesInput">returnMergedResourcesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settingsInput">settingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValuesInput">useCognitoProvidedValuesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.returnMergedResources">returnMergedResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settings">settings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValues">useCognitoProvidedValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assets`<sup>Required</sup> <a name="assets" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.assets"></a>

```java
public CognitoManagedLoginBrandingAssetsList getAssets();
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList">CognitoManagedLoginBrandingAssetsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedLoginBrandingId`<sup>Required</sup> <a name="managedLoginBrandingId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.managedLoginBrandingId"></a>

```java
public java.lang.String getManagedLoginBrandingId();
```

- *Type:* java.lang.String

---

##### `assetsInput`<sup>Optional</sup> <a name="assetsInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.assetsInput"></a>

```java
public IResolvable|java.util.List<CognitoManagedLoginBrandingAssets> getAssetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `returnMergedResourcesInput`<sup>Optional</sup> <a name="returnMergedResourcesInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.returnMergedResourcesInput"></a>

```java
public java.lang.Boolean|IResolvable getReturnMergedResourcesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settingsInput"></a>

```java
public java.lang.String getSettingsInput();
```

- *Type:* java.lang.String

---

##### `useCognitoProvidedValuesInput`<sup>Optional</sup> <a name="useCognitoProvidedValuesInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValuesInput"></a>

```java
public java.lang.Boolean|IResolvable getUseCognitoProvidedValuesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `returnMergedResources`<sup>Required</sup> <a name="returnMergedResources" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.returnMergedResources"></a>

```java
public java.lang.Boolean|IResolvable getReturnMergedResources();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settings"></a>

```java
public java.lang.String getSettings();
```

- *Type:* java.lang.String

---

##### `useCognitoProvidedValues`<sup>Required</sup> <a name="useCognitoProvidedValues" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValues"></a>

```java
public java.lang.Boolean|IResolvable getUseCognitoProvidedValues();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoManagedLoginBrandingAssets <a name="CognitoManagedLoginBrandingAssets" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_managed_login_branding.CognitoManagedLoginBrandingAssets;

CognitoManagedLoginBrandingAssets.builder()
//  .bytes(java.lang.String)
//  .category(java.lang.String)
//  .colorMode(java.lang.String)
//  .extension(java.lang.String)
//  .resourceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.bytes">bytes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#bytes CognitoManagedLoginBranding#bytes}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.category">category</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#category CognitoManagedLoginBranding#category}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.colorMode">colorMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#color_mode CognitoManagedLoginBranding#color_mode}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.extension">extension</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#extension CognitoManagedLoginBranding#extension}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#resource_id CognitoManagedLoginBranding#resource_id}. |

---

##### `bytes`<sup>Optional</sup> <a name="bytes" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.bytes"></a>

```java
public java.lang.String getBytes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#bytes CognitoManagedLoginBranding#bytes}.

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#category CognitoManagedLoginBranding#category}.

---

##### `colorMode`<sup>Optional</sup> <a name="colorMode" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.colorMode"></a>

```java
public java.lang.String getColorMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#color_mode CognitoManagedLoginBranding#color_mode}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.extension"></a>

```java
public java.lang.String getExtension();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#extension CognitoManagedLoginBranding#extension}.

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#resource_id CognitoManagedLoginBranding#resource_id}.

---

### CognitoManagedLoginBrandingConfig <a name="CognitoManagedLoginBrandingConfig" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_managed_login_branding.CognitoManagedLoginBrandingConfig;

CognitoManagedLoginBrandingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .userPoolId(java.lang.String)
//  .assets(IResolvable|java.util.List<CognitoManagedLoginBrandingAssets>)
//  .clientId(java.lang.String)
//  .returnMergedResources(java.lang.Boolean|IResolvable)
//  .settings(java.lang.String)
//  .useCognitoProvidedValues(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#user_pool_id CognitoManagedLoginBranding#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.assets">assets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#assets CognitoManagedLoginBranding#assets}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#client_id CognitoManagedLoginBranding#client_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.returnMergedResources">returnMergedResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#return_merged_resources CognitoManagedLoginBranding#return_merged_resources}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.settings">settings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#settings CognitoManagedLoginBranding#settings}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.useCognitoProvidedValues">useCognitoProvidedValues</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#use_cognito_provided_values CognitoManagedLoginBranding#use_cognito_provided_values}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#user_pool_id CognitoManagedLoginBranding#user_pool_id}.

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.assets"></a>

```java
public IResolvable|java.util.List<CognitoManagedLoginBrandingAssets> getAssets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#assets CognitoManagedLoginBranding#assets}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#client_id CognitoManagedLoginBranding#client_id}.

---

##### `returnMergedResources`<sup>Optional</sup> <a name="returnMergedResources" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.returnMergedResources"></a>

```java
public java.lang.Boolean|IResolvable getReturnMergedResources();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#return_merged_resources CognitoManagedLoginBranding#return_merged_resources}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.settings"></a>

```java
public java.lang.String getSettings();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#settings CognitoManagedLoginBranding#settings}.

---

##### `useCognitoProvidedValues`<sup>Optional</sup> <a name="useCognitoProvidedValues" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.useCognitoProvidedValues"></a>

```java
public java.lang.Boolean|IResolvable getUseCognitoProvidedValues();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cognito_managed_login_branding#use_cognito_provided_values CognitoManagedLoginBranding#use_cognito_provided_values}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoManagedLoginBrandingAssetsList <a name="CognitoManagedLoginBrandingAssetsList" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_managed_login_branding.CognitoManagedLoginBrandingAssetsList;

new CognitoManagedLoginBrandingAssetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.get"></a>

```java
public CognitoManagedLoginBrandingAssetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CognitoManagedLoginBrandingAssets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>>

---


### CognitoManagedLoginBrandingAssetsOutputReference <a name="CognitoManagedLoginBrandingAssetsOutputReference" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cognito_managed_login_branding.CognitoManagedLoginBrandingAssetsOutputReference;

new CognitoManagedLoginBrandingAssetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetBytes">resetBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetColorMode">resetColorMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetExtension">resetExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBytes` <a name="resetBytes" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetBytes"></a>

```java
public void resetBytes()
```

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetCategory"></a>

```java
public void resetCategory()
```

##### `resetColorMode` <a name="resetColorMode" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetColorMode"></a>

```java
public void resetColorMode()
```

##### `resetExtension` <a name="resetExtension" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetExtension"></a>

```java
public void resetExtension()
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetResourceId"></a>

```java
public void resetResourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.bytesInput">bytesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.colorModeInput">colorModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.extensionInput">extensionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.bytes">bytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.colorMode">colorMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.extension">extension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bytesInput`<sup>Optional</sup> <a name="bytesInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.bytesInput"></a>

```java
public java.lang.String getBytesInput();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `colorModeInput`<sup>Optional</sup> <a name="colorModeInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.colorModeInput"></a>

```java
public java.lang.String getColorModeInput();
```

- *Type:* java.lang.String

---

##### `extensionInput`<sup>Optional</sup> <a name="extensionInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.extensionInput"></a>

```java
public java.lang.String getExtensionInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.bytes"></a>

```java
public java.lang.String getBytes();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `colorMode`<sup>Required</sup> <a name="colorMode" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.colorMode"></a>

```java
public java.lang.String getColorMode();
```

- *Type:* java.lang.String

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.extension"></a>

```java
public java.lang.String getExtension();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.internalValue"></a>

```java
public IResolvable|CognitoManagedLoginBrandingAssets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>

---



