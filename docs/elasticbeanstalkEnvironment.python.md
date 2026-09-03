# `elasticbeanstalkEnvironment` Submodule <a name="`elasticbeanstalkEnvironment` Submodule" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticbeanstalkEnvironment <a name="ElasticbeanstalkEnvironment" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment awscc_elasticbeanstalk_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_environment

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment(
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
  cname_prefix: str = None,
  description: str = None,
  environment_name: str = None,
  operations_role: str = None,
  option_settings: IResolvable | typing.List[ElasticbeanstalkEnvironmentOptionSettings] = None,
  platform_arn: str = None,
  solution_stack_name: str = None,
  tags: IResolvable | typing.List[ElasticbeanstalkEnvironmentTags] = None,
  template_name: str = None,
  tier: ElasticbeanstalkEnvironmentTier = None,
  version_label: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.applicationName">application_name</a></code> | <code>str</code> | The name of the application that is associated with this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.cnamePrefix">cname_prefix</a></code> | <code>str</code> | If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.description">description</a></code> | <code>str</code> | Your description for this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.environmentName">environment_name</a></code> | <code>str</code> | A unique name for the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.operationsRole">operations_role</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.optionSettings">option_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>]</code> | Key-value pairs defining configuration options for this environment, such as the instance type. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.platformArn">platform_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the custom platform to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.solutionStackName">solution_stack_name</a></code> | <code>str</code> | The name of an Elastic Beanstalk solution stack (platform version) to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>]</code> | Specifies the tags applied to resources in the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.templateName">template_name</a></code> | <code>str</code> | The name of the Elastic Beanstalk configuration template to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.tier">tier</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a></code> | Specifies the tier to use in creating this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.versionLabel">version_label</a></code> | <code>str</code> | The name of the application version to deploy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.applicationName"></a>

- *Type:* str

The name of the application that is associated with this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#application_name ElasticbeanstalkEnvironment#application_name}

---

##### `cname_prefix`<sup>Optional</sup> <a name="cname_prefix" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.cnamePrefix"></a>

- *Type:* str

If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL.

If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#cname_prefix ElasticbeanstalkEnvironment#cname_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.description"></a>

- *Type:* str

Your description for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#description ElasticbeanstalkEnvironment#description}

---

##### `environment_name`<sup>Optional</sup> <a name="environment_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.environmentName"></a>

- *Type:* str

A unique name for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#environment_name ElasticbeanstalkEnvironment#environment_name}

---

##### `operations_role`<sup>Optional</sup> <a name="operations_role" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.operationsRole"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#operations_role ElasticbeanstalkEnvironment#operations_role}

---

##### `option_settings`<sup>Optional</sup> <a name="option_settings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.optionSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>]

Key-value pairs defining configuration options for this environment, such as the instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#option_settings ElasticbeanstalkEnvironment#option_settings}

---

##### `platform_arn`<sup>Optional</sup> <a name="platform_arn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.platformArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the custom platform to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#platform_arn ElasticbeanstalkEnvironment#platform_arn}

---

##### `solution_stack_name`<sup>Optional</sup> <a name="solution_stack_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.solutionStackName"></a>

- *Type:* str

The name of an Elastic Beanstalk solution stack (platform version) to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#solution_stack_name ElasticbeanstalkEnvironment#solution_stack_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>]

Specifies the tags applied to resources in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#tags ElasticbeanstalkEnvironment#tags}

---

##### `template_name`<sup>Optional</sup> <a name="template_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.templateName"></a>

- *Type:* str

The name of the Elastic Beanstalk configuration template to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#template_name ElasticbeanstalkEnvironment#template_name}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.tier"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

Specifies the tier to use in creating this environment.

The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#tier ElasticbeanstalkEnvironment#tier}

---

##### `version_label`<sup>Optional</sup> <a name="version_label" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.Initializer.parameter.versionLabel"></a>

- *Type:* str

The name of the application version to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#version_label ElasticbeanstalkEnvironment#version_label}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putOptionSettings">put_option_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTier">put_tier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetCnamePrefix">reset_cname_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetEnvironmentName">reset_environment_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOperationsRole">reset_operations_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOptionSettings">reset_option_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetPlatformArn">reset_platform_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetSolutionStackName">reset_solution_stack_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTemplateName">reset_template_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTier">reset_tier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetVersionLabel">reset_version_label</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_option_settings` <a name="put_option_settings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putOptionSettings"></a>

```python
def put_option_settings(
  value: IResolvable | typing.List[ElasticbeanstalkEnvironmentOptionSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putOptionSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ElasticbeanstalkEnvironmentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>]

---

##### `put_tier` <a name="put_tier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTier"></a>

```python
def put_tier(
  name: str = None,
  type: str = None,
  version: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTier.parameter.name"></a>

- *Type:* str

The name of this environment tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#name ElasticbeanstalkEnvironment#name}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTier.parameter.type"></a>

- *Type:* str

The type of this environment tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#type ElasticbeanstalkEnvironment#type}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.putTier.parameter.version"></a>

- *Type:* str

The version of this environment tier.

When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#version ElasticbeanstalkEnvironment#version}

---

##### `reset_cname_prefix` <a name="reset_cname_prefix" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetCnamePrefix"></a>

```python
def reset_cname_prefix() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_environment_name` <a name="reset_environment_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetEnvironmentName"></a>

```python
def reset_environment_name() -> None
```

##### `reset_operations_role` <a name="reset_operations_role" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOperationsRole"></a>

```python
def reset_operations_role() -> None
```

##### `reset_option_settings` <a name="reset_option_settings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetOptionSettings"></a>

```python
def reset_option_settings() -> None
```

##### `reset_platform_arn` <a name="reset_platform_arn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetPlatformArn"></a>

```python
def reset_platform_arn() -> None
```

##### `reset_solution_stack_name` <a name="reset_solution_stack_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetSolutionStackName"></a>

```python
def reset_solution_stack_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_name` <a name="reset_template_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTemplateName"></a>

```python
def reset_template_name() -> None
```

##### `reset_tier` <a name="reset_tier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetTier"></a>

```python
def reset_tier() -> None
```

##### `reset_version_label` <a name="reset_version_label" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.resetVersionLabel"></a>

```python
def reset_version_label() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ElasticbeanstalkEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isConstruct"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_environment

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_environment

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_environment

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_environment

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ElasticbeanstalkEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ElasticbeanstalkEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ElasticbeanstalkEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElasticbeanstalkEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.endpointUrl">endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.optionSettings">option_settings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList">ElasticbeanstalkEnvironmentOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList">ElasticbeanstalkEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tier">tier</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference">ElasticbeanstalkEnvironmentTierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.applicationNameInput">application_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cnamePrefixInput">cname_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.environmentNameInput">environment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.operationsRoleInput">operations_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.optionSettingsInput">option_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.platformArnInput">platform_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.solutionStackNameInput">solution_stack_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.templateNameInput">template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tierInput">tier_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.versionLabelInput">version_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cnamePrefix">cname_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.environmentName">environment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.operationsRole">operations_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.platformArn">platform_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.solutionStackName">solution_stack_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.versionLabel">version_label</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_url`<sup>Required</sup> <a name="endpoint_url" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.endpointUrl"></a>

```python
endpoint_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `option_settings`<sup>Required</sup> <a name="option_settings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.optionSettings"></a>

```python
option_settings: ElasticbeanstalkEnvironmentOptionSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList">ElasticbeanstalkEnvironmentOptionSettingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tags"></a>

```python
tags: ElasticbeanstalkEnvironmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList">ElasticbeanstalkEnvironmentTagsList</a>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tier"></a>

```python
tier: ElasticbeanstalkEnvironmentTierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference">ElasticbeanstalkEnvironmentTierOutputReference</a>

---

##### `application_name_input`<sup>Optional</sup> <a name="application_name_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.applicationNameInput"></a>

```python
application_name_input: str
```

- *Type:* str

---

##### `cname_prefix_input`<sup>Optional</sup> <a name="cname_prefix_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cnamePrefixInput"></a>

```python
cname_prefix_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environment_name_input`<sup>Optional</sup> <a name="environment_name_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.environmentNameInput"></a>

```python
environment_name_input: str
```

- *Type:* str

---

##### `operations_role_input`<sup>Optional</sup> <a name="operations_role_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.operationsRoleInput"></a>

```python
operations_role_input: str
```

- *Type:* str

---

##### `option_settings_input`<sup>Optional</sup> <a name="option_settings_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.optionSettingsInput"></a>

```python
option_settings_input: IResolvable | typing.List[ElasticbeanstalkEnvironmentOptionSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>]

---

##### `platform_arn_input`<sup>Optional</sup> <a name="platform_arn_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.platformArnInput"></a>

```python
platform_arn_input: str
```

- *Type:* str

---

##### `solution_stack_name_input`<sup>Optional</sup> <a name="solution_stack_name_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.solutionStackNameInput"></a>

```python
solution_stack_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ElasticbeanstalkEnvironmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>]

---

##### `template_name_input`<sup>Optional</sup> <a name="template_name_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.templateNameInput"></a>

```python
template_name_input: str
```

- *Type:* str

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tierInput"></a>

```python
tier_input: IResolvable | ElasticbeanstalkEnvironmentTier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

---

##### `version_label_input`<sup>Optional</sup> <a name="version_label_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.versionLabelInput"></a>

```python
version_label_input: str
```

- *Type:* str

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `cname_prefix`<sup>Required</sup> <a name="cname_prefix" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.cnamePrefix"></a>

```python
cname_prefix: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment_name`<sup>Required</sup> <a name="environment_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.environmentName"></a>

```python
environment_name: str
```

- *Type:* str

---

##### `operations_role`<sup>Required</sup> <a name="operations_role" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.operationsRole"></a>

```python
operations_role: str
```

- *Type:* str

---

##### `platform_arn`<sup>Required</sup> <a name="platform_arn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.platformArn"></a>

```python
platform_arn: str
```

- *Type:* str

---

##### `solution_stack_name`<sup>Required</sup> <a name="solution_stack_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.solutionStackName"></a>

```python
solution_stack_name: str
```

- *Type:* str

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

##### `version_label`<sup>Required</sup> <a name="version_label" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.versionLabel"></a>

```python
version_label: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticbeanstalkEnvironmentConfig <a name="ElasticbeanstalkEnvironmentConfig" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_environment

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_name: str,
  cname_prefix: str = None,
  description: str = None,
  environment_name: str = None,
  operations_role: str = None,
  option_settings: IResolvable | typing.List[ElasticbeanstalkEnvironmentOptionSettings] = None,
  platform_arn: str = None,
  solution_stack_name: str = None,
  tags: IResolvable | typing.List[ElasticbeanstalkEnvironmentTags] = None,
  template_name: str = None,
  tier: ElasticbeanstalkEnvironmentTier = None,
  version_label: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.applicationName">application_name</a></code> | <code>str</code> | The name of the application that is associated with this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.cnamePrefix">cname_prefix</a></code> | <code>str</code> | If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.description">description</a></code> | <code>str</code> | Your description for this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.environmentName">environment_name</a></code> | <code>str</code> | A unique name for the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.operationsRole">operations_role</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.optionSettings">option_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>]</code> | Key-value pairs defining configuration options for this environment, such as the instance type. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.platformArn">platform_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the custom platform to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.solutionStackName">solution_stack_name</a></code> | <code>str</code> | The name of an Elastic Beanstalk solution stack (platform version) to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>]</code> | Specifies the tags applied to resources in the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.templateName">template_name</a></code> | <code>str</code> | The name of the Elastic Beanstalk configuration template to use with the environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.tier">tier</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a></code> | Specifies the tier to use in creating this environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.versionLabel">version_label</a></code> | <code>str</code> | The name of the application version to deploy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

The name of the application that is associated with this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#application_name ElasticbeanstalkEnvironment#application_name}

---

##### `cname_prefix`<sup>Optional</sup> <a name="cname_prefix" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.cnamePrefix"></a>

```python
cname_prefix: str
```

- *Type:* str

If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL.

If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#cname_prefix ElasticbeanstalkEnvironment#cname_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Your description for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#description ElasticbeanstalkEnvironment#description}

---

##### `environment_name`<sup>Optional</sup> <a name="environment_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.environmentName"></a>

```python
environment_name: str
```

- *Type:* str

A unique name for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#environment_name ElasticbeanstalkEnvironment#environment_name}

---

##### `operations_role`<sup>Optional</sup> <a name="operations_role" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.operationsRole"></a>

```python
operations_role: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#operations_role ElasticbeanstalkEnvironment#operations_role}

---

##### `option_settings`<sup>Optional</sup> <a name="option_settings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.optionSettings"></a>

```python
option_settings: IResolvable | typing.List[ElasticbeanstalkEnvironmentOptionSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>]

Key-value pairs defining configuration options for this environment, such as the instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#option_settings ElasticbeanstalkEnvironment#option_settings}

---

##### `platform_arn`<sup>Optional</sup> <a name="platform_arn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.platformArn"></a>

```python
platform_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the custom platform to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#platform_arn ElasticbeanstalkEnvironment#platform_arn}

---

##### `solution_stack_name`<sup>Optional</sup> <a name="solution_stack_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.solutionStackName"></a>

```python
solution_stack_name: str
```

- *Type:* str

The name of an Elastic Beanstalk solution stack (platform version) to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#solution_stack_name ElasticbeanstalkEnvironment#solution_stack_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ElasticbeanstalkEnvironmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>]

Specifies the tags applied to resources in the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#tags ElasticbeanstalkEnvironment#tags}

---

##### `template_name`<sup>Optional</sup> <a name="template_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

The name of the Elastic Beanstalk configuration template to use with the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#template_name ElasticbeanstalkEnvironment#template_name}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.tier"></a>

```python
tier: ElasticbeanstalkEnvironmentTier
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

Specifies the tier to use in creating this environment.

The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#tier ElasticbeanstalkEnvironment#tier}

---

##### `version_label`<sup>Optional</sup> <a name="version_label" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentConfig.property.versionLabel"></a>

```python
version_label: str
```

- *Type:* str

The name of the application version to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#version_label ElasticbeanstalkEnvironment#version_label}

---

### ElasticbeanstalkEnvironmentOptionSettings <a name="ElasticbeanstalkEnvironmentOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_environment

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings(
  namespace: str = None,
  option_name: str = None,
  resource_name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.namespace">namespace</a></code> | <code>str</code> | A unique namespace that identifies the option's associated AWS resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.optionName">option_name</a></code> | <code>str</code> | The name of the configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.resourceName">resource_name</a></code> | <code>str</code> | A unique resource name for the option setting. Use it for a time–based scaling configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.value">value</a></code> | <code>str</code> | The current value for the configuration option. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

A unique namespace that identifies the option's associated AWS resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#namespace ElasticbeanstalkEnvironment#namespace}

---

##### `option_name`<sup>Optional</sup> <a name="option_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.optionName"></a>

```python
option_name: str
```

- *Type:* str

The name of the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#option_name ElasticbeanstalkEnvironment#option_name}

---

##### `resource_name`<sup>Optional</sup> <a name="resource_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

A unique resource name for the option setting. Use it for a time–based scaling configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#resource_name ElasticbeanstalkEnvironment#resource_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings.property.value"></a>

```python
value: str
```

- *Type:* str

The current value for the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#value ElasticbeanstalkEnvironment#value}

---

### ElasticbeanstalkEnvironmentTags <a name="ElasticbeanstalkEnvironmentTags" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_environment

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#key ElasticbeanstalkEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#value ElasticbeanstalkEnvironment#value}

---

### ElasticbeanstalkEnvironmentTier <a name="ElasticbeanstalkEnvironmentTier" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_environment

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier(
  name: str = None,
  type: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.name">name</a></code> | <code>str</code> | The name of this environment tier. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.type">type</a></code> | <code>str</code> | The type of this environment tier. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.version">version</a></code> | <code>str</code> | The version of this environment tier. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this environment tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#name ElasticbeanstalkEnvironment#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.type"></a>

```python
type: str
```

- *Type:* str

The type of this environment tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#type ElasticbeanstalkEnvironment#type}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier.property.version"></a>

```python
version: str
```

- *Type:* str

The version of this environment tier.

When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_environment#version ElasticbeanstalkEnvironment#version}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticbeanstalkEnvironmentOptionSettingsList <a name="ElasticbeanstalkEnvironmentOptionSettingsList" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_environment

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticbeanstalkEnvironmentOptionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticbeanstalkEnvironmentOptionSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>]

---


### ElasticbeanstalkEnvironmentOptionSettingsOutputReference <a name="ElasticbeanstalkEnvironmentOptionSettingsOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_environment

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetOptionName">reset_option_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetResourceName">reset_resource_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_option_name` <a name="reset_option_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetOptionName"></a>

```python
def reset_option_name() -> None
```

##### `reset_resource_name` <a name="reset_resource_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetResourceName"></a>

```python
def reset_resource_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionNameInput">option_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionName">option_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `option_name_input`<sup>Optional</sup> <a name="option_name_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionNameInput"></a>

```python
option_name_input: str
```

- *Type:* str

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `option_name`<sup>Required</sup> <a name="option_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.optionName"></a>

```python
option_name: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticbeanstalkEnvironmentOptionSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentOptionSettings">ElasticbeanstalkEnvironmentOptionSettings</a>

---


### ElasticbeanstalkEnvironmentTagsList <a name="ElasticbeanstalkEnvironmentTagsList" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_environment

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticbeanstalkEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticbeanstalkEnvironmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>]

---


### ElasticbeanstalkEnvironmentTagsOutputReference <a name="ElasticbeanstalkEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_environment

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticbeanstalkEnvironmentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTags">ElasticbeanstalkEnvironmentTags</a>

---


### ElasticbeanstalkEnvironmentTierOutputReference <a name="ElasticbeanstalkEnvironmentTierOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_environment

elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTierOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticbeanstalkEnvironmentTier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkEnvironment.ElasticbeanstalkEnvironmentTier">ElasticbeanstalkEnvironmentTier</a>

---



