# `bedrockagentcoreBrowserCustom` Submodule <a name="`bedrockagentcoreBrowserCustom` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreBrowserCustom <a name="BedrockagentcoreBrowserCustom" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom awscc_bedrockagentcore_browser_custom}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustom;

BedrockagentcoreBrowserCustom.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .networkConfiguration(BedrockagentcoreBrowserCustomNetworkConfiguration)
//  .browserSigning(BedrockagentcoreBrowserCustomBrowserSigning)
//  .certificates(IResolvable|java.util.List<BedrockagentcoreBrowserCustomCertificates>)
//  .description(java.lang.String)
//  .enterprisePolicies(IResolvable|java.util.List<BedrockagentcoreBrowserCustomEnterprisePolicies>)
//  .executionRoleArn(java.lang.String)
//  .recordingConfig(BedrockagentcoreBrowserCustomRecordingConfig)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a></code> | Network configuration for browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.browserSigning">browserSigning</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a></code> | Browser signing configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.certificates">certificates</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>></code> | List of root CA certificates in PEM format. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.enterprisePolicies">enterprisePolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>></code> | A list of enterprise policy files for the browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role that the browser uses to access resources. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.recordingConfig">recordingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a></code> | Recording configuration for browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of tag keys and values. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#name BedrockagentcoreBrowserCustom#name}

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a>

Network configuration for browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#network_configuration BedrockagentcoreBrowserCustom#network_configuration}

---

##### `browserSigning`<sup>Optional</sup> <a name="browserSigning" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.browserSigning"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a>

Browser signing configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#browser_signing BedrockagentcoreBrowserCustom#browser_signing}

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.certificates"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>>

List of root CA certificates in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#certificates BedrockagentcoreBrowserCustom#certificates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#description BedrockagentcoreBrowserCustom#description}

---

##### `enterprisePolicies`<sup>Optional</sup> <a name="enterprisePolicies" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.enterprisePolicies"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>>

A list of enterprise policy files for the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#enterprise_policies BedrockagentcoreBrowserCustom#enterprise_policies}

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.executionRoleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role that the browser uses to access resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#execution_role_arn BedrockagentcoreBrowserCustom#execution_role_arn}

---

##### `recordingConfig`<sup>Optional</sup> <a name="recordingConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.recordingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a>

Recording configuration for browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#recording_config BedrockagentcoreBrowserCustom#recording_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#tags BedrockagentcoreBrowserCustom#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putBrowserSigning">putBrowserSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putCertificates">putCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putEnterprisePolicies">putEnterprisePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putRecordingConfig">putRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetBrowserSigning">resetBrowserSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetCertificates">resetCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetEnterprisePolicies">resetEnterprisePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetRecordingConfig">resetRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBrowserSigning` <a name="putBrowserSigning" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putBrowserSigning"></a>

```java
public void putBrowserSigning(BedrockagentcoreBrowserCustomBrowserSigning value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putBrowserSigning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a>

---

##### `putCertificates` <a name="putCertificates" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putCertificates"></a>

```java
public void putCertificates(IResolvable|java.util.List<BedrockagentcoreBrowserCustomCertificates> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putCertificates.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>>

---

##### `putEnterprisePolicies` <a name="putEnterprisePolicies" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putEnterprisePolicies"></a>

```java
public void putEnterprisePolicies(IResolvable|java.util.List<BedrockagentcoreBrowserCustomEnterprisePolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putEnterprisePolicies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(BedrockagentcoreBrowserCustomNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a>

---

##### `putRecordingConfig` <a name="putRecordingConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putRecordingConfig"></a>

```java
public void putRecordingConfig(BedrockagentcoreBrowserCustomRecordingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putRecordingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a>

---

##### `resetBrowserSigning` <a name="resetBrowserSigning" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetBrowserSigning"></a>

```java
public void resetBrowserSigning()
```

##### `resetCertificates` <a name="resetCertificates" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetCertificates"></a>

```java
public void resetCertificates()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnterprisePolicies` <a name="resetEnterprisePolicies" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetEnterprisePolicies"></a>

```java
public void resetEnterprisePolicies()
```

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetExecutionRoleArn"></a>

```java
public void resetExecutionRoleArn()
```

##### `resetRecordingConfig` <a name="resetRecordingConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetRecordingConfig"></a>

```java
public void resetRecordingConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreBrowserCustom resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustom;

BedrockagentcoreBrowserCustom.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustom;

BedrockagentcoreBrowserCustom.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustom;

BedrockagentcoreBrowserCustom.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustom;

BedrockagentcoreBrowserCustom.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcoreBrowserCustom.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockagentcoreBrowserCustom resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcoreBrowserCustom to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcoreBrowserCustom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreBrowserCustom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserArn">browserArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserId">browserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserSigning">browserSigning</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference">BedrockagentcoreBrowserCustomBrowserSigningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.certificates">certificates</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList">BedrockagentcoreBrowserCustomCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.enterprisePolicies">enterprisePolicies</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList">BedrockagentcoreBrowserCustomEnterprisePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.failureReason">failureReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference">BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.recordingConfig">recordingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference">BedrockagentcoreBrowserCustomRecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserSigningInput">browserSigningInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.certificatesInput">certificatesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.enterprisePoliciesInput">enterprisePoliciesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.recordingConfigInput">recordingConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `browserArn`<sup>Required</sup> <a name="browserArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserArn"></a>

```java
public java.lang.String getBrowserArn();
```

- *Type:* java.lang.String

---

##### `browserId`<sup>Required</sup> <a name="browserId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserId"></a>

```java
public java.lang.String getBrowserId();
```

- *Type:* java.lang.String

---

##### `browserSigning`<sup>Required</sup> <a name="browserSigning" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserSigning"></a>

```java
public BedrockagentcoreBrowserCustomBrowserSigningOutputReference getBrowserSigning();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference">BedrockagentcoreBrowserCustomBrowserSigningOutputReference</a>

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.certificates"></a>

```java
public BedrockagentcoreBrowserCustomCertificatesList getCertificates();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList">BedrockagentcoreBrowserCustomCertificatesList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `enterprisePolicies`<sup>Required</sup> <a name="enterprisePolicies" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.enterprisePolicies"></a>

```java
public BedrockagentcoreBrowserCustomEnterprisePoliciesList getEnterprisePolicies();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList">BedrockagentcoreBrowserCustomEnterprisePoliciesList</a>

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.failureReason"></a>

```java
public java.lang.String getFailureReason();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.networkConfiguration"></a>

```java
public BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference">BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference</a>

---

##### `recordingConfig`<sup>Required</sup> <a name="recordingConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.recordingConfig"></a>

```java
public BedrockagentcoreBrowserCustomRecordingConfigOutputReference getRecordingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference">BedrockagentcoreBrowserCustomRecordingConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `browserSigningInput`<sup>Optional</sup> <a name="browserSigningInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserSigningInput"></a>

```java
public IResolvable|BedrockagentcoreBrowserCustomBrowserSigning getBrowserSigningInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a>

---

##### `certificatesInput`<sup>Optional</sup> <a name="certificatesInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.certificatesInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreBrowserCustomCertificates> getCertificatesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enterprisePoliciesInput`<sup>Optional</sup> <a name="enterprisePoliciesInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.enterprisePoliciesInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreBrowserCustomEnterprisePolicies> getEnterprisePoliciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>>

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.networkConfigurationInput"></a>

```java
public IResolvable|BedrockagentcoreBrowserCustomNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a>

---

##### `recordingConfigInput`<sup>Optional</sup> <a name="recordingConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.recordingConfigInput"></a>

```java
public IResolvable|BedrockagentcoreBrowserCustomRecordingConfig getRecordingConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreBrowserCustomBrowserSigning <a name="BedrockagentcoreBrowserCustomBrowserSigning" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomBrowserSigning;

BedrockagentcoreBrowserCustomBrowserSigning.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#enabled BedrockagentcoreBrowserCustom#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#enabled BedrockagentcoreBrowserCustom#enabled}.

---

### BedrockagentcoreBrowserCustomCertificates <a name="BedrockagentcoreBrowserCustomCertificates" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomCertificates;

BedrockagentcoreBrowserCustomCertificates.builder()
//  .certificateLocation(BedrockagentcoreBrowserCustomCertificatesCertificateLocation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates.property.certificateLocation">certificateLocation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a></code> | Certificate location in Secrets Manager. |

---

##### `certificateLocation`<sup>Optional</sup> <a name="certificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates.property.certificateLocation"></a>

```java
public BedrockagentcoreBrowserCustomCertificatesCertificateLocation getCertificateLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a>

Certificate location in Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#certificate_location BedrockagentcoreBrowserCustom#certificate_location}

---

### BedrockagentcoreBrowserCustomCertificatesCertificateLocation <a name="BedrockagentcoreBrowserCustomCertificatesCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation;

BedrockagentcoreBrowserCustomCertificatesCertificateLocation.builder()
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | Secrets Manager secret ARN. |

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

Secrets Manager secret ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#secret_arn BedrockagentcoreBrowserCustom#secret_arn}

---

### BedrockagentcoreBrowserCustomConfig <a name="BedrockagentcoreBrowserCustomConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomConfig;

BedrockagentcoreBrowserCustomConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .networkConfiguration(BedrockagentcoreBrowserCustomNetworkConfiguration)
//  .browserSigning(BedrockagentcoreBrowserCustomBrowserSigning)
//  .certificates(IResolvable|java.util.List<BedrockagentcoreBrowserCustomCertificates>)
//  .description(java.lang.String)
//  .enterprisePolicies(IResolvable|java.util.List<BedrockagentcoreBrowserCustomEnterprisePolicies>)
//  .executionRoleArn(java.lang.String)
//  .recordingConfig(BedrockagentcoreBrowserCustomRecordingConfig)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a></code> | Network configuration for browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.browserSigning">browserSigning</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a></code> | Browser signing configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.certificates">certificates</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>></code> | List of root CA certificates in PEM format. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.enterprisePolicies">enterprisePolicies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>></code> | A list of enterprise policy files for the browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role that the browser uses to access resources. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.recordingConfig">recordingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a></code> | Recording configuration for browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of tag keys and values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#name BedrockagentcoreBrowserCustom#name}

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.networkConfiguration"></a>

```java
public BedrockagentcoreBrowserCustomNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a>

Network configuration for browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#network_configuration BedrockagentcoreBrowserCustom#network_configuration}

---

##### `browserSigning`<sup>Optional</sup> <a name="browserSigning" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.browserSigning"></a>

```java
public BedrockagentcoreBrowserCustomBrowserSigning getBrowserSigning();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a>

Browser signing configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#browser_signing BedrockagentcoreBrowserCustom#browser_signing}

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.certificates"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreBrowserCustomCertificates> getCertificates();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>>

List of root CA certificates in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#certificates BedrockagentcoreBrowserCustom#certificates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#description BedrockagentcoreBrowserCustom#description}

---

##### `enterprisePolicies`<sup>Optional</sup> <a name="enterprisePolicies" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.enterprisePolicies"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreBrowserCustomEnterprisePolicies> getEnterprisePolicies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>>

A list of enterprise policy files for the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#enterprise_policies BedrockagentcoreBrowserCustom#enterprise_policies}

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role that the browser uses to access resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#execution_role_arn BedrockagentcoreBrowserCustom#execution_role_arn}

---

##### `recordingConfig`<sup>Optional</sup> <a name="recordingConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.recordingConfig"></a>

```java
public BedrockagentcoreBrowserCustomRecordingConfig getRecordingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a>

Recording configuration for browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#recording_config BedrockagentcoreBrowserCustom#recording_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#tags BedrockagentcoreBrowserCustom#tags}

---

### BedrockagentcoreBrowserCustomEnterprisePolicies <a name="BedrockagentcoreBrowserCustomEnterprisePolicies" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomEnterprisePolicies;

BedrockagentcoreBrowserCustomEnterprisePolicies.builder()
//  .location(BedrockagentcoreBrowserCustomEnterprisePoliciesLocation)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a></code> | The S3 location of the enterprise policy file. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies.property.type">type</a></code> | <code>java.lang.String</code> | The type of browser enterprise policy. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies.property.location"></a>

```java
public BedrockagentcoreBrowserCustomEnterprisePoliciesLocation getLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a>

The S3 location of the enterprise policy file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#location BedrockagentcoreBrowserCustom#location}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of browser enterprise policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#type BedrockagentcoreBrowserCustom#type}

---

### BedrockagentcoreBrowserCustomEnterprisePoliciesLocation <a name="BedrockagentcoreBrowserCustomEnterprisePoliciesLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation;

BedrockagentcoreBrowserCustomEnterprisePoliciesLocation.builder()
//  .bucket(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#bucket BedrockagentcoreBrowserCustom#bucket}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#prefix BedrockagentcoreBrowserCustom#prefix}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#bucket BedrockagentcoreBrowserCustom#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#prefix BedrockagentcoreBrowserCustom#prefix}.

---

### BedrockagentcoreBrowserCustomNetworkConfiguration <a name="BedrockagentcoreBrowserCustomNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomNetworkConfiguration;

BedrockagentcoreBrowserCustomNetworkConfiguration.builder()
//  .networkMode(java.lang.String)
//  .vpcConfig(BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration.property.networkMode">networkMode</a></code> | <code>java.lang.String</code> | Network modes supported by browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a></code> | Network mode configuration for VPC. |

---

##### `networkMode`<sup>Optional</sup> <a name="networkMode" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration.property.networkMode"></a>

```java
public java.lang.String getNetworkMode();
```

- *Type:* java.lang.String

Network modes supported by browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#network_mode BedrockagentcoreBrowserCustom#network_mode}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration.property.vpcConfig"></a>

```java
public BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a>

Network mode configuration for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#vpc_config BedrockagentcoreBrowserCustom#vpc_config}

---

### BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig <a name="BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig;

BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.builder()
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Security groups for VPC. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Subnets for VPC. |

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Security groups for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#security_groups BedrockagentcoreBrowserCustom#security_groups}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Subnets for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#subnets BedrockagentcoreBrowserCustom#subnets}

---

### BedrockagentcoreBrowserCustomRecordingConfig <a name="BedrockagentcoreBrowserCustomRecordingConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomRecordingConfig;

BedrockagentcoreBrowserCustomRecordingConfig.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .s3Location(BedrockagentcoreBrowserCustomRecordingConfigS3Location)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#enabled BedrockagentcoreBrowserCustom#enabled}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a></code> | S3 Location Configuration. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#enabled BedrockagentcoreBrowserCustom#enabled}.

---

##### `s3Location`<sup>Optional</sup> <a name="s3Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig.property.s3Location"></a>

```java
public BedrockagentcoreBrowserCustomRecordingConfigS3Location getS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a>

S3 Location Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#s3_location BedrockagentcoreBrowserCustom#s3_location}

---

### BedrockagentcoreBrowserCustomRecordingConfigS3Location <a name="BedrockagentcoreBrowserCustomRecordingConfigS3Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomRecordingConfigS3Location;

BedrockagentcoreBrowserCustomRecordingConfigS3Location.builder()
//  .bucket(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#bucket BedrockagentcoreBrowserCustom#bucket}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#prefix BedrockagentcoreBrowserCustom#prefix}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#bucket BedrockagentcoreBrowserCustom#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_browser_custom#prefix BedrockagentcoreBrowserCustom#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreBrowserCustomBrowserSigningOutputReference <a name="BedrockagentcoreBrowserCustomBrowserSigningOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference;

new BedrockagentcoreBrowserCustomBrowserSigningOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreBrowserCustomBrowserSigning getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a>

---


### BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference <a name="BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference;

new BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreBrowserCustomCertificatesCertificateLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a>

---


### BedrockagentcoreBrowserCustomCertificatesList <a name="BedrockagentcoreBrowserCustomCertificatesList" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomCertificatesList;

new BedrockagentcoreBrowserCustomCertificatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.get"></a>

```java
public BedrockagentcoreBrowserCustomCertificatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreBrowserCustomCertificates> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>>

---


### BedrockagentcoreBrowserCustomCertificatesOutputReference <a name="BedrockagentcoreBrowserCustomCertificatesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomCertificatesOutputReference;

new BedrockagentcoreBrowserCustomCertificatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.putCertificateLocation">putCertificateLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.resetCertificateLocation">resetCertificateLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificateLocation` <a name="putCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.putCertificateLocation"></a>

```java
public void putCertificateLocation(BedrockagentcoreBrowserCustomCertificatesCertificateLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.putCertificateLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a>

---

##### `resetCertificateLocation` <a name="resetCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.resetCertificateLocation"></a>

```java
public void resetCertificateLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.certificateLocation">certificateLocation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference">BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.certificateLocationInput">certificateLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateLocation`<sup>Required</sup> <a name="certificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.certificateLocation"></a>

```java
public BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference getCertificateLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference">BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference</a>

---

##### `certificateLocationInput`<sup>Optional</sup> <a name="certificateLocationInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.certificateLocationInput"></a>

```java
public IResolvable|BedrockagentcoreBrowserCustomCertificatesCertificateLocation getCertificateLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreBrowserCustomCertificates getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>

---


### BedrockagentcoreBrowserCustomEnterprisePoliciesList <a name="BedrockagentcoreBrowserCustomEnterprisePoliciesList" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomEnterprisePoliciesList;

new BedrockagentcoreBrowserCustomEnterprisePoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.get"></a>

```java
public BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreBrowserCustomEnterprisePolicies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>>

---


### BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference <a name="BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference;

new BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreBrowserCustomEnterprisePoliciesLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a>

---


### BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference <a name="BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference;

new BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocation` <a name="putLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.putLocation"></a>

```java
public void putLocation(BedrockagentcoreBrowserCustomEnterprisePoliciesLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a>

---

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference">BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.locationInput">locationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.location"></a>

```java
public BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference getLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference">BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.locationInput"></a>

```java
public IResolvable|BedrockagentcoreBrowserCustomEnterprisePoliciesLocation getLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreBrowserCustomEnterprisePolicies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>

---


### BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference <a name="BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference;

new BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resetNetworkMode">resetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.putVpcConfig"></a>

```java
public void putVpcConfig(BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a>

---

##### `resetNetworkMode` <a name="resetNetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resetNetworkMode"></a>

```java
public void resetNetworkMode()
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resetVpcConfig"></a>

```java
public void resetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.networkModeInput">networkModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.networkMode">networkMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.vpcConfig"></a>

```java
public BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference</a>

---

##### `networkModeInput`<sup>Optional</sup> <a name="networkModeInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.networkModeInput"></a>

```java
public java.lang.String getNetworkModeInput();
```

- *Type:* java.lang.String

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.vpcConfigInput"></a>

```java
public IResolvable|BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig getVpcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a>

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.networkMode"></a>

```java
public java.lang.String getNetworkMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreBrowserCustomNetworkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a>

---


### BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference <a name="BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference;

new BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a>

---


### BedrockagentcoreBrowserCustomRecordingConfigOutputReference <a name="BedrockagentcoreBrowserCustomRecordingConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference;

new BedrockagentcoreBrowserCustomRecordingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.putS3Location">putS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resetS3Location">resetS3Location</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Location` <a name="putS3Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.putS3Location"></a>

```java
public void putS3Location(BedrockagentcoreBrowserCustomRecordingConfigS3Location value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetS3Location` <a name="resetS3Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resetS3Location"></a>

```java
public void resetS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference">BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.s3LocationInput">s3LocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.s3Location"></a>

```java
public BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference getS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference">BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `s3LocationInput`<sup>Optional</sup> <a name="s3LocationInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.s3LocationInput"></a>

```java
public IResolvable|BedrockagentcoreBrowserCustomRecordingConfigS3Location getS3LocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreBrowserCustomRecordingConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a>

---


### BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference <a name="BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_browser_custom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference;

new BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreBrowserCustomRecordingConfigS3Location getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a>

---



