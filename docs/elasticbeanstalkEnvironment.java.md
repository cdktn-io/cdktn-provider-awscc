# `elasticbeanstalkEnvironment` Submodule <a name="`elasticbeanstalkEnvironment` Submodule" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticbeanstalkEnvironment <a name="ElasticbeanstalkEnvironment" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment awscc_elasticbeanstalk_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_environment.ElasticbeanstalkEnvironment;

ElasticbeanstalkEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationName(java.lang.String)
//  .cnamePrefix(java.lang.String)
//  .description(java.lang.String)
//  .environmentName(java.lang.String)
//  .operationsRole(java.lang.String)
//  .optionSettings(IResolvable|java.util.List<ElasticbeanstalkEnvironmentOptionSettings>)
//  .platformArn(java.lang.String)
//  .solutionStackName(java.lang.String)
//  .tags(IResolvable|java.util.List<ElasticbeanstalkEnvironmentTags>)
//  .templateName(java.lang.String)
//  .tier(ElasticbeanstalkEnvironmentTier)
//  .versionLabel(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.applicationName">applicationName</a></code> | <code>java.lang.String</code> | The name of the application that is associated with this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.cnamePrefix">cnamePrefix</a></code> | <code>java.lang.String</code> | If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Your description for this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.environmentName">environmentName</a></code> | <code>java.lang.String</code> | A unique name for the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.operationsRole">operationsRole</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.optionSettings">optionSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>></code> | Key-value pairs defining configuration options for this environment, such as the instance type. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.platformArn">platformArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the custom platform to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.solutionStackName">solutionStackName</a></code> | <code>java.lang.String</code> | The name of an Elastic Beanstalk solution stack (platform version) to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>></code> | Specifies the tags applied to resources in the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.templateName">templateName</a></code> | <code>java.lang.String</code> | The name of the Elastic Beanstalk configuration template to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.tier">tier</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a></code> | Specifies the tier to use in creating this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.versionLabel">versionLabel</a></code> | <code>java.lang.String</code> | The name of the application version to deploy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.applicationName"></a>

- *Type:* java.lang.String

The name of the application that is associated with this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#application_name ElasticbeanstalkEnvironment#application_name}

---

##### `cnamePrefix`<sup>Optional</sup> <a name="cnamePrefix" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.cnamePrefix"></a>

- *Type:* java.lang.String

If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL.

If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#cname_prefix ElasticbeanstalkEnvironment#cname_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Your description for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#description ElasticbeanstalkEnvironment#description}

---

##### `environmentName`<sup>Optional</sup> <a name="environmentName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.environmentName"></a>

- *Type:* java.lang.String

A unique name for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#environment_name ElasticbeanstalkEnvironment#environment_name}

---

##### `operationsRole`<sup>Optional</sup> <a name="operationsRole" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.operationsRole"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#operations_role ElasticbeanstalkEnvironment#operations_role}

---

##### `optionSettings`<sup>Optional</sup> <a name="optionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.optionSettings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>>

Key-value pairs defining configuration options for this environment, such as the instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#option_settings ElasticbeanstalkEnvironment#option_settings}

---

##### `platformArn`<sup>Optional</sup> <a name="platformArn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.platformArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the custom platform to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#platform_arn ElasticbeanstalkEnvironment#platform_arn}

---

##### `solutionStackName`<sup>Optional</sup> <a name="solutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.solutionStackName"></a>

- *Type:* java.lang.String

The name of an Elastic Beanstalk solution stack (platform version) to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#solution_stack_name ElasticbeanstalkEnvironment#solution_stack_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>>

Specifies the tags applied to resources in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#tags ElasticbeanstalkEnvironment#tags}

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.templateName"></a>

- *Type:* java.lang.String

The name of the Elastic Beanstalk configuration template to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#template_name ElasticbeanstalkEnvironment#template_name}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.tier"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

Specifies the tier to use in creating this environment.

The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#tier ElasticbeanstalkEnvironment#tier}

---

##### `versionLabel`<sup>Optional</sup> <a name="versionLabel" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.versionLabel"></a>

- *Type:* java.lang.String

The name of the application version to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#version_label ElasticbeanstalkEnvironment#version_label}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putOptionSettings">putOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTier">putTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetCnamePrefix">resetCnamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetEnvironmentName">resetEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOperationsRole">resetOperationsRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOptionSettings">resetOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetPlatformArn">resetPlatformArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetSolutionStackName">resetSolutionStackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTemplateName">resetTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetVersionLabel">resetVersionLabel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptionSettings` <a name="putOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putOptionSettings"></a>

```java
public void putOptionSettings(IResolvable|java.util.List<ElasticbeanstalkEnvironmentOptionSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putOptionSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ElasticbeanstalkEnvironmentTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>>

---

##### `putTier` <a name="putTier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTier"></a>

```java
public void putTier(ElasticbeanstalkEnvironmentTier value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

---

##### `resetCnamePrefix` <a name="resetCnamePrefix" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetCnamePrefix"></a>

```java
public void resetCnamePrefix()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnvironmentName` <a name="resetEnvironmentName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetEnvironmentName"></a>

```java
public void resetEnvironmentName()
```

##### `resetOperationsRole` <a name="resetOperationsRole" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOperationsRole"></a>

```java
public void resetOperationsRole()
```

##### `resetOptionSettings` <a name="resetOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOptionSettings"></a>

```java
public void resetOptionSettings()
```

##### `resetPlatformArn` <a name="resetPlatformArn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetPlatformArn"></a>

```java
public void resetPlatformArn()
```

##### `resetSolutionStackName` <a name="resetSolutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetSolutionStackName"></a>

```java
public void resetSolutionStackName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemplateName` <a name="resetTemplateName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTemplateName"></a>

```java
public void resetTemplateName()
```

##### `resetTier` <a name="resetTier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTier"></a>

```java
public void resetTier()
```

##### `resetVersionLabel` <a name="resetVersionLabel" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetVersionLabel"></a>

```java
public void resetVersionLabel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticbeanstalkEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_environment.ElasticbeanstalkEnvironment;

ElasticbeanstalkEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_environment.ElasticbeanstalkEnvironment;

ElasticbeanstalkEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_environment.ElasticbeanstalkEnvironment;

ElasticbeanstalkEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_environment.ElasticbeanstalkEnvironment;

ElasticbeanstalkEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ElasticbeanstalkEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ElasticbeanstalkEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ElasticbeanstalkEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ElasticbeanstalkEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ElasticbeanstalkEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.endpointUrl">endpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.optionSettings">optionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList">ElasticbeanstalkEnvironmentOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList">ElasticbeanstalkEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tier">tier</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference">ElasticbeanstalkEnvironmentTierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.applicationNameInput">applicationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cnamePrefixInput">cnamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.environmentNameInput">environmentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.operationsRoleInput">operationsRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.optionSettingsInput">optionSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.platformArnInput">platformArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.solutionStackNameInput">solutionStackNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.templateNameInput">templateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tierInput">tierInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.versionLabelInput">versionLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cnamePrefix">cnamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.environmentName">environmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.operationsRole">operationsRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.platformArn">platformArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.solutionStackName">solutionStackName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.templateName">templateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.versionLabel">versionLabel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.endpointUrl"></a>

```java
public java.lang.String getEndpointUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `optionSettings`<sup>Required</sup> <a name="optionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.optionSettings"></a>

```java
public ElasticbeanstalkEnvironmentOptionSettingsList getOptionSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList">ElasticbeanstalkEnvironmentOptionSettingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tags"></a>

```java
public ElasticbeanstalkEnvironmentTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList">ElasticbeanstalkEnvironmentTagsList</a>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tier"></a>

```java
public ElasticbeanstalkEnvironmentTierOutputReference getTier();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference">ElasticbeanstalkEnvironmentTierOutputReference</a>

---

##### `applicationNameInput`<sup>Optional</sup> <a name="applicationNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.applicationNameInput"></a>

```java
public java.lang.String getApplicationNameInput();
```

- *Type:* java.lang.String

---

##### `cnamePrefixInput`<sup>Optional</sup> <a name="cnamePrefixInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cnamePrefixInput"></a>

```java
public java.lang.String getCnamePrefixInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `environmentNameInput`<sup>Optional</sup> <a name="environmentNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.environmentNameInput"></a>

```java
public java.lang.String getEnvironmentNameInput();
```

- *Type:* java.lang.String

---

##### `operationsRoleInput`<sup>Optional</sup> <a name="operationsRoleInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.operationsRoleInput"></a>

```java
public java.lang.String getOperationsRoleInput();
```

- *Type:* java.lang.String

---

##### `optionSettingsInput`<sup>Optional</sup> <a name="optionSettingsInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.optionSettingsInput"></a>

```java
public IResolvable|java.util.List<ElasticbeanstalkEnvironmentOptionSettings> getOptionSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>>

---

##### `platformArnInput`<sup>Optional</sup> <a name="platformArnInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.platformArnInput"></a>

```java
public java.lang.String getPlatformArnInput();
```

- *Type:* java.lang.String

---

##### `solutionStackNameInput`<sup>Optional</sup> <a name="solutionStackNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.solutionStackNameInput"></a>

```java
public java.lang.String getSolutionStackNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ElasticbeanstalkEnvironmentTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>>

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.templateNameInput"></a>

```java
public java.lang.String getTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tierInput"></a>

```java
public IResolvable|ElasticbeanstalkEnvironmentTier getTierInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

---

##### `versionLabelInput`<sup>Optional</sup> <a name="versionLabelInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.versionLabelInput"></a>

```java
public java.lang.String getVersionLabelInput();
```

- *Type:* java.lang.String

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

---

##### `cnamePrefix`<sup>Required</sup> <a name="cnamePrefix" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cnamePrefix"></a>

```java
public java.lang.String getCnamePrefix();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.environmentName"></a>

```java
public java.lang.String getEnvironmentName();
```

- *Type:* java.lang.String

---

##### `operationsRole`<sup>Required</sup> <a name="operationsRole" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.operationsRole"></a>

```java
public java.lang.String getOperationsRole();
```

- *Type:* java.lang.String

---

##### `platformArn`<sup>Required</sup> <a name="platformArn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.platformArn"></a>

```java
public java.lang.String getPlatformArn();
```

- *Type:* java.lang.String

---

##### `solutionStackName`<sup>Required</sup> <a name="solutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.solutionStackName"></a>

```java
public java.lang.String getSolutionStackName();
```

- *Type:* java.lang.String

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

---

##### `versionLabel`<sup>Required</sup> <a name="versionLabel" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.versionLabel"></a>

```java
public java.lang.String getVersionLabel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticbeanstalkEnvironmentConfig <a name="ElasticbeanstalkEnvironmentConfig" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_environment.ElasticbeanstalkEnvironmentConfig;

ElasticbeanstalkEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationName(java.lang.String)
//  .cnamePrefix(java.lang.String)
//  .description(java.lang.String)
//  .environmentName(java.lang.String)
//  .operationsRole(java.lang.String)
//  .optionSettings(IResolvable|java.util.List<ElasticbeanstalkEnvironmentOptionSettings>)
//  .platformArn(java.lang.String)
//  .solutionStackName(java.lang.String)
//  .tags(IResolvable|java.util.List<ElasticbeanstalkEnvironmentTags>)
//  .templateName(java.lang.String)
//  .tier(ElasticbeanstalkEnvironmentTier)
//  .versionLabel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | The name of the application that is associated with this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.cnamePrefix">cnamePrefix</a></code> | <code>java.lang.String</code> | If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Your description for this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.environmentName">environmentName</a></code> | <code>java.lang.String</code> | A unique name for the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.operationsRole">operationsRole</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.optionSettings">optionSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>></code> | Key-value pairs defining configuration options for this environment, such as the instance type. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.platformArn">platformArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the custom platform to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.solutionStackName">solutionStackName</a></code> | <code>java.lang.String</code> | The name of an Elastic Beanstalk solution stack (platform version) to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>></code> | Specifies the tags applied to resources in the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.templateName">templateName</a></code> | <code>java.lang.String</code> | The name of the Elastic Beanstalk configuration template to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.tier">tier</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a></code> | Specifies the tier to use in creating this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.versionLabel">versionLabel</a></code> | <code>java.lang.String</code> | The name of the application version to deploy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

The name of the application that is associated with this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#application_name ElasticbeanstalkEnvironment#application_name}

---

##### `cnamePrefix`<sup>Optional</sup> <a name="cnamePrefix" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.cnamePrefix"></a>

```java
public java.lang.String getCnamePrefix();
```

- *Type:* java.lang.String

If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL.

If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#cname_prefix ElasticbeanstalkEnvironment#cname_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Your description for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#description ElasticbeanstalkEnvironment#description}

---

##### `environmentName`<sup>Optional</sup> <a name="environmentName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.environmentName"></a>

```java
public java.lang.String getEnvironmentName();
```

- *Type:* java.lang.String

A unique name for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#environment_name ElasticbeanstalkEnvironment#environment_name}

---

##### `operationsRole`<sup>Optional</sup> <a name="operationsRole" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.operationsRole"></a>

```java
public java.lang.String getOperationsRole();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#operations_role ElasticbeanstalkEnvironment#operations_role}

---

##### `optionSettings`<sup>Optional</sup> <a name="optionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.optionSettings"></a>

```java
public IResolvable|java.util.List<ElasticbeanstalkEnvironmentOptionSettings> getOptionSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>>

Key-value pairs defining configuration options for this environment, such as the instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#option_settings ElasticbeanstalkEnvironment#option_settings}

---

##### `platformArn`<sup>Optional</sup> <a name="platformArn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.platformArn"></a>

```java
public java.lang.String getPlatformArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the custom platform to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#platform_arn ElasticbeanstalkEnvironment#platform_arn}

---

##### `solutionStackName`<sup>Optional</sup> <a name="solutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.solutionStackName"></a>

```java
public java.lang.String getSolutionStackName();
```

- *Type:* java.lang.String

The name of an Elastic Beanstalk solution stack (platform version) to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#solution_stack_name ElasticbeanstalkEnvironment#solution_stack_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ElasticbeanstalkEnvironmentTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>>

Specifies the tags applied to resources in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#tags ElasticbeanstalkEnvironment#tags}

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

The name of the Elastic Beanstalk configuration template to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#template_name ElasticbeanstalkEnvironment#template_name}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.tier"></a>

```java
public ElasticbeanstalkEnvironmentTier getTier();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

Specifies the tier to use in creating this environment.

The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#tier ElasticbeanstalkEnvironment#tier}

---

##### `versionLabel`<sup>Optional</sup> <a name="versionLabel" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.versionLabel"></a>

```java
public java.lang.String getVersionLabel();
```

- *Type:* java.lang.String

The name of the application version to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#version_label ElasticbeanstalkEnvironment#version_label}

---

### ElasticbeanstalkEnvironmentOptionSettings <a name="ElasticbeanstalkEnvironmentOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_environment.ElasticbeanstalkEnvironmentOptionSettings;

ElasticbeanstalkEnvironmentOptionSettings.builder()
//  .namespace(java.lang.String)
//  .optionName(java.lang.String)
//  .resourceName(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.namespace">namespace</a></code> | <code>java.lang.String</code> | A unique namespace that identifies the option's associated AWS resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.optionName">optionName</a></code> | <code>java.lang.String</code> | The name of the configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | A unique resource name for the option setting. Use it for a time–based scaling configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.value">value</a></code> | <code>java.lang.String</code> | The current value for the configuration option. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

A unique namespace that identifies the option's associated AWS resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#namespace ElasticbeanstalkEnvironment#namespace}

---

##### `optionName`<sup>Optional</sup> <a name="optionName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.optionName"></a>

```java
public java.lang.String getOptionName();
```

- *Type:* java.lang.String

The name of the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#option_name ElasticbeanstalkEnvironment#option_name}

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

A unique resource name for the option setting. Use it for a time–based scaling configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#resource_name ElasticbeanstalkEnvironment#resource_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The current value for the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#value ElasticbeanstalkEnvironment#value}

---

### ElasticbeanstalkEnvironmentTags <a name="ElasticbeanstalkEnvironmentTags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_environment.ElasticbeanstalkEnvironmentTags;

ElasticbeanstalkEnvironmentTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#key ElasticbeanstalkEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#value ElasticbeanstalkEnvironment#value}

---

### ElasticbeanstalkEnvironmentTier <a name="ElasticbeanstalkEnvironmentTier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_environment.ElasticbeanstalkEnvironmentTier;

ElasticbeanstalkEnvironmentTier.builder()
//  .name(java.lang.String)
//  .type(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.name">name</a></code> | <code>java.lang.String</code> | The name of this environment tier. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.type">type</a></code> | <code>java.lang.String</code> | The type of this environment tier. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.version">version</a></code> | <code>java.lang.String</code> | The version of this environment tier. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this environment tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#name ElasticbeanstalkEnvironment#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of this environment tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#type ElasticbeanstalkEnvironment#type}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version of this environment tier.

When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_environment#version ElasticbeanstalkEnvironment#version}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticbeanstalkEnvironmentOptionSettingsList <a name="ElasticbeanstalkEnvironmentOptionSettingsList" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_environment.ElasticbeanstalkEnvironmentOptionSettingsList;

new ElasticbeanstalkEnvironmentOptionSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.get"></a>

```java
public ElasticbeanstalkEnvironmentOptionSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticbeanstalkEnvironmentOptionSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>>

---


### ElasticbeanstalkEnvironmentOptionSettingsOutputReference <a name="ElasticbeanstalkEnvironmentOptionSettingsOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_environment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference;

new ElasticbeanstalkEnvironmentOptionSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetOptionName">resetOptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetResourceName">resetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOptionName` <a name="resetOptionName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetOptionName"></a>

```java
public void resetOptionName()
```

##### `resetResourceName` <a name="resetResourceName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetResourceName"></a>

```java
public void resetResourceName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionNameInput">optionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceNameInput">resourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionName">optionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `optionNameInput`<sup>Optional</sup> <a name="optionNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionNameInput"></a>

```java
public java.lang.String getOptionNameInput();
```

- *Type:* java.lang.String

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceNameInput"></a>

```java
public java.lang.String getResourceNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `optionName`<sup>Required</sup> <a name="optionName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionName"></a>

```java
public java.lang.String getOptionName();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticbeanstalkEnvironmentOptionSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>

---


### ElasticbeanstalkEnvironmentTagsList <a name="ElasticbeanstalkEnvironmentTagsList" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_environment.ElasticbeanstalkEnvironmentTagsList;

new ElasticbeanstalkEnvironmentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.get"></a>

```java
public ElasticbeanstalkEnvironmentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticbeanstalkEnvironmentTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>>

---


### ElasticbeanstalkEnvironmentTagsOutputReference <a name="ElasticbeanstalkEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_environment.ElasticbeanstalkEnvironmentTagsOutputReference;

new ElasticbeanstalkEnvironmentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticbeanstalkEnvironmentTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>

---


### ElasticbeanstalkEnvironmentTierOutputReference <a name="ElasticbeanstalkEnvironmentTierOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_environment.ElasticbeanstalkEnvironmentTierOutputReference;

new ElasticbeanstalkEnvironmentTierOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticbeanstalkEnvironmentTier getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

---



