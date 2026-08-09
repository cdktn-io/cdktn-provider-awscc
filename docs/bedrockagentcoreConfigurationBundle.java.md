# `bedrockagentcoreConfigurationBundle` Submodule <a name="`bedrockagentcoreConfigurationBundle` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreConfigurationBundle <a name="BedrockagentcoreConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle awscc_bedrockagentcore_configuration_bundle}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundle;

BedrockagentcoreConfigurationBundle.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bundleName(java.lang.String)
    .components(IResolvable|java.util.Map<java.lang.String, BedrockagentcoreConfigurationBundleComponents>)
//  .branchName(java.lang.String)
//  .commitMessage(java.lang.String)
//  .createdBy(BedrockagentcoreConfigurationBundleCreatedBy)
//  .description(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .tags(IResolvable|java.util.List<BedrockagentcoreConfigurationBundleTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.bundleName">bundleName</a></code> | <code>java.lang.String</code> | The name for the configuration bundle. Names must be unique within your account. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.components">components</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>></code> | A map of component identifiers to their configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.branchName">branchName</a></code> | <code>java.lang.String</code> | The branch name for version tracking. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.commitMessage">commitMessage</a></code> | <code>java.lang.String</code> | A commit message describing the version of the configuration bundle. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.createdBy">createdBy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a></code> | The source that created a configuration bundle version. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description for the configuration bundle. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key used to encrypt component configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>></code> | Tags to assign to the configuration bundle. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bundleName`<sup>Required</sup> <a name="bundleName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.bundleName"></a>

- *Type:* java.lang.String

The name for the configuration bundle. Names must be unique within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#bundle_name BedrockagentcoreConfigurationBundle#bundle_name}

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.components"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>>

A map of component identifiers to their configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#components BedrockagentcoreConfigurationBundle#components}

---

##### `branchName`<sup>Optional</sup> <a name="branchName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.branchName"></a>

- *Type:* java.lang.String

The branch name for version tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#branch_name BedrockagentcoreConfigurationBundle#branch_name}

---

##### `commitMessage`<sup>Optional</sup> <a name="commitMessage" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.commitMessage"></a>

- *Type:* java.lang.String

A commit message describing the version of the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#commit_message BedrockagentcoreConfigurationBundle#commit_message}

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.createdBy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a>

The source that created a configuration bundle version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#created_by BedrockagentcoreConfigurationBundle#created_by}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description for the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#description BedrockagentcoreConfigurationBundle#description}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

The ARN of the KMS key used to encrypt component configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#kms_key_arn BedrockagentcoreConfigurationBundle#kms_key_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>>

Tags to assign to the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#tags BedrockagentcoreConfigurationBundle#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putComponents">putComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putCreatedBy">putCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetBranchName">resetBranchName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetCommitMessage">resetCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComponents` <a name="putComponents" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putComponents"></a>

```java
public void putComponents(IResolvable|java.util.Map<java.lang.String, BedrockagentcoreConfigurationBundleComponents> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putComponents.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>>

---

##### `putCreatedBy` <a name="putCreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putCreatedBy"></a>

```java
public void putCreatedBy(BedrockagentcoreConfigurationBundleCreatedBy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putCreatedBy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BedrockagentcoreConfigurationBundleTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>>

---

##### `resetBranchName` <a name="resetBranchName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetBranchName"></a>

```java
public void resetBranchName()
```

##### `resetCommitMessage` <a name="resetCommitMessage" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetCommitMessage"></a>

```java
public void resetCommitMessage()
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetCreatedBy"></a>

```java
public void resetCreatedBy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreConfigurationBundle resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundle;

BedrockagentcoreConfigurationBundle.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundle;

BedrockagentcoreConfigurationBundle.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundle;

BedrockagentcoreConfigurationBundle.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundle;

BedrockagentcoreConfigurationBundle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcoreConfigurationBundle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockagentcoreConfigurationBundle resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcoreConfigurationBundle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcoreConfigurationBundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreConfigurationBundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleArn">bundleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.components">components</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap">BedrockagentcoreConfigurationBundleComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdBy">createdBy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference">BedrockagentcoreConfigurationBundleCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.lineageMetadata">lineageMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference">BedrockagentcoreConfigurationBundleLineageMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList">BedrockagentcoreConfigurationBundleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.branchNameInput">branchNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleNameInput">bundleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.commitMessageInput">commitMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.componentsInput">componentsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdByInput">createdByInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.branchName">branchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleName">bundleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.commitMessage">commitMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bundleArn`<sup>Required</sup> <a name="bundleArn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleArn"></a>

```java
public java.lang.String getBundleArn();
```

- *Type:* java.lang.String

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.components"></a>

```java
public BedrockagentcoreConfigurationBundleComponentsMap getComponents();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap">BedrockagentcoreConfigurationBundleComponentsMap</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdBy"></a>

```java
public BedrockagentcoreConfigurationBundleCreatedByOutputReference getCreatedBy();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference">BedrockagentcoreConfigurationBundleCreatedByOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lineageMetadata`<sup>Required</sup> <a name="lineageMetadata" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.lineageMetadata"></a>

```java
public BedrockagentcoreConfigurationBundleLineageMetadataOutputReference getLineageMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference">BedrockagentcoreConfigurationBundleLineageMetadataOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tags"></a>

```java
public BedrockagentcoreConfigurationBundleTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList">BedrockagentcoreConfigurationBundleTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.branchNameInput"></a>

```java
public java.lang.String getBranchNameInput();
```

- *Type:* java.lang.String

---

##### `bundleNameInput`<sup>Optional</sup> <a name="bundleNameInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleNameInput"></a>

```java
public java.lang.String getBundleNameInput();
```

- *Type:* java.lang.String

---

##### `commitMessageInput`<sup>Optional</sup> <a name="commitMessageInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.commitMessageInput"></a>

```java
public java.lang.String getCommitMessageInput();
```

- *Type:* java.lang.String

---

##### `componentsInput`<sup>Optional</sup> <a name="componentsInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.componentsInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, BedrockagentcoreConfigurationBundleComponents> getComponentsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>>

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdByInput"></a>

```java
public IResolvable|BedrockagentcoreConfigurationBundleCreatedBy getCreatedByInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreConfigurationBundleTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>>

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

---

##### `bundleName`<sup>Required</sup> <a name="bundleName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleName"></a>

```java
public java.lang.String getBundleName();
```

- *Type:* java.lang.String

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.commitMessage"></a>

```java
public java.lang.String getCommitMessage();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreConfigurationBundleComponents <a name="BedrockagentcoreConfigurationBundleComponents" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundleComponents;

BedrockagentcoreConfigurationBundleComponents.builder()
//  .configuration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents.property.configuration">configuration</a></code> | <code>java.lang.String</code> | The configuration values as a flexible JSON document. |

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

The configuration values as a flexible JSON document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#configuration BedrockagentcoreConfigurationBundle#configuration}

---

### BedrockagentcoreConfigurationBundleConfig <a name="BedrockagentcoreConfigurationBundleConfig" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundleConfig;

BedrockagentcoreConfigurationBundleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bundleName(java.lang.String)
    .components(IResolvable|java.util.Map<java.lang.String, BedrockagentcoreConfigurationBundleComponents>)
//  .branchName(java.lang.String)
//  .commitMessage(java.lang.String)
//  .createdBy(BedrockagentcoreConfigurationBundleCreatedBy)
//  .description(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .tags(IResolvable|java.util.List<BedrockagentcoreConfigurationBundleTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.bundleName">bundleName</a></code> | <code>java.lang.String</code> | The name for the configuration bundle. Names must be unique within your account. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.components">components</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>></code> | A map of component identifiers to their configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.branchName">branchName</a></code> | <code>java.lang.String</code> | The branch name for version tracking. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.commitMessage">commitMessage</a></code> | <code>java.lang.String</code> | A commit message describing the version of the configuration bundle. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.createdBy">createdBy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a></code> | The source that created a configuration bundle version. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description for the configuration bundle. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key used to encrypt component configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>></code> | Tags to assign to the configuration bundle. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bundleName`<sup>Required</sup> <a name="bundleName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.bundleName"></a>

```java
public java.lang.String getBundleName();
```

- *Type:* java.lang.String

The name for the configuration bundle. Names must be unique within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#bundle_name BedrockagentcoreConfigurationBundle#bundle_name}

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.components"></a>

```java
public IResolvable|java.util.Map<java.lang.String, BedrockagentcoreConfigurationBundleComponents> getComponents();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>>

A map of component identifiers to their configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#components BedrockagentcoreConfigurationBundle#components}

---

##### `branchName`<sup>Optional</sup> <a name="branchName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

The branch name for version tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#branch_name BedrockagentcoreConfigurationBundle#branch_name}

---

##### `commitMessage`<sup>Optional</sup> <a name="commitMessage" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.commitMessage"></a>

```java
public java.lang.String getCommitMessage();
```

- *Type:* java.lang.String

A commit message describing the version of the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#commit_message BedrockagentcoreConfigurationBundle#commit_message}

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.createdBy"></a>

```java
public BedrockagentcoreConfigurationBundleCreatedBy getCreatedBy();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a>

The source that created a configuration bundle version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#created_by BedrockagentcoreConfigurationBundle#created_by}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description for the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#description BedrockagentcoreConfigurationBundle#description}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

The ARN of the KMS key used to encrypt component configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#kms_key_arn BedrockagentcoreConfigurationBundle#kms_key_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreConfigurationBundleTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>>

Tags to assign to the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#tags BedrockagentcoreConfigurationBundle#tags}

---

### BedrockagentcoreConfigurationBundleCreatedBy <a name="BedrockagentcoreConfigurationBundleCreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundleCreatedBy;

BedrockagentcoreConfigurationBundleCreatedBy.builder()
//  .arn(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.property.arn">arn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the source, if applicable. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.property.name">name</a></code> | <code>java.lang.String</code> | The name of the source (for example, user, optimization-job, or system). |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the source, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#arn BedrockagentcoreConfigurationBundle#arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the source (for example, user, optimization-job, or system).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#name BedrockagentcoreConfigurationBundle#name}

---

### BedrockagentcoreConfigurationBundleLineageMetadata <a name="BedrockagentcoreConfigurationBundleLineageMetadata" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundleLineageMetadata;

BedrockagentcoreConfigurationBundleLineageMetadata.builder()
    .build();
```


### BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy <a name="BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy;

BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy.builder()
    .build();
```


### BedrockagentcoreConfigurationBundleTags <a name="BedrockagentcoreConfigurationBundleTags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundleTags;

BedrockagentcoreConfigurationBundleTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#key BedrockagentcoreConfigurationBundle#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#value BedrockagentcoreConfigurationBundle#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#key BedrockagentcoreConfigurationBundle#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_configuration_bundle#value BedrockagentcoreConfigurationBundle#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreConfigurationBundleComponentsMap <a name="BedrockagentcoreConfigurationBundleComponentsMap" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundleComponentsMap;

new BedrockagentcoreConfigurationBundleComponentsMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.get"></a>

```java
public BedrockagentcoreConfigurationBundleComponentsOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, BedrockagentcoreConfigurationBundleComponents> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>>

---


### BedrockagentcoreConfigurationBundleComponentsOutputReference <a name="BedrockagentcoreConfigurationBundleComponentsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundleComponentsOutputReference;

new BedrockagentcoreConfigurationBundleComponentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resetConfiguration"></a>

```java
public void resetConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.configurationInput">configurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.configuration">configuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.configurationInput"></a>

```java
public java.lang.String getConfigurationInput();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreConfigurationBundleComponents getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>

---


### BedrockagentcoreConfigurationBundleCreatedByOutputReference <a name="BedrockagentcoreConfigurationBundleCreatedByOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference;

new BedrockagentcoreConfigurationBundleCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resetArn"></a>

```java
public void resetArn()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreConfigurationBundleCreatedBy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a>

---


### BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference <a name="BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference;

new BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy">BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.internalValue"></a>

```java
public BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy">BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy</a>

---


### BedrockagentcoreConfigurationBundleLineageMetadataOutputReference <a name="BedrockagentcoreConfigurationBundleLineageMetadataOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference;

new BedrockagentcoreConfigurationBundleLineageMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.branchName">branchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.commitMessage">commitMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.createdBy">createdBy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference">BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.parentVersionIds">parentVersionIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata">BedrockagentcoreConfigurationBundleLineageMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.commitMessage"></a>

```java
public java.lang.String getCommitMessage();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.createdBy"></a>

```java
public BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference getCreatedBy();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference">BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference</a>

---

##### `parentVersionIds`<sup>Required</sup> <a name="parentVersionIds" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.parentVersionIds"></a>

```java
public java.util.List<java.lang.String> getParentVersionIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.internalValue"></a>

```java
public BedrockagentcoreConfigurationBundleLineageMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata">BedrockagentcoreConfigurationBundleLineageMetadata</a>

---


### BedrockagentcoreConfigurationBundleTagsList <a name="BedrockagentcoreConfigurationBundleTagsList" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundleTagsList;

new BedrockagentcoreConfigurationBundleTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.get"></a>

```java
public BedrockagentcoreConfigurationBundleTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreConfigurationBundleTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>>

---


### BedrockagentcoreConfigurationBundleTagsOutputReference <a name="BedrockagentcoreConfigurationBundleTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_configuration_bundle.BedrockagentcoreConfigurationBundleTagsOutputReference;

new BedrockagentcoreConfigurationBundleTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreConfigurationBundleTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>

---



