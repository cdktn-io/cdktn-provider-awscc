# `elasticbeanstalkConfigurationTemplate` Submodule <a name="`elasticbeanstalkConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticbeanstalkConfigurationTemplate <a name="ElasticbeanstalkConfigurationTemplate" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template awscc_elasticbeanstalk_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_configuration_template

elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_name: str,
  description: str = None,
  environment_id: str = None,
  option_settings: IResolvable | typing.List[ElasticbeanstalkConfigurationTemplateOptionSettings] = None,
  platform_arn: str = None,
  solution_stack_name: str = None,
  source_configuration: ElasticbeanstalkConfigurationTemplateSourceConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.applicationName">application_name</a></code> | <code>str</code> | The name of the Elastic Beanstalk application to associate with this configuration template. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description for this configuration. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.environmentId">environment_id</a></code> | <code>str</code> | The ID of an environment whose settings you want to use to create the configuration template. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.optionSettings">option_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>]</code> | Option values for the Elastic Beanstalk configuration, such as the instance type. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.platformArn">platform_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the custom platform. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.solutionStackName">solution_stack_name</a></code> | <code>str</code> | The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.sourceConfiguration">source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | An Elastic Beanstalk configuration template to base this one on. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.applicationName"></a>

- *Type:* str

The name of the Elastic Beanstalk application to associate with this configuration template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#application_name ElasticbeanstalkConfigurationTemplate#application_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.description"></a>

- *Type:* str

An optional description for this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#description ElasticbeanstalkConfigurationTemplate#description}

---

##### `environment_id`<sup>Optional</sup> <a name="environment_id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.environmentId"></a>

- *Type:* str

The ID of an environment whose settings you want to use to create the configuration template.

You must specify EnvironmentId if you don't specify PlatformArn, SolutionStackName, or SourceConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#environment_id ElasticbeanstalkConfigurationTemplate#environment_id}

---

##### `option_settings`<sup>Optional</sup> <a name="option_settings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.optionSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>]

Option values for the Elastic Beanstalk configuration, such as the instance type.

If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the AWS Elastic Beanstalk Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#option_settings ElasticbeanstalkConfigurationTemplate#option_settings}

---

##### `platform_arn`<sup>Optional</sup> <a name="platform_arn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.platformArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the custom platform.

For more information, see [Custom Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html) in the AWS Elastic Beanstalk Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#platform_arn ElasticbeanstalkConfigurationTemplate#platform_arn}

---

##### `solution_stack_name`<sup>Optional</sup> <a name="solution_stack_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.solutionStackName"></a>

- *Type:* str

The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses.

For example, 64bit Amazon Linux 2013.09 running Tomcat 7 Java 7. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see [Supported Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html) in the AWS Elastic Beanstalk Developer Guide.

You must specify SolutionStackName if you don't specify PlatformArn, EnvironmentId, or SourceConfiguration.

Use the ListAvailableSolutionStacks API to obtain a list of available solution stacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#solution_stack_name ElasticbeanstalkConfigurationTemplate#solution_stack_name}

---

##### `source_configuration`<sup>Optional</sup> <a name="source_configuration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.sourceConfiguration"></a>

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
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putOptionSettings">put_option_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putSourceConfiguration">put_source_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetEnvironmentId">reset_environment_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOptionSettings">reset_option_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetPlatformArn">reset_platform_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSolutionStackName">reset_solution_stack_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSourceConfiguration">reset_source_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_option_settings` <a name="put_option_settings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putOptionSettings"></a>

```python
def put_option_settings(
  value: IResolvable | typing.List[ElasticbeanstalkConfigurationTemplateOptionSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putOptionSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>]

---

##### `put_source_configuration` <a name="put_source_configuration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putSourceConfiguration"></a>

```python
def put_source_configuration(
  application_name: str = None,
  template_name: str = None
) -> None
```

###### `application_name`<sup>Optional</sup> <a name="application_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putSourceConfiguration.parameter.applicationName"></a>

- *Type:* str

The name of the application associated with the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#application_name ElasticbeanstalkConfigurationTemplate#application_name}

---

###### `template_name`<sup>Optional</sup> <a name="template_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putSourceConfiguration.parameter.templateName"></a>

- *Type:* str

The name of the configuration template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#template_name ElasticbeanstalkConfigurationTemplate#template_name}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_environment_id` <a name="reset_environment_id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetEnvironmentId"></a>

```python
def reset_environment_id() -> None
```

##### `reset_option_settings` <a name="reset_option_settings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOptionSettings"></a>

```python
def reset_option_settings() -> None
```

##### `reset_platform_arn` <a name="reset_platform_arn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetPlatformArn"></a>

```python
def reset_platform_arn() -> None
```

##### `reset_solution_stack_name` <a name="reset_solution_stack_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSolutionStackName"></a>

```python
def reset_solution_stack_name() -> None
```

##### `reset_source_configuration` <a name="reset_source_configuration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSourceConfiguration"></a>

```python
def reset_source_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ElasticbeanstalkConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_configuration_template

elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_configuration_template

elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_configuration_template

elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_configuration_template

elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ElasticbeanstalkConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ElasticbeanstalkConfigurationTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ElasticbeanstalkConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElasticbeanstalkConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettings">option_settings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList">ElasticbeanstalkConfigurationTemplateOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfiguration">source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference">ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationNameInput">application_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentIdInput">environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettingsInput">option_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArnInput">platform_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackNameInput">solution_stack_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfigurationInput">source_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArn">platform_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackName">solution_stack_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `option_settings`<sup>Required</sup> <a name="option_settings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettings"></a>

```python
option_settings: ElasticbeanstalkConfigurationTemplateOptionSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList">ElasticbeanstalkConfigurationTemplateOptionSettingsList</a>

---

##### `source_configuration`<sup>Required</sup> <a name="source_configuration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfiguration"></a>

```python
source_configuration: ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference">ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference</a>

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

##### `application_name_input`<sup>Optional</sup> <a name="application_name_input" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationNameInput"></a>

```python
application_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environment_id_input`<sup>Optional</sup> <a name="environment_id_input" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentIdInput"></a>

```python
environment_id_input: str
```

- *Type:* str

---

##### `option_settings_input`<sup>Optional</sup> <a name="option_settings_input" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettingsInput"></a>

```python
option_settings_input: IResolvable | typing.List[ElasticbeanstalkConfigurationTemplateOptionSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>]

---

##### `platform_arn_input`<sup>Optional</sup> <a name="platform_arn_input" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArnInput"></a>

```python
platform_arn_input: str
```

- *Type:* str

---

##### `solution_stack_name_input`<sup>Optional</sup> <a name="solution_stack_name_input" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackNameInput"></a>

```python
solution_stack_name_input: str
```

- *Type:* str

---

##### `source_configuration_input`<sup>Optional</sup> <a name="source_configuration_input" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfigurationInput"></a>

```python
source_configuration_input: IResolvable | ElasticbeanstalkConfigurationTemplateSourceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `platform_arn`<sup>Required</sup> <a name="platform_arn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArn"></a>

```python
platform_arn: str
```

- *Type:* str

---

##### `solution_stack_name`<sup>Required</sup> <a name="solution_stack_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackName"></a>

```python
solution_stack_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticbeanstalkConfigurationTemplateConfig <a name="ElasticbeanstalkConfigurationTemplateConfig" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_configuration_template

elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_name: str,
  description: str = None,
  environment_id: str = None,
  option_settings: IResolvable | typing.List[ElasticbeanstalkConfigurationTemplateOptionSettings] = None,
  platform_arn: str = None,
  solution_stack_name: str = None,
  source_configuration: ElasticbeanstalkConfigurationTemplateSourceConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.applicationName">application_name</a></code> | <code>str</code> | The name of the Elastic Beanstalk application to associate with this configuration template. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.description">description</a></code> | <code>str</code> | An optional description for this configuration. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.environmentId">environment_id</a></code> | <code>str</code> | The ID of an environment whose settings you want to use to create the configuration template. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.optionSettings">option_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>]</code> | Option values for the Elastic Beanstalk configuration, such as the instance type. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.platformArn">platform_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the custom platform. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.solutionStackName">solution_stack_name</a></code> | <code>str</code> | The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.sourceConfiguration">source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | An Elastic Beanstalk configuration template to base this one on. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

The name of the Elastic Beanstalk application to associate with this configuration template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#application_name ElasticbeanstalkConfigurationTemplate#application_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description for this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#description ElasticbeanstalkConfigurationTemplate#description}

---

##### `environment_id`<sup>Optional</sup> <a name="environment_id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

The ID of an environment whose settings you want to use to create the configuration template.

You must specify EnvironmentId if you don't specify PlatformArn, SolutionStackName, or SourceConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#environment_id ElasticbeanstalkConfigurationTemplate#environment_id}

---

##### `option_settings`<sup>Optional</sup> <a name="option_settings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.optionSettings"></a>

```python
option_settings: IResolvable | typing.List[ElasticbeanstalkConfigurationTemplateOptionSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>]

Option values for the Elastic Beanstalk configuration, such as the instance type.

If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the AWS Elastic Beanstalk Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#option_settings ElasticbeanstalkConfigurationTemplate#option_settings}

---

##### `platform_arn`<sup>Optional</sup> <a name="platform_arn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.platformArn"></a>

```python
platform_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the custom platform.

For more information, see [Custom Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html) in the AWS Elastic Beanstalk Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#platform_arn ElasticbeanstalkConfigurationTemplate#platform_arn}

---

##### `solution_stack_name`<sup>Optional</sup> <a name="solution_stack_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.solutionStackName"></a>

```python
solution_stack_name: str
```

- *Type:* str

The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses.

For example, 64bit Amazon Linux 2013.09 running Tomcat 7 Java 7. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see [Supported Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html) in the AWS Elastic Beanstalk Developer Guide.

You must specify SolutionStackName if you don't specify PlatformArn, EnvironmentId, or SourceConfiguration.

Use the ListAvailableSolutionStacks API to obtain a list of available solution stacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#solution_stack_name ElasticbeanstalkConfigurationTemplate#solution_stack_name}

---

##### `source_configuration`<sup>Optional</sup> <a name="source_configuration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.sourceConfiguration"></a>

```python
source_configuration: ElasticbeanstalkConfigurationTemplateSourceConfiguration
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

```python
from cdktn_provider_awscc import elasticbeanstalk_configuration_template

elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings(
  namespace: str = None,
  option_name: str = None,
  resource_name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.namespace">namespace</a></code> | <code>str</code> | A unique namespace that identifies the option's associated AWS resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.optionName">option_name</a></code> | <code>str</code> | The name of the configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.resourceName">resource_name</a></code> | <code>str</code> | A unique resource name for the option setting. Use it for a time–based scaling configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.value">value</a></code> | <code>str</code> | The current value for the configuration option. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

A unique namespace that identifies the option's associated AWS resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#namespace ElasticbeanstalkConfigurationTemplate#namespace}

---

##### `option_name`<sup>Optional</sup> <a name="option_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.optionName"></a>

```python
option_name: str
```

- *Type:* str

The name of the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#option_name ElasticbeanstalkConfigurationTemplate#option_name}

---

##### `resource_name`<sup>Optional</sup> <a name="resource_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

A unique resource name for the option setting. Use it for a time–based scaling configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#resource_name ElasticbeanstalkConfigurationTemplate#resource_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.value"></a>

```python
value: str
```

- *Type:* str

The current value for the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#value ElasticbeanstalkConfigurationTemplate#value}

---

### ElasticbeanstalkConfigurationTemplateSourceConfiguration <a name="ElasticbeanstalkConfigurationTemplateSourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_configuration_template

elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration(
  application_name: str = None,
  template_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.applicationName">application_name</a></code> | <code>str</code> | The name of the application associated with the configuration. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.templateName">template_name</a></code> | <code>str</code> | The name of the configuration template. |

---

##### `application_name`<sup>Optional</sup> <a name="application_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

The name of the application associated with the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#application_name ElasticbeanstalkConfigurationTemplate#application_name}

---

##### `template_name`<sup>Optional</sup> <a name="template_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

The name of the configuration template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticbeanstalk_configuration_template#template_name ElasticbeanstalkConfigurationTemplate#template_name}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticbeanstalkConfigurationTemplateOptionSettingsList <a name="ElasticbeanstalkConfigurationTemplateOptionSettingsList" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_configuration_template

elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticbeanstalkConfigurationTemplateOptionSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>]

---


### ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference <a name="ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_configuration_template

elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetOptionName">reset_option_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetResourceName">reset_resource_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_option_name` <a name="reset_option_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetOptionName"></a>

```python
def reset_option_name() -> None
```

##### `reset_resource_name` <a name="reset_resource_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetResourceName"></a>

```python
def reset_resource_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionNameInput">option_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionName">option_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `option_name_input`<sup>Optional</sup> <a name="option_name_input" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionNameInput"></a>

```python
option_name_input: str
```

- *Type:* str

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `option_name`<sup>Required</sup> <a name="option_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionName"></a>

```python
option_name: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticbeanstalkConfigurationTemplateOptionSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings">ElasticbeanstalkConfigurationTemplateOptionSettings</a>

---


### ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference <a name="ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_configuration_template

elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetApplicationName">reset_application_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetTemplateName">reset_template_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_name` <a name="reset_application_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetApplicationName"></a>

```python
def reset_application_name() -> None
```

##### `reset_template_name` <a name="reset_template_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetTemplateName"></a>

```python
def reset_template_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationNameInput">application_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateNameInput">template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_name_input`<sup>Optional</sup> <a name="application_name_input" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationNameInput"></a>

```python
application_name_input: str
```

- *Type:* str

---

##### `template_name_input`<sup>Optional</sup> <a name="template_name_input" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateNameInput"></a>

```python
template_name_input: str
```

- *Type:* str

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticbeanstalkConfigurationTemplateSourceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

---



