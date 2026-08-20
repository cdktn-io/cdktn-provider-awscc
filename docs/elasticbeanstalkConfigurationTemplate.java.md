# `elasticbeanstalkConfigurationTemplate` Submodule <a name="`elasticbeanstalkConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticbeanstalkConfigurationTemplate <a name="ElasticbeanstalkConfigurationTemplate" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template awscc_elasticbeanstalk_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_configuration_template.ElasticbeanstalkConfigurationTemplate;

ElasticbeanstalkConfigurationTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationName(java.lang.String)
//  .description(java.lang.String)
//  .environmentId(java.lang.String)
//  .optionSettings(IResolvable|java.util.List<ElasticbeanstalkConfigurationTemplateOptionSettings>)
//  .platformArn(java.lang.String)
//  .solutionStackName(java.lang.String)
//  .sourceConfiguration(ElasticbeanstalkConfigurationTemplateSourceConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.applicationName">applicationName</a></code> | <code>java.lang.String</code> | The name of the Elastic Beanstalk application to associate with this configuration template. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description for this configuration. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.environmentId">environmentId</a></code> | <code>java.lang.String</code> | The ID of an environment whose settings you want to use to create the configuration template. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.optionSettings">optionSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>></code> | Option values for the Elastic Beanstalk configuration, such as the instance type. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.platformArn">platformArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the custom platform. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.solutionStackName">solutionStackName</a></code> | <code>java.lang.String</code> | The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | An Elastic Beanstalk configuration template to base this one on. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.applicationName"></a>

- *Type:* java.lang.String

The name of the Elastic Beanstalk application to associate with this configuration template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#application_name ElasticbeanstalkConfigurationTemplate#application_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description for this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#description ElasticbeanstalkConfigurationTemplate#description}

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.environmentId"></a>

- *Type:* java.lang.String

The ID of an environment whose settings you want to use to create the configuration template.

You must specify EnvironmentId if you don't specify PlatformArn, SolutionStackName, or SourceConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#environment_id ElasticbeanstalkConfigurationTemplate#environment_id}

---

##### `optionSettings`<sup>Optional</sup> <a name="optionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.optionSettings"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>>

Option values for the Elastic Beanstalk configuration, such as the instance type.

If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the AWS Elastic Beanstalk Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#option_settings ElasticbeanstalkConfigurationTemplate#option_settings}

---

##### `platformArn`<sup>Optional</sup> <a name="platformArn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.platformArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the custom platform.

For more information, see [Custom Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html) in the AWS Elastic Beanstalk Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#platform_arn ElasticbeanstalkConfigurationTemplate#platform_arn}

---

##### `solutionStackName`<sup>Optional</sup> <a name="solutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.solutionStackName"></a>

- *Type:* java.lang.String

The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses.

For example, 64bit Amazon Linux 2013.09 running Tomcat 7 Java 7. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see [Supported Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html) in the AWS Elastic Beanstalk Developer Guide.

You must specify SolutionStackName if you don't specify PlatformArn, EnvironmentId, or SourceConfiguration.

Use the ListAvailableSolutionStacks API to obtain a list of available solution stacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#solution_stack_name ElasticbeanstalkConfigurationTemplate#solution_stack_name}

---

##### `sourceConfiguration`<sup>Optional</sup> <a name="sourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.sourceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

An Elastic Beanstalk configuration template to base this one on.

If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.

Values specified in OptionSettings override any values obtained from the SourceConfiguration.

You must specify SourceConfiguration if you don't specify PlatformArn, EnvironmentId, or SolutionStackName.

Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#source_configuration ElasticbeanstalkConfigurationTemplate#source_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putOptionSettings">putOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putSourceConfiguration">putSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetEnvironmentId">resetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOptionSettings">resetOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetPlatformArn">resetPlatformArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSolutionStackName">resetSolutionStackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSourceConfiguration">resetSourceConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptionSettings` <a name="putOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putOptionSettings"></a>

```java
public void putOptionSettings(IResolvable|java.util.List<ElasticbeanstalkConfigurationTemplateOptionSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putOptionSettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>>

---

##### `putSourceConfiguration` <a name="putSourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putSourceConfiguration"></a>

```java
public void putSourceConfiguration(ElasticbeanstalkConfigurationTemplateSourceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnvironmentId` <a name="resetEnvironmentId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetEnvironmentId"></a>

```java
public void resetEnvironmentId()
```

##### `resetOptionSettings` <a name="resetOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOptionSettings"></a>

```java
public void resetOptionSettings()
```

##### `resetPlatformArn` <a name="resetPlatformArn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetPlatformArn"></a>

```java
public void resetPlatformArn()
```

##### `resetSolutionStackName` <a name="resetSolutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSolutionStackName"></a>

```java
public void resetSolutionStackName()
```

##### `resetSourceConfiguration` <a name="resetSourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSourceConfiguration"></a>

```java
public void resetSourceConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticbeanstalkConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_configuration_template.ElasticbeanstalkConfigurationTemplate;

ElasticbeanstalkConfigurationTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_configuration_template.ElasticbeanstalkConfigurationTemplate;

ElasticbeanstalkConfigurationTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_configuration_template.ElasticbeanstalkConfigurationTemplate;

ElasticbeanstalkConfigurationTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_configuration_template.ElasticbeanstalkConfigurationTemplate;

ElasticbeanstalkConfigurationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ElasticbeanstalkConfigurationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ElasticbeanstalkConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ElasticbeanstalkConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ElasticbeanstalkConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ElasticbeanstalkConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettings">optionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList">ElasticbeanstalkConfigurationTemplateOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference">ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.templateName">templateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationNameInput">applicationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentIdInput">environmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettingsInput">optionSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArnInput">platformArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackNameInput">solutionStackNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfigurationInput">sourceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArn">platformArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackName">solutionStackName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `optionSettings`<sup>Required</sup> <a name="optionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettings"></a>

```java
public ElasticbeanstalkConfigurationTemplateOptionSettingsList getOptionSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList">ElasticbeanstalkConfigurationTemplateOptionSettingsList</a>

---

##### `sourceConfiguration`<sup>Required</sup> <a name="sourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfiguration"></a>

```java
public ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference getSourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference">ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference</a>

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

---

##### `applicationNameInput`<sup>Optional</sup> <a name="applicationNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationNameInput"></a>

```java
public java.lang.String getApplicationNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentIdInput"></a>

```java
public java.lang.String getEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `optionSettingsInput`<sup>Optional</sup> <a name="optionSettingsInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettingsInput"></a>

```java
public IResolvable|java.util.List<ElasticbeanstalkConfigurationTemplateOptionSettings> getOptionSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>>

---

##### `platformArnInput`<sup>Optional</sup> <a name="platformArnInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArnInput"></a>

```java
public java.lang.String getPlatformArnInput();
```

- *Type:* java.lang.String

---

##### `solutionStackNameInput`<sup>Optional</sup> <a name="solutionStackNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackNameInput"></a>

```java
public java.lang.String getSolutionStackNameInput();
```

- *Type:* java.lang.String

---

##### `sourceConfigurationInput`<sup>Optional</sup> <a name="sourceConfigurationInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfigurationInput"></a>

```java
public IResolvable|ElasticbeanstalkConfigurationTemplateSourceConfiguration getSourceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `platformArn`<sup>Required</sup> <a name="platformArn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArn"></a>

```java
public java.lang.String getPlatformArn();
```

- *Type:* java.lang.String

---

##### `solutionStackName`<sup>Required</sup> <a name="solutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackName"></a>

```java
public java.lang.String getSolutionStackName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticbeanstalkConfigurationTemplateConfig <a name="ElasticbeanstalkConfigurationTemplateConfig" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_configuration_template.ElasticbeanstalkConfigurationTemplateConfig;

ElasticbeanstalkConfigurationTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationName(java.lang.String)
//  .description(java.lang.String)
//  .environmentId(java.lang.String)
//  .optionSettings(IResolvable|java.util.List<ElasticbeanstalkConfigurationTemplateOptionSettings>)
//  .platformArn(java.lang.String)
//  .solutionStackName(java.lang.String)
//  .sourceConfiguration(ElasticbeanstalkConfigurationTemplateSourceConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | The name of the Elastic Beanstalk application to associate with this configuration template. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description for this configuration. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | The ID of an environment whose settings you want to use to create the configuration template. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.optionSettings">optionSettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>></code> | Option values for the Elastic Beanstalk configuration, such as the instance type. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.platformArn">platformArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the custom platform. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.solutionStackName">solutionStackName</a></code> | <code>java.lang.String</code> | The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | An Elastic Beanstalk configuration template to base this one on. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

The name of the Elastic Beanstalk application to associate with this configuration template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#application_name ElasticbeanstalkConfigurationTemplate#application_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description for this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#description ElasticbeanstalkConfigurationTemplate#description}

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

The ID of an environment whose settings you want to use to create the configuration template.

You must specify EnvironmentId if you don't specify PlatformArn, SolutionStackName, or SourceConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#environment_id ElasticbeanstalkConfigurationTemplate#environment_id}

---

##### `optionSettings`<sup>Optional</sup> <a name="optionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.optionSettings"></a>

```java
public IResolvable|java.util.List<ElasticbeanstalkConfigurationTemplateOptionSettings> getOptionSettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>>

Option values for the Elastic Beanstalk configuration, such as the instance type.

If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the AWS Elastic Beanstalk Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#option_settings ElasticbeanstalkConfigurationTemplate#option_settings}

---

##### `platformArn`<sup>Optional</sup> <a name="platformArn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.platformArn"></a>

```java
public java.lang.String getPlatformArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the custom platform.

For more information, see [Custom Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html) in the AWS Elastic Beanstalk Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#platform_arn ElasticbeanstalkConfigurationTemplate#platform_arn}

---

##### `solutionStackName`<sup>Optional</sup> <a name="solutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.solutionStackName"></a>

```java
public java.lang.String getSolutionStackName();
```

- *Type:* java.lang.String

The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses.

For example, 64bit Amazon Linux 2013.09 running Tomcat 7 Java 7. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see [Supported Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html) in the AWS Elastic Beanstalk Developer Guide.

You must specify SolutionStackName if you don't specify PlatformArn, EnvironmentId, or SourceConfiguration.

Use the ListAvailableSolutionStacks API to obtain a list of available solution stacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#solution_stack_name ElasticbeanstalkConfigurationTemplate#solution_stack_name}

---

##### `sourceConfiguration`<sup>Optional</sup> <a name="sourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.sourceConfiguration"></a>

```java
public ElasticbeanstalkConfigurationTemplateSourceConfiguration getSourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

An Elastic Beanstalk configuration template to base this one on.

If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.

Values specified in OptionSettings override any values obtained from the SourceConfiguration.

You must specify SourceConfiguration if you don't specify PlatformArn, EnvironmentId, or SolutionStackName.

Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#source_configuration ElasticbeanstalkConfigurationTemplate#source_configuration}

---

### ElasticbeanstalkConfigurationTemplateOptionSettings <a name="ElasticbeanstalkConfigurationTemplateOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_configuration_template.ElasticbeanstalkConfigurationTemplateOptionSettings;

ElasticbeanstalkConfigurationTemplateOptionSettings.builder()
//  .namespace(java.lang.String)
//  .optionName(java.lang.String)
//  .resourceName(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.namespace">namespace</a></code> | <code>java.lang.String</code> | A unique namespace that identifies the option's associated AWS resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.optionName">optionName</a></code> | <code>java.lang.String</code> | The name of the configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | A unique resource name for the option setting. Use it for a time–based scaling configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.value">value</a></code> | <code>java.lang.String</code> | The current value for the configuration option. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

A unique namespace that identifies the option's associated AWS resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#namespace ElasticbeanstalkConfigurationTemplate#namespace}

---

##### `optionName`<sup>Optional</sup> <a name="optionName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.optionName"></a>

```java
public java.lang.String getOptionName();
```

- *Type:* java.lang.String

The name of the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#option_name ElasticbeanstalkConfigurationTemplate#option_name}

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

A unique resource name for the option setting. Use it for a time–based scaling configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#resource_name ElasticbeanstalkConfigurationTemplate#resource_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The current value for the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#value ElasticbeanstalkConfigurationTemplate#value}

---

### ElasticbeanstalkConfigurationTemplateSourceConfiguration <a name="ElasticbeanstalkConfigurationTemplateSourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_configuration_template.ElasticbeanstalkConfigurationTemplateSourceConfiguration;

ElasticbeanstalkConfigurationTemplateSourceConfiguration.builder()
//  .applicationName(java.lang.String)
//  .templateName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | The name of the application associated with the configuration. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.templateName">templateName</a></code> | <code>java.lang.String</code> | The name of the configuration template. |

---

##### `applicationName`<sup>Optional</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

The name of the application associated with the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#application_name ElasticbeanstalkConfigurationTemplate#application_name}

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

The name of the configuration template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#template_name ElasticbeanstalkConfigurationTemplate#template_name}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticbeanstalkConfigurationTemplateOptionSettingsList <a name="ElasticbeanstalkConfigurationTemplateOptionSettingsList" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_configuration_template.ElasticbeanstalkConfigurationTemplateOptionSettingsList;

new ElasticbeanstalkConfigurationTemplateOptionSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.get"></a>

```java
public ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticbeanstalkConfigurationTemplateOptionSettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>>

---


### ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference <a name="ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_configuration_template.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference;

new ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetOptionName">resetOptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetResourceName">resetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOptionName` <a name="resetOptionName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetOptionName"></a>

```java
public void resetOptionName()
```

##### `resetResourceName` <a name="resetResourceName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetResourceName"></a>

```java
public void resetResourceName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionNameInput">optionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceNameInput">resourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionName">optionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `optionNameInput`<sup>Optional</sup> <a name="optionNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionNameInput"></a>

```java
public java.lang.String getOptionNameInput();
```

- *Type:* java.lang.String

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceNameInput"></a>

```java
public java.lang.String getResourceNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `optionName`<sup>Required</sup> <a name="optionName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionName"></a>

```java
public java.lang.String getOptionName();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticbeanstalkConfigurationTemplateOptionSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>

---


### ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference <a name="ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_configuration_template.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference;

new ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetApplicationName">resetApplicationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetTemplateName">resetTemplateName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationName` <a name="resetApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetApplicationName"></a>

```java
public void resetApplicationName()
```

##### `resetTemplateName` <a name="resetTemplateName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetTemplateName"></a>

```java
public void resetTemplateName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationNameInput">applicationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateNameInput">templateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateName">templateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationNameInput`<sup>Optional</sup> <a name="applicationNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationNameInput"></a>

```java
public java.lang.String getApplicationNameInput();
```

- *Type:* java.lang.String

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateNameInput"></a>

```java
public java.lang.String getTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticbeanstalkConfigurationTemplateSourceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

---



