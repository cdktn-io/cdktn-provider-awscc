# `redshiftRedshiftIdcApplication` Submodule <a name="`redshiftRedshiftIdcApplication` Submodule" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftRedshiftIdcApplication <a name="RedshiftRedshiftIdcApplication" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application awscc_redshift_redshift_idc_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplication;

RedshiftRedshiftIdcApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .iamRoleArn(java.lang.String)
    .idcDisplayName(java.lang.String)
    .idcInstanceArn(java.lang.String)
    .redshiftIdcApplicationName(java.lang.String)
//  .applicationType(java.lang.String)
//  .authorizedTokenIssuerList(IResolvable|java.util.List<RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct>)
//  .identityNamespace(java.lang.String)
//  .serviceIntegrations(IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrations>)
//  .ssoTagKeys(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<RedshiftRedshiftIdcApplicationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | The IAM role ARN for the Amazon Redshift IAM Identity Center application instance. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.idcDisplayName">idcDisplayName</a></code> | <code>java.lang.String</code> | The display name for the Amazon Redshift IAM Identity Center application instance. It appears in the console. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | The Amazon resource name (ARN) of the IAM Identity Center instance where Amazon Redshift creates a new managed application. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.redshiftIdcApplicationName">redshiftIdcApplicationName</a></code> | <code>java.lang.String</code> | The name of the Redshift application in IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.applicationType">applicationType</a></code> | <code>java.lang.String</code> | The type of application being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.authorizedTokenIssuerList">authorizedTokenIssuerList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>></code> | The token issuer list for the Amazon Redshift IAM Identity Center application instance. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.identityNamespace">identityNamespace</a></code> | <code>java.lang.String</code> | The namespace for the Amazon Redshift IAM Identity Center application instance. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.serviceIntegrations">serviceIntegrations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>></code> | A collection of service integrations for the Redshift IAM Identity Center application. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.ssoTagKeys">ssoTagKeys</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag keys that Redshift Identity Center applications copy to IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.iamRoleArn"></a>

- *Type:* java.lang.String

The IAM role ARN for the Amazon Redshift IAM Identity Center application instance.

It has the required permissions to be assumed and invoke the IDC Identity Center API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#iam_role_arn RedshiftRedshiftIdcApplication#iam_role_arn}

---

##### `idcDisplayName`<sup>Required</sup> <a name="idcDisplayName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.idcDisplayName"></a>

- *Type:* java.lang.String

The display name for the Amazon Redshift IAM Identity Center application instance. It appears in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#idc_display_name RedshiftRedshiftIdcApplication#idc_display_name}

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.idcInstanceArn"></a>

- *Type:* java.lang.String

The Amazon resource name (ARN) of the IAM Identity Center instance where Amazon Redshift creates a new managed application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#idc_instance_arn RedshiftRedshiftIdcApplication#idc_instance_arn}

---

##### `redshiftIdcApplicationName`<sup>Required</sup> <a name="redshiftIdcApplicationName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.redshiftIdcApplicationName"></a>

- *Type:* java.lang.String

The name of the Redshift application in IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#redshift_idc_application_name RedshiftRedshiftIdcApplication#redshift_idc_application_name}

---

##### `applicationType`<sup>Optional</sup> <a name="applicationType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.applicationType"></a>

- *Type:* java.lang.String

The type of application being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#application_type RedshiftRedshiftIdcApplication#application_type}

---

##### `authorizedTokenIssuerList`<sup>Optional</sup> <a name="authorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.authorizedTokenIssuerList"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>>

The token issuer list for the Amazon Redshift IAM Identity Center application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#authorized_token_issuer_list RedshiftRedshiftIdcApplication#authorized_token_issuer_list}

---

##### `identityNamespace`<sup>Optional</sup> <a name="identityNamespace" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.identityNamespace"></a>

- *Type:* java.lang.String

The namespace for the Amazon Redshift IAM Identity Center application instance.

It determines which managed application verifies the connection token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#identity_namespace RedshiftRedshiftIdcApplication#identity_namespace}

---

##### `serviceIntegrations`<sup>Optional</sup> <a name="serviceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.serviceIntegrations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>>

A collection of service integrations for the Redshift IAM Identity Center application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#service_integrations RedshiftRedshiftIdcApplication#service_integrations}

---

##### `ssoTagKeys`<sup>Optional</sup> <a name="ssoTagKeys" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.ssoTagKeys"></a>

- *Type:* java.util.List<java.lang.String>

A list of tag keys that Redshift Identity Center applications copy to IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#sso_tag_keys RedshiftRedshiftIdcApplication#sso_tag_keys}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#tags RedshiftRedshiftIdcApplication#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putAuthorizedTokenIssuerList">putAuthorizedTokenIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putServiceIntegrations">putServiceIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetApplicationType">resetApplicationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetAuthorizedTokenIssuerList">resetAuthorizedTokenIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetIdentityNamespace">resetIdentityNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetServiceIntegrations">resetServiceIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetSsoTagKeys">resetSsoTagKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorizedTokenIssuerList` <a name="putAuthorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putAuthorizedTokenIssuerList"></a>

```java
public void putAuthorizedTokenIssuerList(IResolvable|java.util.List<RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putAuthorizedTokenIssuerList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>>

---

##### `putServiceIntegrations` <a name="putServiceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putServiceIntegrations"></a>

```java
public void putServiceIntegrations(IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putServiceIntegrations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RedshiftRedshiftIdcApplicationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>>

---

##### `resetApplicationType` <a name="resetApplicationType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetApplicationType"></a>

```java
public void resetApplicationType()
```

##### `resetAuthorizedTokenIssuerList` <a name="resetAuthorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetAuthorizedTokenIssuerList"></a>

```java
public void resetAuthorizedTokenIssuerList()
```

##### `resetIdentityNamespace` <a name="resetIdentityNamespace" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetIdentityNamespace"></a>

```java
public void resetIdentityNamespace()
```

##### `resetServiceIntegrations` <a name="resetServiceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetServiceIntegrations"></a>

```java
public void resetServiceIntegrations()
```

##### `resetSsoTagKeys` <a name="resetSsoTagKeys" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetSsoTagKeys"></a>

```java
public void resetSsoTagKeys()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftRedshiftIdcApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isConstruct"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplication;

RedshiftRedshiftIdcApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplication;

RedshiftRedshiftIdcApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplication;

RedshiftRedshiftIdcApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplication;

RedshiftRedshiftIdcApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedshiftRedshiftIdcApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RedshiftRedshiftIdcApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedshiftRedshiftIdcApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedshiftRedshiftIdcApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftRedshiftIdcApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.authorizedTokenIssuerList">authorizedTokenIssuerList</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcManagedApplicationArn">idcManagedApplicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcOnboardStatus">idcOnboardStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationArn">redshiftIdcApplicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.serviceIntegrations">serviceIntegrations</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList">RedshiftRedshiftIdcApplicationServiceIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList">RedshiftRedshiftIdcApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.applicationTypeInput">applicationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.authorizedTokenIssuerListInput">authorizedTokenIssuerListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcDisplayNameInput">idcDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcInstanceArnInput">idcInstanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.identityNamespaceInput">identityNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationNameInput">redshiftIdcApplicationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.serviceIntegrationsInput">serviceIntegrationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.ssoTagKeysInput">ssoTagKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcDisplayName">idcDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.identityNamespace">identityNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationName">redshiftIdcApplicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.ssoTagKeys">ssoTagKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorizedTokenIssuerList`<sup>Required</sup> <a name="authorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.authorizedTokenIssuerList"></a>

```java
public RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList getAuthorizedTokenIssuerList();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcManagedApplicationArn`<sup>Required</sup> <a name="idcManagedApplicationArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcManagedApplicationArn"></a>

```java
public java.lang.String getIdcManagedApplicationArn();
```

- *Type:* java.lang.String

---

##### `idcOnboardStatus`<sup>Required</sup> <a name="idcOnboardStatus" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcOnboardStatus"></a>

```java
public java.lang.String getIdcOnboardStatus();
```

- *Type:* java.lang.String

---

##### `redshiftIdcApplicationArn`<sup>Required</sup> <a name="redshiftIdcApplicationArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationArn"></a>

```java
public java.lang.String getRedshiftIdcApplicationArn();
```

- *Type:* java.lang.String

---

##### `serviceIntegrations`<sup>Required</sup> <a name="serviceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.serviceIntegrations"></a>

```java
public RedshiftRedshiftIdcApplicationServiceIntegrationsList getServiceIntegrations();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList">RedshiftRedshiftIdcApplicationServiceIntegrationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tags"></a>

```java
public RedshiftRedshiftIdcApplicationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList">RedshiftRedshiftIdcApplicationTagsList</a>

---

##### `applicationTypeInput`<sup>Optional</sup> <a name="applicationTypeInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.applicationTypeInput"></a>

```java
public java.lang.String getApplicationTypeInput();
```

- *Type:* java.lang.String

---

##### `authorizedTokenIssuerListInput`<sup>Optional</sup> <a name="authorizedTokenIssuerListInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.authorizedTokenIssuerListInput"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct> getAuthorizedTokenIssuerListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>>

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `idcDisplayNameInput`<sup>Optional</sup> <a name="idcDisplayNameInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcDisplayNameInput"></a>

```java
public java.lang.String getIdcDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idcInstanceArnInput`<sup>Optional</sup> <a name="idcInstanceArnInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcInstanceArnInput"></a>

```java
public java.lang.String getIdcInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `identityNamespaceInput`<sup>Optional</sup> <a name="identityNamespaceInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.identityNamespaceInput"></a>

```java
public java.lang.String getIdentityNamespaceInput();
```

- *Type:* java.lang.String

---

##### `redshiftIdcApplicationNameInput`<sup>Optional</sup> <a name="redshiftIdcApplicationNameInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationNameInput"></a>

```java
public java.lang.String getRedshiftIdcApplicationNameInput();
```

- *Type:* java.lang.String

---

##### `serviceIntegrationsInput`<sup>Optional</sup> <a name="serviceIntegrationsInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.serviceIntegrationsInput"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrations> getServiceIntegrationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>>

---

##### `ssoTagKeysInput`<sup>Optional</sup> <a name="ssoTagKeysInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.ssoTagKeysInput"></a>

```java
public java.util.List<java.lang.String> getSsoTagKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>>

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `idcDisplayName`<sup>Required</sup> <a name="idcDisplayName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcDisplayName"></a>

```java
public java.lang.String getIdcDisplayName();
```

- *Type:* java.lang.String

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.idcInstanceArn"></a>

```java
public java.lang.String getIdcInstanceArn();
```

- *Type:* java.lang.String

---

##### `identityNamespace`<sup>Required</sup> <a name="identityNamespace" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.identityNamespace"></a>

```java
public java.lang.String getIdentityNamespace();
```

- *Type:* java.lang.String

---

##### `redshiftIdcApplicationName`<sup>Required</sup> <a name="redshiftIdcApplicationName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.redshiftIdcApplicationName"></a>

```java
public java.lang.String getRedshiftIdcApplicationName();
```

- *Type:* java.lang.String

---

##### `ssoTagKeys`<sup>Required</sup> <a name="ssoTagKeys" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.ssoTagKeys"></a>

```java
public java.util.List<java.lang.String> getSsoTagKeys();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct <a name="RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct;

RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.builder()
//  .authorizedAudiencesList(java.util.List<java.lang.String>)
//  .trustedTokenIssuerArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.property.authorizedAudiencesList">authorizedAudiencesList</a></code> | <code>java.util.List<java.lang.String></code> | The list of audiences for the authorized token issuer. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.property.trustedTokenIssuerArn">trustedTokenIssuerArn</a></code> | <code>java.lang.String</code> | The ARN for the authorized token issuer for integrating Amazon Redshift with IDC Identity Center. |

---

##### `authorizedAudiencesList`<sup>Optional</sup> <a name="authorizedAudiencesList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.property.authorizedAudiencesList"></a>

```java
public java.util.List<java.lang.String> getAuthorizedAudiencesList();
```

- *Type:* java.util.List<java.lang.String>

The list of audiences for the authorized token issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#authorized_audiences_list RedshiftRedshiftIdcApplication#authorized_audiences_list}

---

##### `trustedTokenIssuerArn`<sup>Optional</sup> <a name="trustedTokenIssuerArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.property.trustedTokenIssuerArn"></a>

```java
public java.lang.String getTrustedTokenIssuerArn();
```

- *Type:* java.lang.String

The ARN for the authorized token issuer for integrating Amazon Redshift with IDC Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#trusted_token_issuer_arn RedshiftRedshiftIdcApplication#trusted_token_issuer_arn}

---

### RedshiftRedshiftIdcApplicationConfig <a name="RedshiftRedshiftIdcApplicationConfig" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationConfig;

RedshiftRedshiftIdcApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .iamRoleArn(java.lang.String)
    .idcDisplayName(java.lang.String)
    .idcInstanceArn(java.lang.String)
    .redshiftIdcApplicationName(java.lang.String)
//  .applicationType(java.lang.String)
//  .authorizedTokenIssuerList(IResolvable|java.util.List<RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct>)
//  .identityNamespace(java.lang.String)
//  .serviceIntegrations(IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrations>)
//  .ssoTagKeys(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<RedshiftRedshiftIdcApplicationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | The IAM role ARN for the Amazon Redshift IAM Identity Center application instance. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.idcDisplayName">idcDisplayName</a></code> | <code>java.lang.String</code> | The display name for the Amazon Redshift IAM Identity Center application instance. It appears in the console. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | The Amazon resource name (ARN) of the IAM Identity Center instance where Amazon Redshift creates a new managed application. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.redshiftIdcApplicationName">redshiftIdcApplicationName</a></code> | <code>java.lang.String</code> | The name of the Redshift application in IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | The type of application being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.authorizedTokenIssuerList">authorizedTokenIssuerList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>></code> | The token issuer list for the Amazon Redshift IAM Identity Center application instance. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.identityNamespace">identityNamespace</a></code> | <code>java.lang.String</code> | The namespace for the Amazon Redshift IAM Identity Center application instance. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.serviceIntegrations">serviceIntegrations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>></code> | A collection of service integrations for the Redshift IAM Identity Center application. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.ssoTagKeys">ssoTagKeys</a></code> | <code>java.util.List<java.lang.String></code> | A list of tag keys that Redshift Identity Center applications copy to IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

The IAM role ARN for the Amazon Redshift IAM Identity Center application instance.

It has the required permissions to be assumed and invoke the IDC Identity Center API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#iam_role_arn RedshiftRedshiftIdcApplication#iam_role_arn}

---

##### `idcDisplayName`<sup>Required</sup> <a name="idcDisplayName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.idcDisplayName"></a>

```java
public java.lang.String getIdcDisplayName();
```

- *Type:* java.lang.String

The display name for the Amazon Redshift IAM Identity Center application instance. It appears in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#idc_display_name RedshiftRedshiftIdcApplication#idc_display_name}

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.idcInstanceArn"></a>

```java
public java.lang.String getIdcInstanceArn();
```

- *Type:* java.lang.String

The Amazon resource name (ARN) of the IAM Identity Center instance where Amazon Redshift creates a new managed application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#idc_instance_arn RedshiftRedshiftIdcApplication#idc_instance_arn}

---

##### `redshiftIdcApplicationName`<sup>Required</sup> <a name="redshiftIdcApplicationName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.redshiftIdcApplicationName"></a>

```java
public java.lang.String getRedshiftIdcApplicationName();
```

- *Type:* java.lang.String

The name of the Redshift application in IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#redshift_idc_application_name RedshiftRedshiftIdcApplication#redshift_idc_application_name}

---

##### `applicationType`<sup>Optional</sup> <a name="applicationType" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

The type of application being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#application_type RedshiftRedshiftIdcApplication#application_type}

---

##### `authorizedTokenIssuerList`<sup>Optional</sup> <a name="authorizedTokenIssuerList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.authorizedTokenIssuerList"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct> getAuthorizedTokenIssuerList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>>

The token issuer list for the Amazon Redshift IAM Identity Center application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#authorized_token_issuer_list RedshiftRedshiftIdcApplication#authorized_token_issuer_list}

---

##### `identityNamespace`<sup>Optional</sup> <a name="identityNamespace" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.identityNamespace"></a>

```java
public java.lang.String getIdentityNamespace();
```

- *Type:* java.lang.String

The namespace for the Amazon Redshift IAM Identity Center application instance.

It determines which managed application verifies the connection token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#identity_namespace RedshiftRedshiftIdcApplication#identity_namespace}

---

##### `serviceIntegrations`<sup>Optional</sup> <a name="serviceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.serviceIntegrations"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrations> getServiceIntegrations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>>

A collection of service integrations for the Redshift IAM Identity Center application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#service_integrations RedshiftRedshiftIdcApplication#service_integrations}

---

##### `ssoTagKeys`<sup>Optional</sup> <a name="ssoTagKeys" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.ssoTagKeys"></a>

```java
public java.util.List<java.lang.String> getSsoTagKeys();
```

- *Type:* java.util.List<java.lang.String>

A list of tag keys that Redshift Identity Center applications copy to IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#sso_tag_keys RedshiftRedshiftIdcApplication#sso_tag_keys}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#tags RedshiftRedshiftIdcApplication#tags}

---

### RedshiftRedshiftIdcApplicationServiceIntegrations <a name="RedshiftRedshiftIdcApplicationServiceIntegrations" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrations;

RedshiftRedshiftIdcApplicationServiceIntegrations.builder()
//  .lakeFormation(IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation>)
//  .redshift(IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift>)
//  .s3AccessGrants(IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.lakeFormation">lakeFormation</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>></code> | A list of scopes set up for Lake Formation integration. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.redshift">redshift</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>></code> | A list of scopes set up for Amazon Redshift integration. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.s3AccessGrants">s3AccessGrants</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>></code> | A list of scopes set up for S3 Access Grants integration. |

---

##### `lakeFormation`<sup>Optional</sup> <a name="lakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.lakeFormation"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation> getLakeFormation();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>>

A list of scopes set up for Lake Formation integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#lake_formation RedshiftRedshiftIdcApplication#lake_formation}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.redshift"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift> getRedshift();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>>

A list of scopes set up for Amazon Redshift integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#redshift RedshiftRedshiftIdcApplication#redshift}

---

##### `s3AccessGrants`<sup>Optional</sup> <a name="s3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations.property.s3AccessGrants"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants> getS3AccessGrants();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>>

A list of scopes set up for S3 Access Grants integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#s3_access_grants RedshiftRedshiftIdcApplication#s3_access_grants}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation;

RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation.builder()
//  .lakeFormationQuery(RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation.property.lakeFormationQuery">lakeFormationQuery</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a></code> | The Lake Formation scope. |

---

##### `lakeFormationQuery`<sup>Optional</sup> <a name="lakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation.property.lakeFormationQuery"></a>

```java
public RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery getLakeFormationQuery();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a>

The Lake Formation scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#lake_formation_query RedshiftRedshiftIdcApplication#lake_formation_query}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery;

RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery.builder()
//  .authorization(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Determines whether the query scope is enabled or disabled. |

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Determines whether the query scope is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#authorization RedshiftRedshiftIdcApplication#authorization}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift;

RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift.builder()
//  .connect(RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift.property.connect">connect</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a></code> | The Amazon Redshift connect integration scope. |

---

##### `connect`<sup>Optional</sup> <a name="connect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift.property.connect"></a>

```java
public RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect getConnect();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a>

The Amazon Redshift connect integration scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#connect RedshiftRedshiftIdcApplication#connect}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect;

RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect.builder()
//  .authorization(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Determines whether the Amazon Redshift connect integration is enabled or disabled. |

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Determines whether the Amazon Redshift connect integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#authorization RedshiftRedshiftIdcApplication#authorization}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants;

RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants.builder()
//  .readWriteAccess(RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants.property.readWriteAccess">readWriteAccess</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a></code> | The S3 Access Grants scope. |

---

##### `readWriteAccess`<sup>Optional</sup> <a name="readWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants.property.readWriteAccess"></a>

```java
public RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess getReadWriteAccess();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a>

The S3 Access Grants scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#read_write_access RedshiftRedshiftIdcApplication#read_write_access}

---

### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess;

RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess.builder()
//  .authorization(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Determines whether the read/write scope is enabled or disabled. |

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Determines whether the read/write scope is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#authorization RedshiftRedshiftIdcApplication#authorization}

---

### RedshiftRedshiftIdcApplicationTags <a name="RedshiftRedshiftIdcApplicationTags" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationTags;

RedshiftRedshiftIdcApplicationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#key RedshiftRedshiftIdcApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/redshift_redshift_idc_application#value RedshiftRedshiftIdcApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList <a name="RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList;

new RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get"></a>

```java
public RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>>

---


### RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference <a name="RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference;

new RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resetAuthorizedAudiencesList">resetAuthorizedAudiencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resetTrustedTokenIssuerArn">resetTrustedTokenIssuerArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizedAudiencesList` <a name="resetAuthorizedAudiencesList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resetAuthorizedAudiencesList"></a>

```java
public void resetAuthorizedAudiencesList()
```

##### `resetTrustedTokenIssuerArn` <a name="resetTrustedTokenIssuerArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resetTrustedTokenIssuerArn"></a>

```java
public void resetTrustedTokenIssuerArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesListInput">authorizedAudiencesListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArnInput">trustedTokenIssuerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesList">authorizedAudiencesList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArn">trustedTokenIssuerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizedAudiencesListInput`<sup>Optional</sup> <a name="authorizedAudiencesListInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesListInput"></a>

```java
public java.util.List<java.lang.String> getAuthorizedAudiencesListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trustedTokenIssuerArnInput`<sup>Optional</sup> <a name="trustedTokenIssuerArnInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArnInput"></a>

```java
public java.lang.String getTrustedTokenIssuerArnInput();
```

- *Type:* java.lang.String

---

##### `authorizedAudiencesList`<sup>Required</sup> <a name="authorizedAudiencesList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesList"></a>

```java
public java.util.List<java.lang.String> getAuthorizedAudiencesList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trustedTokenIssuerArn`<sup>Required</sup> <a name="trustedTokenIssuerArn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArn"></a>

```java
public java.lang.String getTrustedTokenIssuerArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">RedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference;

new RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resetAuthorization">resetAuthorization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resetAuthorization"></a>

```java
public void resetAuthorization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList;

new RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get"></a>

```java
public RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference;

new RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.putLakeFormationQuery">putLakeFormationQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resetLakeFormationQuery">resetLakeFormationQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLakeFormationQuery` <a name="putLakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.putLakeFormationQuery"></a>

```java
public void putLakeFormationQuery(RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.putLakeFormationQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a>

---

##### `resetLakeFormationQuery` <a name="resetLakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resetLakeFormationQuery"></a>

```java
public void resetLakeFormationQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQuery">lakeFormationQuery</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQueryInput">lakeFormationQueryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lakeFormationQuery`<sup>Required</sup> <a name="lakeFormationQuery" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQuery"></a>

```java
public RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference getLakeFormationQuery();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference</a>

---

##### `lakeFormationQueryInput`<sup>Optional</sup> <a name="lakeFormationQueryInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQueryInput"></a>

```java
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery getLakeFormationQueryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsList <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsList;

new RedshiftRedshiftIdcApplicationServiceIntegrationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.get"></a>

```java
public RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference;

new RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putLakeFormation">putLakeFormation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putRedshift">putRedshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putS3AccessGrants">putS3AccessGrants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetLakeFormation">resetLakeFormation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetRedshift">resetRedshift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetS3AccessGrants">resetS3AccessGrants</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLakeFormation` <a name="putLakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putLakeFormation"></a>

```java
public void putLakeFormation(IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putLakeFormation.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>>

---

##### `putRedshift` <a name="putRedshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putRedshift"></a>

```java
public void putRedshift(IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putRedshift.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>>

---

##### `putS3AccessGrants` <a name="putS3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putS3AccessGrants"></a>

```java
public void putS3AccessGrants(IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.putS3AccessGrants.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>>

---

##### `resetLakeFormation` <a name="resetLakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetLakeFormation"></a>

```java
public void resetLakeFormation()
```

##### `resetRedshift` <a name="resetRedshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetRedshift"></a>

```java
public void resetRedshift()
```

##### `resetS3AccessGrants` <a name="resetS3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resetS3AccessGrants"></a>

```java
public void resetS3AccessGrants()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormation">lakeFormation</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshift">redshift</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrants">s3AccessGrants</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormationInput">lakeFormationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshiftInput">redshiftInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrantsInput">s3AccessGrantsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lakeFormation`<sup>Required</sup> <a name="lakeFormation" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormation"></a>

```java
public RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList getLakeFormation();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList</a>

---

##### `redshift`<sup>Required</sup> <a name="redshift" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshift"></a>

```java
public RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList getRedshift();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList</a>

---

##### `s3AccessGrants`<sup>Required</sup> <a name="s3AccessGrants" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrants"></a>

```java
public RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList getS3AccessGrants();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList</a>

---

##### `lakeFormationInput`<sup>Optional</sup> <a name="lakeFormationInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormationInput"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation> getLakeFormationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">RedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>>

---

##### `redshiftInput`<sup>Optional</sup> <a name="redshiftInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshiftInput"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift> getRedshiftInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>>

---

##### `s3AccessGrantsInput`<sup>Optional</sup> <a name="s3AccessGrantsInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrantsInput"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants> getS3AccessGrantsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrations">RedshiftRedshiftIdcApplicationServiceIntegrations</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference;

new RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resetAuthorization">resetAuthorization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resetAuthorization"></a>

```java
public void resetAuthorization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList;

new RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get"></a>

```java
public RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference;

new RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.putConnect">putConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resetConnect">resetConnect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnect` <a name="putConnect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.putConnect"></a>

```java
public void putConnect(RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.putConnect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a>

---

##### `resetConnect` <a name="resetConnect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resetConnect"></a>

```java
public void resetConnect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connect">connect</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connectInput">connectInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connect`<sup>Required</sup> <a name="connect" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connect"></a>

```java
public RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference getConnect();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference</a>

---

##### `connectInput`<sup>Optional</sup> <a name="connectInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connectInput"></a>

```java
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect getConnectInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">RedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList;

new RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get"></a>

```java
public RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference;

new RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.putReadWriteAccess">putReadWriteAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resetReadWriteAccess">resetReadWriteAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReadWriteAccess` <a name="putReadWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.putReadWriteAccess"></a>

```java
public void putReadWriteAccess(RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.putReadWriteAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a>

---

##### `resetReadWriteAccess` <a name="resetReadWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resetReadWriteAccess"></a>

```java
public void resetReadWriteAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccess">readWriteAccess</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccessInput">readWriteAccessInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readWriteAccess`<sup>Required</sup> <a name="readWriteAccess" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccess"></a>

```java
public RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference getReadWriteAccess();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference</a>

---

##### `readWriteAccessInput`<sup>Optional</sup> <a name="readWriteAccessInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccessInput"></a>

```java
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess getReadWriteAccessInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>

---


### RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference <a name="RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference;

new RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resetAuthorization">resetAuthorization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resetAuthorization"></a>

```java
public void resetAuthorization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">RedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a>

---


### RedshiftRedshiftIdcApplicationTagsList <a name="RedshiftRedshiftIdcApplicationTagsList" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationTagsList;

new RedshiftRedshiftIdcApplicationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.get"></a>

```java
public RedshiftRedshiftIdcApplicationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftRedshiftIdcApplicationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>>

---


### RedshiftRedshiftIdcApplicationTagsOutputReference <a name="RedshiftRedshiftIdcApplicationTagsOutputReference" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_redshift_idc_application.RedshiftRedshiftIdcApplicationTagsOutputReference;

new RedshiftRedshiftIdcApplicationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftRedshiftIdcApplicationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftRedshiftIdcApplication.RedshiftRedshiftIdcApplicationTags">RedshiftRedshiftIdcApplicationTags</a>

---



