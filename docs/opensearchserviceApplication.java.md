# `opensearchserviceApplication` Submodule <a name="`opensearchserviceApplication` Submodule" id="@cdktn/provider-awscc.opensearchserviceApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserviceApplication <a name="OpensearchserviceApplication" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application awscc_opensearchservice_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplication;

OpensearchserviceApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .appConfigs(IResolvable|java.util.List<OpensearchserviceApplicationAppConfigs>)
//  .dataSources(IResolvable|java.util.List<OpensearchserviceApplicationDataSources>)
//  .endpoint(java.lang.String)
//  .iamIdentityCenterOptions(OpensearchserviceApplicationIamIdentityCenterOptions)
//  .kmsKeyArn(java.lang.String)
//  .tags(IResolvable|java.util.List<OpensearchserviceApplicationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.appConfigs">appConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>></code> | List of application configurations. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.dataSources">dataSources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>></code> | List of data sources. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The endpoint for the application. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.iamIdentityCenterOptions">iamIdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a></code> | Options for configuring IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key used to encrypt the application. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>></code> | An arbitrary set of tags (key-value pairs) for this application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#name OpensearchserviceApplication#name}

---

##### `appConfigs`<sup>Optional</sup> <a name="appConfigs" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.appConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>>

List of application configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#app_configs OpensearchserviceApplication#app_configs}

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.dataSources"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>>

List of data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#data_sources OpensearchserviceApplication#data_sources}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.endpoint"></a>

- *Type:* java.lang.String

The endpoint for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#endpoint OpensearchserviceApplication#endpoint}

---

##### `iamIdentityCenterOptions`<sup>Optional</sup> <a name="iamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.iamIdentityCenterOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a>

Options for configuring IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#iam_identity_center_options OpensearchserviceApplication#iam_identity_center_options}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

The ARN of the KMS key used to encrypt the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#kms_key_arn OpensearchserviceApplication#kms_key_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>>

An arbitrary set of tags (key-value pairs) for this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#tags OpensearchserviceApplication#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putAppConfigs">putAppConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putDataSources">putDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putIamIdentityCenterOptions">putIamIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetAppConfigs">resetAppConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetDataSources">resetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetIamIdentityCenterOptions">resetIamIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppConfigs` <a name="putAppConfigs" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putAppConfigs"></a>

```java
public void putAppConfigs(IResolvable|java.util.List<OpensearchserviceApplicationAppConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putAppConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>>

---

##### `putDataSources` <a name="putDataSources" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putDataSources"></a>

```java
public void putDataSources(IResolvable|java.util.List<OpensearchserviceApplicationDataSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putDataSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>>

---

##### `putIamIdentityCenterOptions` <a name="putIamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putIamIdentityCenterOptions"></a>

```java
public void putIamIdentityCenterOptions(OpensearchserviceApplicationIamIdentityCenterOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putIamIdentityCenterOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<OpensearchserviceApplicationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>>

---

##### `resetAppConfigs` <a name="resetAppConfigs" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetAppConfigs"></a>

```java
public void resetAppConfigs()
```

##### `resetDataSources` <a name="resetDataSources" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetDataSources"></a>

```java
public void resetDataSources()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetIamIdentityCenterOptions` <a name="resetIamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetIamIdentityCenterOptions"></a>

```java
public void resetIamIdentityCenterOptions()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserviceApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isConstruct"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplication;

OpensearchserviceApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplication;

OpensearchserviceApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplication;

OpensearchserviceApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplication;

OpensearchserviceApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpensearchserviceApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OpensearchserviceApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpensearchserviceApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpensearchserviceApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserviceApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.appConfigs">appConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList">OpensearchserviceApplicationAppConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList">OpensearchserviceApplicationDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.iamIdentityCenterOptions">iamIdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference">OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList">OpensearchserviceApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.appConfigsInput">appConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dataSourcesInput">dataSourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.iamIdentityCenterOptionsInput">iamIdentityCenterOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appConfigs`<sup>Required</sup> <a name="appConfigs" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.appConfigs"></a>

```java
public OpensearchserviceApplicationAppConfigsList getAppConfigs();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList">OpensearchserviceApplicationAppConfigsList</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dataSources"></a>

```java
public OpensearchserviceApplicationDataSourcesList getDataSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList">OpensearchserviceApplicationDataSourcesList</a>

---

##### `iamIdentityCenterOptions`<sup>Required</sup> <a name="iamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.iamIdentityCenterOptions"></a>

```java
public OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference getIamIdentityCenterOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference">OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tags"></a>

```java
public OpensearchserviceApplicationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList">OpensearchserviceApplicationTagsList</a>

---

##### `appConfigsInput`<sup>Optional</sup> <a name="appConfigsInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.appConfigsInput"></a>

```java
public IResolvable|java.util.List<OpensearchserviceApplicationAppConfigs> getAppConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>>

---

##### `dataSourcesInput`<sup>Optional</sup> <a name="dataSourcesInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dataSourcesInput"></a>

```java
public IResolvable|java.util.List<OpensearchserviceApplicationDataSources> getDataSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `iamIdentityCenterOptionsInput`<sup>Optional</sup> <a name="iamIdentityCenterOptionsInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.iamIdentityCenterOptionsInput"></a>

```java
public IResolvable|OpensearchserviceApplicationIamIdentityCenterOptions getIamIdentityCenterOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a>

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tagsInput"></a>

```java
public IResolvable|java.util.List<OpensearchserviceApplicationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserviceApplicationAppConfigs <a name="OpensearchserviceApplicationAppConfigs" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplicationAppConfigs;

OpensearchserviceApplicationAppConfigs.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs.property.key">key</a></code> | <code>java.lang.String</code> | The configuration key. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs.property.value">value</a></code> | <code>java.lang.String</code> | The configuration value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The configuration key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#key OpensearchserviceApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The configuration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#value OpensearchserviceApplication#value}

---

### OpensearchserviceApplicationConfig <a name="OpensearchserviceApplicationConfig" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplicationConfig;

OpensearchserviceApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .appConfigs(IResolvable|java.util.List<OpensearchserviceApplicationAppConfigs>)
//  .dataSources(IResolvable|java.util.List<OpensearchserviceApplicationDataSources>)
//  .endpoint(java.lang.String)
//  .iamIdentityCenterOptions(OpensearchserviceApplicationIamIdentityCenterOptions)
//  .kmsKeyArn(java.lang.String)
//  .tags(IResolvable|java.util.List<OpensearchserviceApplicationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.appConfigs">appConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>></code> | List of application configurations. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.dataSources">dataSources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>></code> | List of data sources. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The endpoint for the application. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.iamIdentityCenterOptions">iamIdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a></code> | Options for configuring IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key used to encrypt the application. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>></code> | An arbitrary set of tags (key-value pairs) for this application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#name OpensearchserviceApplication#name}

---

##### `appConfigs`<sup>Optional</sup> <a name="appConfigs" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.appConfigs"></a>

```java
public IResolvable|java.util.List<OpensearchserviceApplicationAppConfigs> getAppConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>>

List of application configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#app_configs OpensearchserviceApplication#app_configs}

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.dataSources"></a>

```java
public IResolvable|java.util.List<OpensearchserviceApplicationDataSources> getDataSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>>

List of data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#data_sources OpensearchserviceApplication#data_sources}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

The endpoint for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#endpoint OpensearchserviceApplication#endpoint}

---

##### `iamIdentityCenterOptions`<sup>Optional</sup> <a name="iamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.iamIdentityCenterOptions"></a>

```java
public OpensearchserviceApplicationIamIdentityCenterOptions getIamIdentityCenterOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a>

Options for configuring IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#iam_identity_center_options OpensearchserviceApplication#iam_identity_center_options}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

The ARN of the KMS key used to encrypt the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#kms_key_arn OpensearchserviceApplication#kms_key_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<OpensearchserviceApplicationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>>

An arbitrary set of tags (key-value pairs) for this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#tags OpensearchserviceApplication#tags}

---

### OpensearchserviceApplicationDataSources <a name="OpensearchserviceApplicationDataSources" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplicationDataSources;

OpensearchserviceApplicationDataSources.builder()
//  .dataSourceArn(java.lang.String)
//  .dataSourceDescription(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources.property.dataSourceArn">dataSourceArn</a></code> | <code>java.lang.String</code> | The ARN of the data source. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources.property.dataSourceDescription">dataSourceDescription</a></code> | <code>java.lang.String</code> | Description of the data source. |

---

##### `dataSourceArn`<sup>Optional</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources.property.dataSourceArn"></a>

```java
public java.lang.String getDataSourceArn();
```

- *Type:* java.lang.String

The ARN of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#data_source_arn OpensearchserviceApplication#data_source_arn}

---

##### `dataSourceDescription`<sup>Optional</sup> <a name="dataSourceDescription" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources.property.dataSourceDescription"></a>

```java
public java.lang.String getDataSourceDescription();
```

- *Type:* java.lang.String

Description of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#data_source_description OpensearchserviceApplication#data_source_description}

---

### OpensearchserviceApplicationIamIdentityCenterOptions <a name="OpensearchserviceApplicationIamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplicationIamIdentityCenterOptions;

OpensearchserviceApplicationIamIdentityCenterOptions.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .iamIdentityCenterInstanceArn(java.lang.String)
//  .iamRoleForIdentityCenterApplicationArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether IAM Identity Center is enabled. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.iamIdentityCenterInstanceArn">iamIdentityCenterInstanceArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM Identity Center instance. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.iamRoleForIdentityCenterApplicationArn">iamRoleForIdentityCenterApplicationArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role for Identity Center application. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether IAM Identity Center is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#enabled OpensearchserviceApplication#enabled}

---

##### `iamIdentityCenterInstanceArn`<sup>Optional</sup> <a name="iamIdentityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.iamIdentityCenterInstanceArn"></a>

```java
public java.lang.String getIamIdentityCenterInstanceArn();
```

- *Type:* java.lang.String

The ARN of the IAM Identity Center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#iam_identity_center_instance_arn OpensearchserviceApplication#iam_identity_center_instance_arn}

---

##### `iamRoleForIdentityCenterApplicationArn`<sup>Optional</sup> <a name="iamRoleForIdentityCenterApplicationArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.iamRoleForIdentityCenterApplicationArn"></a>

```java
public java.lang.String getIamRoleForIdentityCenterApplicationArn();
```

- *Type:* java.lang.String

The ARN of the IAM role for Identity Center application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#iam_role_for_identity_center_application_arn OpensearchserviceApplication#iam_role_for_identity_center_application_arn}

---

### OpensearchserviceApplicationTags <a name="OpensearchserviceApplicationTags" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplicationTags;

OpensearchserviceApplicationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key in the key-value pair. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value in the key-value pair. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key in the key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#key OpensearchserviceApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value in the key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchservice_application#value OpensearchserviceApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserviceApplicationAppConfigsList <a name="OpensearchserviceApplicationAppConfigsList" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplicationAppConfigsList;

new OpensearchserviceApplicationAppConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.get"></a>

```java
public OpensearchserviceApplicationAppConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OpensearchserviceApplicationAppConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>>

---


### OpensearchserviceApplicationAppConfigsOutputReference <a name="OpensearchserviceApplicationAppConfigsOutputReference" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplicationAppConfigsOutputReference;

new OpensearchserviceApplicationAppConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceApplicationAppConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>

---


### OpensearchserviceApplicationDataSourcesList <a name="OpensearchserviceApplicationDataSourcesList" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplicationDataSourcesList;

new OpensearchserviceApplicationDataSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.get"></a>

```java
public OpensearchserviceApplicationDataSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OpensearchserviceApplicationDataSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>>

---


### OpensearchserviceApplicationDataSourcesOutputReference <a name="OpensearchserviceApplicationDataSourcesOutputReference" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplicationDataSourcesOutputReference;

new OpensearchserviceApplicationDataSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resetDataSourceArn">resetDataSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resetDataSourceDescription">resetDataSourceDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataSourceArn` <a name="resetDataSourceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resetDataSourceArn"></a>

```java
public void resetDataSourceArn()
```

##### `resetDataSourceDescription` <a name="resetDataSourceDescription" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resetDataSourceDescription"></a>

```java
public void resetDataSourceDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceArnInput">dataSourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceDescriptionInput">dataSourceDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceArn">dataSourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceDescription">dataSourceDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataSourceArnInput`<sup>Optional</sup> <a name="dataSourceArnInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceArnInput"></a>

```java
public java.lang.String getDataSourceArnInput();
```

- *Type:* java.lang.String

---

##### `dataSourceDescriptionInput`<sup>Optional</sup> <a name="dataSourceDescriptionInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceDescriptionInput"></a>

```java
public java.lang.String getDataSourceDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceArn"></a>

```java
public java.lang.String getDataSourceArn();
```

- *Type:* java.lang.String

---

##### `dataSourceDescription`<sup>Required</sup> <a name="dataSourceDescription" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceDescription"></a>

```java
public java.lang.String getDataSourceDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceApplicationDataSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>

---


### OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference <a name="OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference;

new OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetIamIdentityCenterInstanceArn">resetIamIdentityCenterInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetIamRoleForIdentityCenterApplicationArn">resetIamRoleForIdentityCenterApplicationArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetIamIdentityCenterInstanceArn` <a name="resetIamIdentityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetIamIdentityCenterInstanceArn"></a>

```java
public void resetIamIdentityCenterInstanceArn()
```

##### `resetIamRoleForIdentityCenterApplicationArn` <a name="resetIamRoleForIdentityCenterApplicationArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetIamRoleForIdentityCenterApplicationArn"></a>

```java
public void resetIamRoleForIdentityCenterApplicationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArnInput">iamIdentityCenterInstanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArnInput">iamRoleForIdentityCenterApplicationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArn">iamIdentityCenterInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArn">iamRoleForIdentityCenterApplicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iamIdentityCenterInstanceArnInput`<sup>Optional</sup> <a name="iamIdentityCenterInstanceArnInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArnInput"></a>

```java
public java.lang.String getIamIdentityCenterInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `iamRoleForIdentityCenterApplicationArnInput`<sup>Optional</sup> <a name="iamRoleForIdentityCenterApplicationArnInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArnInput"></a>

```java
public java.lang.String getIamRoleForIdentityCenterApplicationArnInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `iamIdentityCenterInstanceArn`<sup>Required</sup> <a name="iamIdentityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArn"></a>

```java
public java.lang.String getIamIdentityCenterInstanceArn();
```

- *Type:* java.lang.String

---

##### `iamRoleForIdentityCenterApplicationArn`<sup>Required</sup> <a name="iamRoleForIdentityCenterApplicationArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArn"></a>

```java
public java.lang.String getIamRoleForIdentityCenterApplicationArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceApplicationIamIdentityCenterOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a>

---


### OpensearchserviceApplicationTagsList <a name="OpensearchserviceApplicationTagsList" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplicationTagsList;

new OpensearchserviceApplicationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.get"></a>

```java
public OpensearchserviceApplicationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OpensearchserviceApplicationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>>

---


### OpensearchserviceApplicationTagsOutputReference <a name="OpensearchserviceApplicationTagsOutputReference" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchservice_application.OpensearchserviceApplicationTagsOutputReference;

new OpensearchserviceApplicationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchserviceApplicationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>

---



