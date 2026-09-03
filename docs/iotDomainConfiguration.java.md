# `iotDomainConfiguration` Submodule <a name="`iotDomainConfiguration` Submodule" id="@cdktn/provider-awscc.iotDomainConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotDomainConfiguration <a name="IotDomainConfiguration" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration awscc_iot_domain_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfiguration;

IotDomainConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .applicationProtocol(java.lang.String)
//  .authenticationType(java.lang.String)
//  .authorizerConfig(IotDomainConfigurationAuthorizerConfig)
//  .clientCertificateConfig(IotDomainConfigurationClientCertificateConfig)
//  .domainConfigurationName(java.lang.String)
//  .domainConfigurationStatus(java.lang.String)
//  .domainName(java.lang.String)
//  .serverCertificateArns(java.util.List<java.lang.String>)
//  .serverCertificateConfig(IotDomainConfigurationServerCertificateConfig)
//  .serviceType(java.lang.String)
//  .tags(IResolvable|java.util.List<IotDomainConfigurationTags>)
//  .tlsConfig(IotDomainConfigurationTlsConfig)
//  .validationCertificateArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.applicationProtocol">applicationProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#application_protocol IotDomainConfiguration#application_protocol}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#authentication_type IotDomainConfiguration#authentication_type}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.authorizerConfig">authorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#authorizer_config IotDomainConfiguration#authorizer_config}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.clientCertificateConfig">clientCertificateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig">IotDomainConfigurationClientCertificateConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#client_certificate_config IotDomainConfiguration#client_certificate_config}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.domainConfigurationName">domainConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#domain_configuration_name IotDomainConfiguration#domain_configuration_name}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.domainConfigurationStatus">domainConfigurationStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#domain_configuration_status IotDomainConfiguration#domain_configuration_status}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.serverCertificateArns">serverCertificateArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.serverCertificateConfig">serverCertificateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig">IotDomainConfigurationServerCertificateConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#server_certificate_config IotDomainConfiguration#server_certificate_config}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.serviceType">serviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#tls_config IotDomainConfiguration#tls_config}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.validationCertificateArn">validationCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationProtocol`<sup>Optional</sup> <a name="applicationProtocol" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.applicationProtocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#application_protocol IotDomainConfiguration#application_protocol}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.authenticationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#authentication_type IotDomainConfiguration#authentication_type}.

---

##### `authorizerConfig`<sup>Optional</sup> <a name="authorizerConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.authorizerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#authorizer_config IotDomainConfiguration#authorizer_config}.

---

##### `clientCertificateConfig`<sup>Optional</sup> <a name="clientCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.clientCertificateConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig">IotDomainConfigurationClientCertificateConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#client_certificate_config IotDomainConfiguration#client_certificate_config}.

---

##### `domainConfigurationName`<sup>Optional</sup> <a name="domainConfigurationName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.domainConfigurationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#domain_configuration_name IotDomainConfiguration#domain_configuration_name}.

---

##### `domainConfigurationStatus`<sup>Optional</sup> <a name="domainConfigurationStatus" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.domainConfigurationStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#domain_configuration_status IotDomainConfiguration#domain_configuration_status}.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}.

---

##### `serverCertificateArns`<sup>Optional</sup> <a name="serverCertificateArns" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.serverCertificateArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}.

---

##### `serverCertificateConfig`<sup>Optional</sup> <a name="serverCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.serverCertificateConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig">IotDomainConfigurationServerCertificateConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#server_certificate_config IotDomainConfiguration#server_certificate_config}.

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.serviceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}.

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#tls_config IotDomainConfiguration#tls_config}.

---

##### `validationCertificateArn`<sup>Optional</sup> <a name="validationCertificateArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.validationCertificateArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig">putAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putClientCertificateConfig">putClientCertificateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putServerCertificateConfig">putServerCertificateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetApplicationProtocol">resetApplicationProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetAuthorizerConfig">resetAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetClientCertificateConfig">resetClientCertificateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetDomainConfigurationName">resetDomainConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetDomainConfigurationStatus">resetDomainConfigurationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetServerCertificateArns">resetServerCertificateArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetServerCertificateConfig">resetServerCertificateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetServiceType">resetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetValidationCertificateArn">resetValidationCertificateArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorizerConfig` <a name="putAuthorizerConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig"></a>

```java
public void putAuthorizerConfig(IotDomainConfigurationAuthorizerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---

##### `putClientCertificateConfig` <a name="putClientCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putClientCertificateConfig"></a>

```java
public void putClientCertificateConfig(IotDomainConfigurationClientCertificateConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putClientCertificateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig">IotDomainConfigurationClientCertificateConfig</a>

---

##### `putServerCertificateConfig` <a name="putServerCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putServerCertificateConfig"></a>

```java
public void putServerCertificateConfig(IotDomainConfigurationServerCertificateConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putServerCertificateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig">IotDomainConfigurationServerCertificateConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotDomainConfigurationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig"></a>

```java
public void putTlsConfig(IotDomainConfigurationTlsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---

##### `resetApplicationProtocol` <a name="resetApplicationProtocol" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetApplicationProtocol"></a>

```java
public void resetApplicationProtocol()
```

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetAuthenticationType"></a>

```java
public void resetAuthenticationType()
```

##### `resetAuthorizerConfig` <a name="resetAuthorizerConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetAuthorizerConfig"></a>

```java
public void resetAuthorizerConfig()
```

##### `resetClientCertificateConfig` <a name="resetClientCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetClientCertificateConfig"></a>

```java
public void resetClientCertificateConfig()
```

##### `resetDomainConfigurationName` <a name="resetDomainConfigurationName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetDomainConfigurationName"></a>

```java
public void resetDomainConfigurationName()
```

##### `resetDomainConfigurationStatus` <a name="resetDomainConfigurationStatus" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetDomainConfigurationStatus"></a>

```java
public void resetDomainConfigurationStatus()
```

##### `resetDomainName` <a name="resetDomainName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetDomainName"></a>

```java
public void resetDomainName()
```

##### `resetServerCertificateArns` <a name="resetServerCertificateArns" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetServerCertificateArns"></a>

```java
public void resetServerCertificateArns()
```

##### `resetServerCertificateConfig` <a name="resetServerCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetServerCertificateConfig"></a>

```java
public void resetServerCertificateConfig()
```

##### `resetServiceType` <a name="resetServiceType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetServiceType"></a>

```java
public void resetServiceType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetTlsConfig"></a>

```java
public void resetTlsConfig()
```

##### `resetValidationCertificateArn` <a name="resetValidationCertificateArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetValidationCertificateArn"></a>

```java
public void resetValidationCertificateArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotDomainConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfiguration;

IotDomainConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfiguration;

IotDomainConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfiguration;

IotDomainConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfiguration;

IotDomainConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotDomainConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotDomainConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotDomainConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotDomainConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotDomainConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfig">authorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference">IotDomainConfigurationAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.clientCertificateConfig">clientCertificateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference">IotDomainConfigurationClientCertificateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainType">domainType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateConfig">serverCertificateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference">IotDomainConfigurationServerCertificateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificates">serverCertificates</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList">IotDomainConfigurationServerCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList">IotDomainConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference">IotDomainConfigurationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.applicationProtocolInput">applicationProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfigInput">authorizerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.clientCertificateConfigInput">clientCertificateConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig">IotDomainConfigurationClientCertificateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainConfigurationNameInput">domainConfigurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainConfigurationStatusInput">domainConfigurationStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArnsInput">serverCertificateArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateConfigInput">serverCertificateConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig">IotDomainConfigurationServerCertificateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serviceTypeInput">serviceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfigInput">tlsConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArnInput">validationCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.applicationProtocol">applicationProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainConfigurationName">domainConfigurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainConfigurationStatus">domainConfigurationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArns">serverCertificateArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArn">validationCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `authorizerConfig`<sup>Required</sup> <a name="authorizerConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfig"></a>

```java
public IotDomainConfigurationAuthorizerConfigOutputReference getAuthorizerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference">IotDomainConfigurationAuthorizerConfigOutputReference</a>

---

##### `clientCertificateConfig`<sup>Required</sup> <a name="clientCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.clientCertificateConfig"></a>

```java
public IotDomainConfigurationClientCertificateConfigOutputReference getClientCertificateConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference">IotDomainConfigurationClientCertificateConfigOutputReference</a>

---

##### `domainType`<sup>Required</sup> <a name="domainType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainType"></a>

```java
public java.lang.String getDomainType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serverCertificateConfig`<sup>Required</sup> <a name="serverCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateConfig"></a>

```java
public IotDomainConfigurationServerCertificateConfigOutputReference getServerCertificateConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference">IotDomainConfigurationServerCertificateConfigOutputReference</a>

---

##### `serverCertificates`<sup>Required</sup> <a name="serverCertificates" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificates"></a>

```java
public IotDomainConfigurationServerCertificatesList getServerCertificates();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList">IotDomainConfigurationServerCertificatesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tags"></a>

```java
public IotDomainConfigurationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList">IotDomainConfigurationTagsList</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfig"></a>

```java
public IotDomainConfigurationTlsConfigOutputReference getTlsConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference">IotDomainConfigurationTlsConfigOutputReference</a>

---

##### `applicationProtocolInput`<sup>Optional</sup> <a name="applicationProtocolInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.applicationProtocolInput"></a>

```java
public java.lang.String getApplicationProtocolInput();
```

- *Type:* java.lang.String

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `authorizerConfigInput`<sup>Optional</sup> <a name="authorizerConfigInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfigInput"></a>

```java
public IResolvable|IotDomainConfigurationAuthorizerConfig getAuthorizerConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---

##### `clientCertificateConfigInput`<sup>Optional</sup> <a name="clientCertificateConfigInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.clientCertificateConfigInput"></a>

```java
public IResolvable|IotDomainConfigurationClientCertificateConfig getClientCertificateConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig">IotDomainConfigurationClientCertificateConfig</a>

---

##### `domainConfigurationNameInput`<sup>Optional</sup> <a name="domainConfigurationNameInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainConfigurationNameInput"></a>

```java
public java.lang.String getDomainConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `domainConfigurationStatusInput`<sup>Optional</sup> <a name="domainConfigurationStatusInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainConfigurationStatusInput"></a>

```java
public java.lang.String getDomainConfigurationStatusInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `serverCertificateArnsInput`<sup>Optional</sup> <a name="serverCertificateArnsInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArnsInput"></a>

```java
public java.util.List<java.lang.String> getServerCertificateArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverCertificateConfigInput`<sup>Optional</sup> <a name="serverCertificateConfigInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateConfigInput"></a>

```java
public IResolvable|IotDomainConfigurationServerCertificateConfig getServerCertificateConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig">IotDomainConfigurationServerCertificateConfig</a>

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serviceTypeInput"></a>

```java
public java.lang.String getServiceTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotDomainConfigurationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>>

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfigInput"></a>

```java
public IResolvable|IotDomainConfigurationTlsConfig getTlsConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---

##### `validationCertificateArnInput`<sup>Optional</sup> <a name="validationCertificateArnInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArnInput"></a>

```java
public java.lang.String getValidationCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `applicationProtocol`<sup>Required</sup> <a name="applicationProtocol" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.applicationProtocol"></a>

```java
public java.lang.String getApplicationProtocol();
```

- *Type:* java.lang.String

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `domainConfigurationName`<sup>Required</sup> <a name="domainConfigurationName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainConfigurationName"></a>

```java
public java.lang.String getDomainConfigurationName();
```

- *Type:* java.lang.String

---

##### `domainConfigurationStatus`<sup>Required</sup> <a name="domainConfigurationStatus" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainConfigurationStatus"></a>

```java
public java.lang.String getDomainConfigurationStatus();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `serverCertificateArns`<sup>Required</sup> <a name="serverCertificateArns" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArns"></a>

```java
public java.util.List<java.lang.String> getServerCertificateArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `validationCertificateArn`<sup>Required</sup> <a name="validationCertificateArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArn"></a>

```java
public java.lang.String getValidationCertificateArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotDomainConfigurationAuthorizerConfig <a name="IotDomainConfigurationAuthorizerConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfigurationAuthorizerConfig;

IotDomainConfigurationAuthorizerConfig.builder()
//  .allowAuthorizerOverride(java.lang.Boolean|IResolvable)
//  .defaultAuthorizerName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.allowAuthorizerOverride">allowAuthorizerOverride</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.defaultAuthorizerName">defaultAuthorizerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#default_authorizer_name IotDomainConfiguration#default_authorizer_name}. |

---

##### `allowAuthorizerOverride`<sup>Optional</sup> <a name="allowAuthorizerOverride" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.allowAuthorizerOverride"></a>

```java
public java.lang.Boolean|IResolvable getAllowAuthorizerOverride();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}.

---

##### `defaultAuthorizerName`<sup>Optional</sup> <a name="defaultAuthorizerName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.defaultAuthorizerName"></a>

```java
public java.lang.String getDefaultAuthorizerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#default_authorizer_name IotDomainConfiguration#default_authorizer_name}.

---

### IotDomainConfigurationClientCertificateConfig <a name="IotDomainConfigurationClientCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfigurationClientCertificateConfig;

IotDomainConfigurationClientCertificateConfig.builder()
//  .clientCertificateCallbackArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig.property.clientCertificateCallbackArn">clientCertificateCallbackArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#client_certificate_callback_arn IotDomainConfiguration#client_certificate_callback_arn}. |

---

##### `clientCertificateCallbackArn`<sup>Optional</sup> <a name="clientCertificateCallbackArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig.property.clientCertificateCallbackArn"></a>

```java
public java.lang.String getClientCertificateCallbackArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#client_certificate_callback_arn IotDomainConfiguration#client_certificate_callback_arn}.

---

### IotDomainConfigurationConfig <a name="IotDomainConfigurationConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfigurationConfig;

IotDomainConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .applicationProtocol(java.lang.String)
//  .authenticationType(java.lang.String)
//  .authorizerConfig(IotDomainConfigurationAuthorizerConfig)
//  .clientCertificateConfig(IotDomainConfigurationClientCertificateConfig)
//  .domainConfigurationName(java.lang.String)
//  .domainConfigurationStatus(java.lang.String)
//  .domainName(java.lang.String)
//  .serverCertificateArns(java.util.List<java.lang.String>)
//  .serverCertificateConfig(IotDomainConfigurationServerCertificateConfig)
//  .serviceType(java.lang.String)
//  .tags(IResolvable|java.util.List<IotDomainConfigurationTags>)
//  .tlsConfig(IotDomainConfigurationTlsConfig)
//  .validationCertificateArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.applicationProtocol">applicationProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#application_protocol IotDomainConfiguration#application_protocol}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#authentication_type IotDomainConfiguration#authentication_type}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.authorizerConfig">authorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#authorizer_config IotDomainConfiguration#authorizer_config}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.clientCertificateConfig">clientCertificateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig">IotDomainConfigurationClientCertificateConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#client_certificate_config IotDomainConfiguration#client_certificate_config}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainConfigurationName">domainConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#domain_configuration_name IotDomainConfiguration#domain_configuration_name}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainConfigurationStatus">domainConfigurationStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#domain_configuration_status IotDomainConfiguration#domain_configuration_status}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.serverCertificateArns">serverCertificateArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.serverCertificateConfig">serverCertificateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig">IotDomainConfigurationServerCertificateConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#server_certificate_config IotDomainConfiguration#server_certificate_config}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#tls_config IotDomainConfiguration#tls_config}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.validationCertificateArn">validationCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationProtocol`<sup>Optional</sup> <a name="applicationProtocol" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.applicationProtocol"></a>

```java
public java.lang.String getApplicationProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#application_protocol IotDomainConfiguration#application_protocol}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#authentication_type IotDomainConfiguration#authentication_type}.

---

##### `authorizerConfig`<sup>Optional</sup> <a name="authorizerConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.authorizerConfig"></a>

```java
public IotDomainConfigurationAuthorizerConfig getAuthorizerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#authorizer_config IotDomainConfiguration#authorizer_config}.

---

##### `clientCertificateConfig`<sup>Optional</sup> <a name="clientCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.clientCertificateConfig"></a>

```java
public IotDomainConfigurationClientCertificateConfig getClientCertificateConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig">IotDomainConfigurationClientCertificateConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#client_certificate_config IotDomainConfiguration#client_certificate_config}.

---

##### `domainConfigurationName`<sup>Optional</sup> <a name="domainConfigurationName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainConfigurationName"></a>

```java
public java.lang.String getDomainConfigurationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#domain_configuration_name IotDomainConfiguration#domain_configuration_name}.

---

##### `domainConfigurationStatus`<sup>Optional</sup> <a name="domainConfigurationStatus" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainConfigurationStatus"></a>

```java
public java.lang.String getDomainConfigurationStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#domain_configuration_status IotDomainConfiguration#domain_configuration_status}.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}.

---

##### `serverCertificateArns`<sup>Optional</sup> <a name="serverCertificateArns" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.serverCertificateArns"></a>

```java
public java.util.List<java.lang.String> getServerCertificateArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}.

---

##### `serverCertificateConfig`<sup>Optional</sup> <a name="serverCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.serverCertificateConfig"></a>

```java
public IotDomainConfigurationServerCertificateConfig getServerCertificateConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig">IotDomainConfigurationServerCertificateConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#server_certificate_config IotDomainConfiguration#server_certificate_config}.

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotDomainConfigurationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}.

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.tlsConfig"></a>

```java
public IotDomainConfigurationTlsConfig getTlsConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#tls_config IotDomainConfiguration#tls_config}.

---

##### `validationCertificateArn`<sup>Optional</sup> <a name="validationCertificateArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.validationCertificateArn"></a>

```java
public java.lang.String getValidationCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}.

---

### IotDomainConfigurationServerCertificateConfig <a name="IotDomainConfigurationServerCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfigurationServerCertificateConfig;

IotDomainConfigurationServerCertificateConfig.builder()
//  .enableOcspCheck(java.lang.Boolean|IResolvable)
//  .ocspAuthorizedResponderArn(java.lang.String)
//  .ocspLambdaArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig.property.enableOcspCheck">enableOcspCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#enable_ocsp_check IotDomainConfiguration#enable_ocsp_check}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig.property.ocspAuthorizedResponderArn">ocspAuthorizedResponderArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#ocsp_authorized_responder_arn IotDomainConfiguration#ocsp_authorized_responder_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig.property.ocspLambdaArn">ocspLambdaArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#ocsp_lambda_arn IotDomainConfiguration#ocsp_lambda_arn}. |

---

##### `enableOcspCheck`<sup>Optional</sup> <a name="enableOcspCheck" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig.property.enableOcspCheck"></a>

```java
public java.lang.Boolean|IResolvable getEnableOcspCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#enable_ocsp_check IotDomainConfiguration#enable_ocsp_check}.

---

##### `ocspAuthorizedResponderArn`<sup>Optional</sup> <a name="ocspAuthorizedResponderArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig.property.ocspAuthorizedResponderArn"></a>

```java
public java.lang.String getOcspAuthorizedResponderArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#ocsp_authorized_responder_arn IotDomainConfiguration#ocsp_authorized_responder_arn}.

---

##### `ocspLambdaArn`<sup>Optional</sup> <a name="ocspLambdaArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig.property.ocspLambdaArn"></a>

```java
public java.lang.String getOcspLambdaArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#ocsp_lambda_arn IotDomainConfiguration#ocsp_lambda_arn}.

---

### IotDomainConfigurationServerCertificates <a name="IotDomainConfigurationServerCertificates" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificates.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfigurationServerCertificates;

IotDomainConfigurationServerCertificates.builder()
    .build();
```


### IotDomainConfigurationTags <a name="IotDomainConfigurationTags" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfigurationTags;

IotDomainConfigurationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#key IotDomainConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#value IotDomainConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#key IotDomainConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#value IotDomainConfiguration#value}.

---

### IotDomainConfigurationTlsConfig <a name="IotDomainConfigurationTlsConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfigurationTlsConfig;

IotDomainConfigurationTlsConfig.builder()
//  .securityPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#security_policy IotDomainConfiguration#security_policy}. |

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_domain_configuration#security_policy IotDomainConfiguration#security_policy}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotDomainConfigurationAuthorizerConfigOutputReference <a name="IotDomainConfigurationAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfigurationAuthorizerConfigOutputReference;

new IotDomainConfigurationAuthorizerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetAllowAuthorizerOverride">resetAllowAuthorizerOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetDefaultAuthorizerName">resetDefaultAuthorizerName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAuthorizerOverride` <a name="resetAllowAuthorizerOverride" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetAllowAuthorizerOverride"></a>

```java
public void resetAllowAuthorizerOverride()
```

##### `resetDefaultAuthorizerName` <a name="resetDefaultAuthorizerName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetDefaultAuthorizerName"></a>

```java
public void resetDefaultAuthorizerName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverrideInput">allowAuthorizerOverrideInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerNameInput">defaultAuthorizerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverride">allowAuthorizerOverride</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerName">defaultAuthorizerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowAuthorizerOverrideInput`<sup>Optional</sup> <a name="allowAuthorizerOverrideInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverrideInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowAuthorizerOverrideInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `defaultAuthorizerNameInput`<sup>Optional</sup> <a name="defaultAuthorizerNameInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerNameInput"></a>

```java
public java.lang.String getDefaultAuthorizerNameInput();
```

- *Type:* java.lang.String

---

##### `allowAuthorizerOverride`<sup>Required</sup> <a name="allowAuthorizerOverride" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverride"></a>

```java
public java.lang.Boolean|IResolvable getAllowAuthorizerOverride();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `defaultAuthorizerName`<sup>Required</sup> <a name="defaultAuthorizerName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerName"></a>

```java
public java.lang.String getDefaultAuthorizerName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotDomainConfigurationAuthorizerConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---


### IotDomainConfigurationClientCertificateConfigOutputReference <a name="IotDomainConfigurationClientCertificateConfigOutputReference" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfigurationClientCertificateConfigOutputReference;

new IotDomainConfigurationClientCertificateConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.resetClientCertificateCallbackArn">resetClientCertificateCallbackArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientCertificateCallbackArn` <a name="resetClientCertificateCallbackArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.resetClientCertificateCallbackArn"></a>

```java
public void resetClientCertificateCallbackArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.clientCertificateCallbackArnInput">clientCertificateCallbackArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.clientCertificateCallbackArn">clientCertificateCallbackArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig">IotDomainConfigurationClientCertificateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientCertificateCallbackArnInput`<sup>Optional</sup> <a name="clientCertificateCallbackArnInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.clientCertificateCallbackArnInput"></a>

```java
public java.lang.String getClientCertificateCallbackArnInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateCallbackArn`<sup>Required</sup> <a name="clientCertificateCallbackArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.clientCertificateCallbackArn"></a>

```java
public java.lang.String getClientCertificateCallbackArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotDomainConfigurationClientCertificateConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig">IotDomainConfigurationClientCertificateConfig</a>

---


### IotDomainConfigurationServerCertificateConfigOutputReference <a name="IotDomainConfigurationServerCertificateConfigOutputReference" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfigurationServerCertificateConfigOutputReference;

new IotDomainConfigurationServerCertificateConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resetEnableOcspCheck">resetEnableOcspCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resetOcspAuthorizedResponderArn">resetOcspAuthorizedResponderArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resetOcspLambdaArn">resetOcspLambdaArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableOcspCheck` <a name="resetEnableOcspCheck" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resetEnableOcspCheck"></a>

```java
public void resetEnableOcspCheck()
```

##### `resetOcspAuthorizedResponderArn` <a name="resetOcspAuthorizedResponderArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resetOcspAuthorizedResponderArn"></a>

```java
public void resetOcspAuthorizedResponderArn()
```

##### `resetOcspLambdaArn` <a name="resetOcspLambdaArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resetOcspLambdaArn"></a>

```java
public void resetOcspLambdaArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.enableOcspCheckInput">enableOcspCheckInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.ocspAuthorizedResponderArnInput">ocspAuthorizedResponderArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.ocspLambdaArnInput">ocspLambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.enableOcspCheck">enableOcspCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.ocspAuthorizedResponderArn">ocspAuthorizedResponderArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.ocspLambdaArn">ocspLambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig">IotDomainConfigurationServerCertificateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableOcspCheckInput`<sup>Optional</sup> <a name="enableOcspCheckInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.enableOcspCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableOcspCheckInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ocspAuthorizedResponderArnInput`<sup>Optional</sup> <a name="ocspAuthorizedResponderArnInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.ocspAuthorizedResponderArnInput"></a>

```java
public java.lang.String getOcspAuthorizedResponderArnInput();
```

- *Type:* java.lang.String

---

##### `ocspLambdaArnInput`<sup>Optional</sup> <a name="ocspLambdaArnInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.ocspLambdaArnInput"></a>

```java
public java.lang.String getOcspLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `enableOcspCheck`<sup>Required</sup> <a name="enableOcspCheck" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.enableOcspCheck"></a>

```java
public java.lang.Boolean|IResolvable getEnableOcspCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ocspAuthorizedResponderArn`<sup>Required</sup> <a name="ocspAuthorizedResponderArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.ocspAuthorizedResponderArn"></a>

```java
public java.lang.String getOcspAuthorizedResponderArn();
```

- *Type:* java.lang.String

---

##### `ocspLambdaArn`<sup>Required</sup> <a name="ocspLambdaArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.ocspLambdaArn"></a>

```java
public java.lang.String getOcspLambdaArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotDomainConfigurationServerCertificateConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig">IotDomainConfigurationServerCertificateConfig</a>

---


### IotDomainConfigurationServerCertificatesList <a name="IotDomainConfigurationServerCertificatesList" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfigurationServerCertificatesList;

new IotDomainConfigurationServerCertificatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.get"></a>

```java
public IotDomainConfigurationServerCertificatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IotDomainConfigurationServerCertificatesOutputReference <a name="IotDomainConfigurationServerCertificatesOutputReference" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfigurationServerCertificatesOutputReference;

new IotDomainConfigurationServerCertificatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateArn">serverCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateStatus">serverCertificateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateStatusDetail">serverCertificateStatusDetail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificates">IotDomainConfigurationServerCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serverCertificateArn`<sup>Required</sup> <a name="serverCertificateArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateArn"></a>

```java
public java.lang.String getServerCertificateArn();
```

- *Type:* java.lang.String

---

##### `serverCertificateStatus`<sup>Required</sup> <a name="serverCertificateStatus" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateStatus"></a>

```java
public java.lang.String getServerCertificateStatus();
```

- *Type:* java.lang.String

---

##### `serverCertificateStatusDetail`<sup>Required</sup> <a name="serverCertificateStatusDetail" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateStatusDetail"></a>

```java
public java.lang.String getServerCertificateStatusDetail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.internalValue"></a>

```java
public IotDomainConfigurationServerCertificates getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificates">IotDomainConfigurationServerCertificates</a>

---


### IotDomainConfigurationTagsList <a name="IotDomainConfigurationTagsList" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfigurationTagsList;

new IotDomainConfigurationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.get"></a>

```java
public IotDomainConfigurationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotDomainConfigurationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>>

---


### IotDomainConfigurationTagsOutputReference <a name="IotDomainConfigurationTagsOutputReference" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfigurationTagsOutputReference;

new IotDomainConfigurationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotDomainConfigurationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>

---


### IotDomainConfigurationTlsConfigOutputReference <a name="IotDomainConfigurationTlsConfigOutputReference" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_domain_configuration.IotDomainConfigurationTlsConfigOutputReference;

new IotDomainConfigurationTlsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resetSecurityPolicy"></a>

```java
public void resetSecurityPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicyInput">securityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicyInput"></a>

```java
public java.lang.String getSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotDomainConfigurationTlsConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---



