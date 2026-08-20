# `amplifyBranch` Submodule <a name="`amplifyBranch` Submodule" id="@cdktn/provider-awscc.amplifyBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyBranch <a name="AmplifyBranch" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch awscc_amplify_branch}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer"></a>

```java
import io.cdktn.providers.awscc.amplify_branch.AmplifyBranch;

AmplifyBranch.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appId(java.lang.String)
    .branchName(java.lang.String)
//  .backend(AmplifyBranchBackend)
//  .basicAuthConfig(AmplifyBranchBasicAuthConfig)
//  .buildSpec(java.lang.String)
//  .computeRoleArn(java.lang.String)
//  .description(java.lang.String)
//  .enableAutoBuild(java.lang.Boolean|IResolvable)
//  .enablePerformanceMode(java.lang.Boolean|IResolvable)
//  .enablePullRequestPreview(java.lang.Boolean|IResolvable)
//  .enableSkewProtection(java.lang.Boolean|IResolvable)
//  .environmentVariables(IResolvable|java.util.List<AmplifyBranchEnvironmentVariables>)
//  .framework(java.lang.String)
//  .pullRequestEnvironmentName(java.lang.String)
//  .stage(java.lang.String)
//  .tags(IResolvable|java.util.List<AmplifyBranchTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#app_id AmplifyBranch#app_id}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.branchName">branchName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#branch_name AmplifyBranch#branch_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.backend">backend</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#backend AmplifyBranch#backend}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.basicAuthConfig">basicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#basic_auth_config AmplifyBranch#basic_auth_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.buildSpec">buildSpec</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#build_spec AmplifyBranch#build_spec}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.computeRoleArn">computeRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#compute_role_arn AmplifyBranch#compute_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#description AmplifyBranch#description}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.enableAutoBuild">enableAutoBuild</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.enablePerformanceMode">enablePerformanceMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.enablePullRequestPreview">enablePullRequestPreview</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.enableSkewProtection">enableSkewProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_skew_protection AmplifyBranch#enable_skew_protection}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.environmentVariables">environmentVariables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#environment_variables AmplifyBranch#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.framework">framework</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#framework AmplifyBranch#framework}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.pullRequestEnvironmentName">pullRequestEnvironmentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.stage">stage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#stage AmplifyBranch#stage}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#tags AmplifyBranch#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#app_id AmplifyBranch#app_id}.

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.branchName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#branch_name AmplifyBranch#branch_name}.

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.backend"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#backend AmplifyBranch#backend}.

---

##### `basicAuthConfig`<sup>Optional</sup> <a name="basicAuthConfig" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.basicAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#basic_auth_config AmplifyBranch#basic_auth_config}.

---

##### `buildSpec`<sup>Optional</sup> <a name="buildSpec" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.buildSpec"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#build_spec AmplifyBranch#build_spec}.

---

##### `computeRoleArn`<sup>Optional</sup> <a name="computeRoleArn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.computeRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#compute_role_arn AmplifyBranch#compute_role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#description AmplifyBranch#description}.

---

##### `enableAutoBuild`<sup>Optional</sup> <a name="enableAutoBuild" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.enableAutoBuild"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}.

---

##### `enablePerformanceMode`<sup>Optional</sup> <a name="enablePerformanceMode" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.enablePerformanceMode"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}.

---

##### `enablePullRequestPreview`<sup>Optional</sup> <a name="enablePullRequestPreview" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.enablePullRequestPreview"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}.

---

##### `enableSkewProtection`<sup>Optional</sup> <a name="enableSkewProtection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.enableSkewProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_skew_protection AmplifyBranch#enable_skew_protection}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.environmentVariables"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#environment_variables AmplifyBranch#environment_variables}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.framework"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#framework AmplifyBranch#framework}.

---

##### `pullRequestEnvironmentName`<sup>Optional</sup> <a name="pullRequestEnvironmentName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.pullRequestEnvironmentName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.stage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#stage AmplifyBranch#stage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#tags AmplifyBranch#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBackend">putBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBasicAuthConfig">putBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putEnvironmentVariables">putEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBasicAuthConfig">resetBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBuildSpec">resetBuildSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetComputeRoleArn">resetComputeRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnableAutoBuild">resetEnableAutoBuild</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnablePerformanceMode">resetEnablePerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnablePullRequestPreview">resetEnablePullRequestPreview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnableSkewProtection">resetEnableSkewProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetFramework">resetFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetPullRequestEnvironmentName">resetPullRequestEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetStage">resetStage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackend` <a name="putBackend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBackend"></a>

```java
public void putBackend(AmplifyBranchBackend value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBackend.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a>

---

##### `putBasicAuthConfig` <a name="putBasicAuthConfig" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBasicAuthConfig"></a>

```java
public void putBasicAuthConfig(AmplifyBranchBasicAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBasicAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a>

---

##### `putEnvironmentVariables` <a name="putEnvironmentVariables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putEnvironmentVariables"></a>

```java
public void putEnvironmentVariables(IResolvable|java.util.List<AmplifyBranchEnvironmentVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putEnvironmentVariables.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AmplifyBranchTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>>

---

##### `resetBackend` <a name="resetBackend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetBasicAuthConfig` <a name="resetBasicAuthConfig" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBasicAuthConfig"></a>

```java
public void resetBasicAuthConfig()
```

##### `resetBuildSpec` <a name="resetBuildSpec" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBuildSpec"></a>

```java
public void resetBuildSpec()
```

##### `resetComputeRoleArn` <a name="resetComputeRoleArn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetComputeRoleArn"></a>

```java
public void resetComputeRoleArn()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnableAutoBuild` <a name="resetEnableAutoBuild" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnableAutoBuild"></a>

```java
public void resetEnableAutoBuild()
```

##### `resetEnablePerformanceMode` <a name="resetEnablePerformanceMode" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnablePerformanceMode"></a>

```java
public void resetEnablePerformanceMode()
```

##### `resetEnablePullRequestPreview` <a name="resetEnablePullRequestPreview" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnablePullRequestPreview"></a>

```java
public void resetEnablePullRequestPreview()
```

##### `resetEnableSkewProtection` <a name="resetEnableSkewProtection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnableSkewProtection"></a>

```java
public void resetEnableSkewProtection()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetFramework` <a name="resetFramework" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetFramework"></a>

```java
public void resetFramework()
```

##### `resetPullRequestEnvironmentName` <a name="resetPullRequestEnvironmentName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetPullRequestEnvironmentName"></a>

```java
public void resetPullRequestEnvironmentName()
```

##### `resetStage` <a name="resetStage" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetStage"></a>

```java
public void resetStage()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AmplifyBranch resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isConstruct"></a>

```java
import io.cdktn.providers.awscc.amplify_branch.AmplifyBranch;

AmplifyBranch.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.amplify_branch.AmplifyBranch;

AmplifyBranch.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.amplify_branch.AmplifyBranch;

AmplifyBranch.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.amplify_branch.AmplifyBranch;

AmplifyBranch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AmplifyBranch.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AmplifyBranch resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AmplifyBranch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AmplifyBranch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AmplifyBranch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.backend">backend</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference">AmplifyBranchBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.basicAuthConfig">basicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference">AmplifyBranchBasicAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.environmentVariables">environmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList">AmplifyBranchEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList">AmplifyBranchTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.backendInput">backendInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.basicAuthConfigInput">basicAuthConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.branchNameInput">branchNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.buildSpecInput">buildSpecInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.computeRoleArnInput">computeRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableAutoBuildInput">enableAutoBuildInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePerformanceModeInput">enablePerformanceModeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePullRequestPreviewInput">enablePullRequestPreviewInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableSkewProtectionInput">enableSkewProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.frameworkInput">frameworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentNameInput">pullRequestEnvironmentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.stageInput">stageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.branchName">branchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.buildSpec">buildSpec</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.computeRoleArn">computeRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableAutoBuild">enableAutoBuild</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePerformanceMode">enablePerformanceMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePullRequestPreview">enablePullRequestPreview</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableSkewProtection">enableSkewProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.framework">framework</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentName">pullRequestEnvironmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.stage">stage</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.backend"></a>

```java
public AmplifyBranchBackendOutputReference getBackend();
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference">AmplifyBranchBackendOutputReference</a>

---

##### `basicAuthConfig`<sup>Required</sup> <a name="basicAuthConfig" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.basicAuthConfig"></a>

```java
public AmplifyBranchBasicAuthConfigOutputReference getBasicAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference">AmplifyBranchBasicAuthConfigOutputReference</a>

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.environmentVariables"></a>

```java
public AmplifyBranchEnvironmentVariablesList getEnvironmentVariables();
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList">AmplifyBranchEnvironmentVariablesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tags"></a>

```java
public AmplifyBranchTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList">AmplifyBranchTagsList</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.backendInput"></a>

```java
public IResolvable|AmplifyBranchBackend getBackendInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a>

---

##### `basicAuthConfigInput`<sup>Optional</sup> <a name="basicAuthConfigInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.basicAuthConfigInput"></a>

```java
public IResolvable|AmplifyBranchBasicAuthConfig getBasicAuthConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a>

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.branchNameInput"></a>

```java
public java.lang.String getBranchNameInput();
```

- *Type:* java.lang.String

---

##### `buildSpecInput`<sup>Optional</sup> <a name="buildSpecInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.buildSpecInput"></a>

```java
public java.lang.String getBuildSpecInput();
```

- *Type:* java.lang.String

---

##### `computeRoleArnInput`<sup>Optional</sup> <a name="computeRoleArnInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.computeRoleArnInput"></a>

```java
public java.lang.String getComputeRoleArnInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enableAutoBuildInput`<sup>Optional</sup> <a name="enableAutoBuildInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableAutoBuildInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableAutoBuildInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePerformanceModeInput`<sup>Optional</sup> <a name="enablePerformanceModeInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePerformanceModeInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePerformanceModeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePullRequestPreviewInput`<sup>Optional</sup> <a name="enablePullRequestPreviewInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePullRequestPreviewInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePullRequestPreviewInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSkewProtectionInput`<sup>Optional</sup> <a name="enableSkewProtectionInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableSkewProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSkewProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.environmentVariablesInput"></a>

```java
public IResolvable|java.util.List<AmplifyBranchEnvironmentVariables> getEnvironmentVariablesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>>

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.frameworkInput"></a>

```java
public java.lang.String getFrameworkInput();
```

- *Type:* java.lang.String

---

##### `pullRequestEnvironmentNameInput`<sup>Optional</sup> <a name="pullRequestEnvironmentNameInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentNameInput"></a>

```java
public java.lang.String getPullRequestEnvironmentNameInput();
```

- *Type:* java.lang.String

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.stageInput"></a>

```java
public java.lang.String getStageInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AmplifyBranchTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

---

##### `buildSpec`<sup>Required</sup> <a name="buildSpec" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.buildSpec"></a>

```java
public java.lang.String getBuildSpec();
```

- *Type:* java.lang.String

---

##### `computeRoleArn`<sup>Required</sup> <a name="computeRoleArn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.computeRoleArn"></a>

```java
public java.lang.String getComputeRoleArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enableAutoBuild`<sup>Required</sup> <a name="enableAutoBuild" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableAutoBuild"></a>

```java
public java.lang.Boolean|IResolvable getEnableAutoBuild();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePerformanceMode`<sup>Required</sup> <a name="enablePerformanceMode" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePerformanceMode"></a>

```java
public java.lang.Boolean|IResolvable getEnablePerformanceMode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePullRequestPreview`<sup>Required</sup> <a name="enablePullRequestPreview" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePullRequestPreview"></a>

```java
public java.lang.Boolean|IResolvable getEnablePullRequestPreview();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSkewProtection`<sup>Required</sup> <a name="enableSkewProtection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableSkewProtection"></a>

```java
public java.lang.Boolean|IResolvable getEnableSkewProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

---

##### `pullRequestEnvironmentName`<sup>Required</sup> <a name="pullRequestEnvironmentName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentName"></a>

```java
public java.lang.String getPullRequestEnvironmentName();
```

- *Type:* java.lang.String

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyBranchBackend <a name="AmplifyBranchBackend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend.Initializer"></a>

```java
import io.cdktn.providers.awscc.amplify_branch.AmplifyBranchBackend;

AmplifyBranchBackend.builder()
//  .stackArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend.property.stackArn">stackArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#stack_arn AmplifyBranch#stack_arn}. |

---

##### `stackArn`<sup>Optional</sup> <a name="stackArn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend.property.stackArn"></a>

```java
public java.lang.String getStackArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#stack_arn AmplifyBranch#stack_arn}.

---

### AmplifyBranchBasicAuthConfig <a name="AmplifyBranchBasicAuthConfig" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.amplify_branch.AmplifyBranchBasicAuthConfig;

AmplifyBranchBasicAuthConfig.builder()
//  .enableBasicAuth(java.lang.Boolean|IResolvable)
//  .password(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.enableBasicAuth">enableBasicAuth</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#password AmplifyBranch#password}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#username AmplifyBranch#username}. |

---

##### `enableBasicAuth`<sup>Optional</sup> <a name="enableBasicAuth" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.enableBasicAuth"></a>

```java
public java.lang.Boolean|IResolvable getEnableBasicAuth();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#password AmplifyBranch#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#username AmplifyBranch#username}.

---

### AmplifyBranchConfig <a name="AmplifyBranchConfig" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.amplify_branch.AmplifyBranchConfig;

AmplifyBranchConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appId(java.lang.String)
    .branchName(java.lang.String)
//  .backend(AmplifyBranchBackend)
//  .basicAuthConfig(AmplifyBranchBasicAuthConfig)
//  .buildSpec(java.lang.String)
//  .computeRoleArn(java.lang.String)
//  .description(java.lang.String)
//  .enableAutoBuild(java.lang.Boolean|IResolvable)
//  .enablePerformanceMode(java.lang.Boolean|IResolvable)
//  .enablePullRequestPreview(java.lang.Boolean|IResolvable)
//  .enableSkewProtection(java.lang.Boolean|IResolvable)
//  .environmentVariables(IResolvable|java.util.List<AmplifyBranchEnvironmentVariables>)
//  .framework(java.lang.String)
//  .pullRequestEnvironmentName(java.lang.String)
//  .stage(java.lang.String)
//  .tags(IResolvable|java.util.List<AmplifyBranchTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#app_id AmplifyBranch#app_id}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.branchName">branchName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#branch_name AmplifyBranch#branch_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.backend">backend</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#backend AmplifyBranch#backend}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.basicAuthConfig">basicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#basic_auth_config AmplifyBranch#basic_auth_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.buildSpec">buildSpec</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#build_spec AmplifyBranch#build_spec}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.computeRoleArn">computeRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#compute_role_arn AmplifyBranch#compute_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#description AmplifyBranch#description}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enableAutoBuild">enableAutoBuild</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enablePerformanceMode">enablePerformanceMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enablePullRequestPreview">enablePullRequestPreview</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enableSkewProtection">enableSkewProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_skew_protection AmplifyBranch#enable_skew_protection}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.environmentVariables">environmentVariables</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#environment_variables AmplifyBranch#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.framework">framework</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#framework AmplifyBranch#framework}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.pullRequestEnvironmentName">pullRequestEnvironmentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.stage">stage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#stage AmplifyBranch#stage}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#tags AmplifyBranch#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#app_id AmplifyBranch#app_id}.

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#branch_name AmplifyBranch#branch_name}.

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.backend"></a>

```java
public AmplifyBranchBackend getBackend();
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#backend AmplifyBranch#backend}.

---

##### `basicAuthConfig`<sup>Optional</sup> <a name="basicAuthConfig" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.basicAuthConfig"></a>

```java
public AmplifyBranchBasicAuthConfig getBasicAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#basic_auth_config AmplifyBranch#basic_auth_config}.

---

##### `buildSpec`<sup>Optional</sup> <a name="buildSpec" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.buildSpec"></a>

```java
public java.lang.String getBuildSpec();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#build_spec AmplifyBranch#build_spec}.

---

##### `computeRoleArn`<sup>Optional</sup> <a name="computeRoleArn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.computeRoleArn"></a>

```java
public java.lang.String getComputeRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#compute_role_arn AmplifyBranch#compute_role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#description AmplifyBranch#description}.

---

##### `enableAutoBuild`<sup>Optional</sup> <a name="enableAutoBuild" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enableAutoBuild"></a>

```java
public java.lang.Boolean|IResolvable getEnableAutoBuild();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}.

---

##### `enablePerformanceMode`<sup>Optional</sup> <a name="enablePerformanceMode" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enablePerformanceMode"></a>

```java
public java.lang.Boolean|IResolvable getEnablePerformanceMode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}.

---

##### `enablePullRequestPreview`<sup>Optional</sup> <a name="enablePullRequestPreview" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enablePullRequestPreview"></a>

```java
public java.lang.Boolean|IResolvable getEnablePullRequestPreview();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}.

---

##### `enableSkewProtection`<sup>Optional</sup> <a name="enableSkewProtection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enableSkewProtection"></a>

```java
public java.lang.Boolean|IResolvable getEnableSkewProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#enable_skew_protection AmplifyBranch#enable_skew_protection}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.environmentVariables"></a>

```java
public IResolvable|java.util.List<AmplifyBranchEnvironmentVariables> getEnvironmentVariables();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#environment_variables AmplifyBranch#environment_variables}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#framework AmplifyBranch#framework}.

---

##### `pullRequestEnvironmentName`<sup>Optional</sup> <a name="pullRequestEnvironmentName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.pullRequestEnvironmentName"></a>

```java
public java.lang.String getPullRequestEnvironmentName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#stage AmplifyBranch#stage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AmplifyBranchTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#tags AmplifyBranch#tags}.

---

### AmplifyBranchEnvironmentVariables <a name="AmplifyBranchEnvironmentVariables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables.Initializer"></a>

```java
import io.cdktn.providers.awscc.amplify_branch.AmplifyBranchEnvironmentVariables;

AmplifyBranchEnvironmentVariables.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#name AmplifyBranch#name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#value AmplifyBranch#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#name AmplifyBranch#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#value AmplifyBranch#value}.

---

### AmplifyBranchTags <a name="AmplifyBranchTags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.amplify_branch.AmplifyBranchTags;

AmplifyBranchTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#key AmplifyBranch#key}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#value AmplifyBranch#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#key AmplifyBranch#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/amplify_branch#value AmplifyBranch#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmplifyBranchBackendOutputReference <a name="AmplifyBranchBackendOutputReference" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.amplify_branch.AmplifyBranchBackendOutputReference;

new AmplifyBranchBackendOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.resetStackArn">resetStackArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStackArn` <a name="resetStackArn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.resetStackArn"></a>

```java
public void resetStackArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.stackArnInput">stackArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.stackArn">stackArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stackArnInput`<sup>Optional</sup> <a name="stackArnInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.stackArnInput"></a>

```java
public java.lang.String getStackArnInput();
```

- *Type:* java.lang.String

---

##### `stackArn`<sup>Required</sup> <a name="stackArn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.stackArn"></a>

```java
public java.lang.String getStackArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.internalValue"></a>

```java
public IResolvable|AmplifyBranchBackend getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a>

---


### AmplifyBranchBasicAuthConfigOutputReference <a name="AmplifyBranchBasicAuthConfigOutputReference" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.amplify_branch.AmplifyBranchBasicAuthConfigOutputReference;

new AmplifyBranchBasicAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetEnableBasicAuth">resetEnableBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableBasicAuth` <a name="resetEnableBasicAuth" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetEnableBasicAuth"></a>

```java
public void resetEnableBasicAuth()
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.enableBasicAuthInput">enableBasicAuthInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.enableBasicAuth">enableBasicAuth</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableBasicAuthInput`<sup>Optional</sup> <a name="enableBasicAuthInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.enableBasicAuthInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableBasicAuthInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `enableBasicAuth`<sup>Required</sup> <a name="enableBasicAuth" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.enableBasicAuth"></a>

```java
public java.lang.Boolean|IResolvable getEnableBasicAuth();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AmplifyBranchBasicAuthConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a>

---


### AmplifyBranchEnvironmentVariablesList <a name="AmplifyBranchEnvironmentVariablesList" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.amplify_branch.AmplifyBranchEnvironmentVariablesList;

new AmplifyBranchEnvironmentVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.get"></a>

```java
public AmplifyBranchEnvironmentVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AmplifyBranchEnvironmentVariables> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>>

---


### AmplifyBranchEnvironmentVariablesOutputReference <a name="AmplifyBranchEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.amplify_branch.AmplifyBranchEnvironmentVariablesOutputReference;

new AmplifyBranchEnvironmentVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.internalValue"></a>

```java
public IResolvable|AmplifyBranchEnvironmentVariables getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>

---


### AmplifyBranchTagsList <a name="AmplifyBranchTagsList" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.amplify_branch.AmplifyBranchTagsList;

new AmplifyBranchTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.get"></a>

```java
public AmplifyBranchTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AmplifyBranchTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>>

---


### AmplifyBranchTagsOutputReference <a name="AmplifyBranchTagsOutputReference" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.amplify_branch.AmplifyBranchTagsOutputReference;

new AmplifyBranchTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AmplifyBranchTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>

---



