# `elasticbeanstalkApplicationVersion` Submodule <a name="`elasticbeanstalkApplicationVersion` Submodule" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticbeanstalkApplicationVersion <a name="ElasticbeanstalkApplicationVersion" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version awscc_elasticbeanstalk_application_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application_version

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion(
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
  build_configuration: ElasticbeanstalkApplicationVersionBuildConfiguration = None,
  description: str = None,
  image_configuration: ElasticbeanstalkApplicationVersionImageConfiguration = None,
  process: bool | IResolvable = None,
  source_bundle: ElasticbeanstalkApplicationVersionSourceBundle = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.applicationName">application_name</a></code> | <code>str</code> | The name of the Elastic Beanstalk application that is associated with this application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.buildConfiguration">build_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a></code> | Settings for an AWS CodeBuild build that packages and builds an application version from source code. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of this application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.imageConfiguration">image_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a></code> | Configuration for image-based application versions. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.process">process</a></code> | <code>bool \| cdktn.IResolvable</code> | Pre-process and validate the environment manifest (`env.yaml`) and configuration files in the source bundle. Leave unset for the service default. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.sourceBundle">source_bundle</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a></code> | The Amazon S3 bucket and key that identify the location of the source bundle for this version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.applicationName"></a>

- *Type:* str

The name of the Elastic Beanstalk application that is associated with this application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#application_name ElasticbeanstalkApplicationVersion#application_name}

---

##### `build_configuration`<sup>Optional</sup> <a name="build_configuration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.buildConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

Settings for an AWS CodeBuild build that packages and builds an application version from source code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#build_configuration ElasticbeanstalkApplicationVersion#build_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.description"></a>

- *Type:* str

A description of this application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#description ElasticbeanstalkApplicationVersion#description}

---

##### `image_configuration`<sup>Optional</sup> <a name="image_configuration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.imageConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

Configuration for image-based application versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#image_configuration ElasticbeanstalkApplicationVersion#image_configuration}

---

##### `process`<sup>Optional</sup> <a name="process" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.process"></a>

- *Type:* bool | cdktn.IResolvable

Pre-process and validate the environment manifest (`env.yaml`) and configuration files in the source bundle. Leave unset for the service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#process ElasticbeanstalkApplicationVersion#process}

---

##### `source_bundle`<sup>Optional</sup> <a name="source_bundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.sourceBundle"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

The Amazon S3 bucket and key that identify the location of the source bundle for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#source_bundle ElasticbeanstalkApplicationVersion#source_bundle}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putBuildConfiguration">put_build_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putImageConfiguration">put_image_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putSourceBundle">put_source_bundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetBuildConfiguration">reset_build_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetImageConfiguration">reset_image_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetProcess">reset_process</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetSourceBundle">reset_source_bundle</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_build_configuration` <a name="put_build_configuration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putBuildConfiguration"></a>

```python
def put_build_configuration(
  artifact_name: str = None,
  code_build_service_role: str = None,
  compute_type: str = None,
  image: str = None,
  timeout_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `artifact_name`<sup>Optional</sup> <a name="artifact_name" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putBuildConfiguration.parameter.artifactName"></a>

- *Type:* str

The name of the build artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#artifact_name ElasticbeanstalkApplicationVersion#artifact_name}

---

###### `code_build_service_role`<sup>Optional</sup> <a name="code_build_service_role" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putBuildConfiguration.parameter.codeBuildServiceRole"></a>

- *Type:* str

The ARN of the IAM role that AWS CodeBuild assumes to build the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#code_build_service_role ElasticbeanstalkApplicationVersion#code_build_service_role}

---

###### `compute_type`<sup>Optional</sup> <a name="compute_type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putBuildConfiguration.parameter.computeType"></a>

- *Type:* str

The compute type for the CodeBuild build environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#compute_type ElasticbeanstalkApplicationVersion#compute_type}

---

###### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putBuildConfiguration.parameter.image"></a>

- *Type:* str

The CodeBuild image used for the build environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#image ElasticbeanstalkApplicationVersion#image}

---

###### `timeout_in_minutes`<sup>Optional</sup> <a name="timeout_in_minutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putBuildConfiguration.parameter.timeoutInMinutes"></a>

- *Type:* typing.Union[int, float]

The timeout for the CodeBuild build, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#timeout_in_minutes ElasticbeanstalkApplicationVersion#timeout_in_minutes}

---

##### `put_image_configuration` <a name="put_image_configuration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putImageConfiguration"></a>

```python
def put_image_configuration(
  build_attribute: ElasticbeanstalkApplicationVersionImageConfigurationBuild = None,
  source: ElasticbeanstalkApplicationVersionImageConfigurationSource = None
) -> None
```

###### `build_attribute`<sup>Optional</sup> <a name="build_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putImageConfiguration.parameter.buildAttribute"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

Configuration for building a container image from source code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#build ElasticbeanstalkApplicationVersion#build}

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putImageConfiguration.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a>

The container image source for this version, as an ECR image URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#source ElasticbeanstalkApplicationVersion#source}

---

##### `put_source_bundle` <a name="put_source_bundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putSourceBundle"></a>

```python
def put_source_bundle(
  s3_bucket: str = None,
  s3_key: str = None
) -> None
```

###### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putSourceBundle.parameter.s3Bucket"></a>

- *Type:* str

The Amazon S3 bucket where the data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#s3_bucket ElasticbeanstalkApplicationVersion#s3_bucket}

---

###### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putSourceBundle.parameter.s3Key"></a>

- *Type:* str

The Amazon S3 key where the data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#s3_key ElasticbeanstalkApplicationVersion#s3_key}

---

##### `reset_build_configuration` <a name="reset_build_configuration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetBuildConfiguration"></a>

```python
def reset_build_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_image_configuration` <a name="reset_image_configuration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetImageConfiguration"></a>

```python
def reset_image_configuration() -> None
```

##### `reset_process` <a name="reset_process" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetProcess"></a>

```python
def reset_process() -> None
```

##### `reset_source_bundle` <a name="reset_source_bundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetSourceBundle"></a>

```python
def reset_source_bundle() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ElasticbeanstalkApplicationVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application_version

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application_version

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformResource"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application_version

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application_version

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ElasticbeanstalkApplicationVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ElasticbeanstalkApplicationVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ElasticbeanstalkApplicationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElasticbeanstalkApplicationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationVersionId">application_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.buildConfiguration">build_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference">ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.imageConfiguration">image_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.sourceBundle">source_bundle</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference">ElasticbeanstalkApplicationVersionSourceBundleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationNameInput">application_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.buildConfigurationInput">build_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.imageConfigurationInput">image_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.processInput">process_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.sourceBundleInput">source_bundle_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.process">process</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_version_id`<sup>Required</sup> <a name="application_version_id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationVersionId"></a>

```python
application_version_id: str
```

- *Type:* str

---

##### `build_configuration`<sup>Required</sup> <a name="build_configuration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.buildConfiguration"></a>

```python
build_configuration: ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference">ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_configuration`<sup>Required</sup> <a name="image_configuration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.imageConfiguration"></a>

```python
image_configuration: ElasticbeanstalkApplicationVersionImageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationOutputReference</a>

---

##### `source_bundle`<sup>Required</sup> <a name="source_bundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.sourceBundle"></a>

```python
source_bundle: ElasticbeanstalkApplicationVersionSourceBundleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference">ElasticbeanstalkApplicationVersionSourceBundleOutputReference</a>

---

##### `application_name_input`<sup>Optional</sup> <a name="application_name_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationNameInput"></a>

```python
application_name_input: str
```

- *Type:* str

---

##### `build_configuration_input`<sup>Optional</sup> <a name="build_configuration_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.buildConfigurationInput"></a>

```python
build_configuration_input: IResolvable | ElasticbeanstalkApplicationVersionBuildConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `image_configuration_input`<sup>Optional</sup> <a name="image_configuration_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.imageConfigurationInput"></a>

```python
image_configuration_input: IResolvable | ElasticbeanstalkApplicationVersionImageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

---

##### `process_input`<sup>Optional</sup> <a name="process_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.processInput"></a>

```python
process_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `source_bundle_input`<sup>Optional</sup> <a name="source_bundle_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.sourceBundleInput"></a>

```python
source_bundle_input: IResolvable | ElasticbeanstalkApplicationVersionSourceBundle
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `process`<sup>Required</sup> <a name="process" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.process"></a>

```python
process: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticbeanstalkApplicationVersionBuildConfiguration <a name="ElasticbeanstalkApplicationVersionBuildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application_version

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration(
  artifact_name: str = None,
  code_build_service_role: str = None,
  compute_type: str = None,
  image: str = None,
  timeout_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.artifactName">artifact_name</a></code> | <code>str</code> | The name of the build artifact. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.codeBuildServiceRole">code_build_service_role</a></code> | <code>str</code> | The ARN of the IAM role that AWS CodeBuild assumes to build the application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.computeType">compute_type</a></code> | <code>str</code> | The compute type for the CodeBuild build environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.image">image</a></code> | <code>str</code> | The CodeBuild image used for the build environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | The timeout for the CodeBuild build, in minutes. |

---

##### `artifact_name`<sup>Optional</sup> <a name="artifact_name" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.artifactName"></a>

```python
artifact_name: str
```

- *Type:* str

The name of the build artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#artifact_name ElasticbeanstalkApplicationVersion#artifact_name}

---

##### `code_build_service_role`<sup>Optional</sup> <a name="code_build_service_role" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.codeBuildServiceRole"></a>

```python
code_build_service_role: str
```

- *Type:* str

The ARN of the IAM role that AWS CodeBuild assumes to build the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#code_build_service_role ElasticbeanstalkApplicationVersion#code_build_service_role}

---

##### `compute_type`<sup>Optional</sup> <a name="compute_type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.computeType"></a>

```python
compute_type: str
```

- *Type:* str

The compute type for the CodeBuild build environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#compute_type ElasticbeanstalkApplicationVersion#compute_type}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.image"></a>

```python
image: str
```

- *Type:* str

The CodeBuild image used for the build environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#image ElasticbeanstalkApplicationVersion#image}

---

##### `timeout_in_minutes`<sup>Optional</sup> <a name="timeout_in_minutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The timeout for the CodeBuild build, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#timeout_in_minutes ElasticbeanstalkApplicationVersion#timeout_in_minutes}

---

### ElasticbeanstalkApplicationVersionConfig <a name="ElasticbeanstalkApplicationVersionConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application_version

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_name: str,
  build_configuration: ElasticbeanstalkApplicationVersionBuildConfiguration = None,
  description: str = None,
  image_configuration: ElasticbeanstalkApplicationVersionImageConfiguration = None,
  process: bool | IResolvable = None,
  source_bundle: ElasticbeanstalkApplicationVersionSourceBundle = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.applicationName">application_name</a></code> | <code>str</code> | The name of the Elastic Beanstalk application that is associated with this application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.buildConfiguration">build_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a></code> | Settings for an AWS CodeBuild build that packages and builds an application version from source code. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.description">description</a></code> | <code>str</code> | A description of this application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.imageConfiguration">image_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a></code> | Configuration for image-based application versions. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.process">process</a></code> | <code>bool \| cdktn.IResolvable</code> | Pre-process and validate the environment manifest (`env.yaml`) and configuration files in the source bundle. Leave unset for the service default. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.sourceBundle">source_bundle</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a></code> | The Amazon S3 bucket and key that identify the location of the source bundle for this version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

The name of the Elastic Beanstalk application that is associated with this application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#application_name ElasticbeanstalkApplicationVersion#application_name}

---

##### `build_configuration`<sup>Optional</sup> <a name="build_configuration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.buildConfiguration"></a>

```python
build_configuration: ElasticbeanstalkApplicationVersionBuildConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

Settings for an AWS CodeBuild build that packages and builds an application version from source code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#build_configuration ElasticbeanstalkApplicationVersion#build_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#description ElasticbeanstalkApplicationVersion#description}

---

##### `image_configuration`<sup>Optional</sup> <a name="image_configuration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.imageConfiguration"></a>

```python
image_configuration: ElasticbeanstalkApplicationVersionImageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

Configuration for image-based application versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#image_configuration ElasticbeanstalkApplicationVersion#image_configuration}

---

##### `process`<sup>Optional</sup> <a name="process" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.process"></a>

```python
process: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Pre-process and validate the environment manifest (`env.yaml`) and configuration files in the source bundle. Leave unset for the service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#process ElasticbeanstalkApplicationVersion#process}

---

##### `source_bundle`<sup>Optional</sup> <a name="source_bundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.sourceBundle"></a>

```python
source_bundle: ElasticbeanstalkApplicationVersionSourceBundle
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

The Amazon S3 bucket and key that identify the location of the source bundle for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#source_bundle ElasticbeanstalkApplicationVersion#source_bundle}

---

### ElasticbeanstalkApplicationVersionImageConfiguration <a name="ElasticbeanstalkApplicationVersionImageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application_version

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration(
  build_attribute: ElasticbeanstalkApplicationVersionImageConfigurationBuild = None,
  source: ElasticbeanstalkApplicationVersionImageConfigurationSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.property.buildAttribute">build_attribute</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a></code> | Configuration for building a container image from source code. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a></code> | The container image source for this version, as an ECR image URI. |

---

##### `build_attribute`<sup>Optional</sup> <a name="build_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.property.buildAttribute"></a>

```python
build_attribute: ElasticbeanstalkApplicationVersionImageConfigurationBuild
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

Configuration for building a container image from source code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#build ElasticbeanstalkApplicationVersion#build}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.property.source"></a>

```python
source: ElasticbeanstalkApplicationVersionImageConfigurationSource
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a>

The container image source for this version, as an ECR image URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#source ElasticbeanstalkApplicationVersion#source}

---

### ElasticbeanstalkApplicationVersionImageConfigurationBuild <a name="ElasticbeanstalkApplicationVersionImageConfigurationBuild" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application_version

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild(
  architecture: str = None,
  buildpack: str = None,
  code_build_service_role: str = None,
  compute_type: str = None,
  dockerfile_location: str = None,
  timeout_in_minutes: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.architecture">architecture</a></code> | <code>str</code> | The target architecture for the built container image. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.buildpack">buildpack</a></code> | <code>str</code> | The buildpack to use for building the image. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.codeBuildServiceRole">code_build_service_role</a></code> | <code>str</code> | The ARN of the IAM role that AWS CodeBuild assumes to build the application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.computeType">compute_type</a></code> | <code>str</code> | The compute type for the CodeBuild build environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.dockerfileLocation">dockerfile_location</a></code> | <code>str</code> | The path to the Dockerfile, relative to the source root. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | The timeout for the CodeBuild build, in minutes. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.type">type</a></code> | <code>str</code> | The type of image build: docker or buildpack. |

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

The target architecture for the built container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#architecture ElasticbeanstalkApplicationVersion#architecture}

---

##### `buildpack`<sup>Optional</sup> <a name="buildpack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.buildpack"></a>

```python
buildpack: str
```

- *Type:* str

The buildpack to use for building the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#buildpack ElasticbeanstalkApplicationVersion#buildpack}

---

##### `code_build_service_role`<sup>Optional</sup> <a name="code_build_service_role" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.codeBuildServiceRole"></a>

```python
code_build_service_role: str
```

- *Type:* str

The ARN of the IAM role that AWS CodeBuild assumes to build the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#code_build_service_role ElasticbeanstalkApplicationVersion#code_build_service_role}

---

##### `compute_type`<sup>Optional</sup> <a name="compute_type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.computeType"></a>

```python
compute_type: str
```

- *Type:* str

The compute type for the CodeBuild build environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#compute_type ElasticbeanstalkApplicationVersion#compute_type}

---

##### `dockerfile_location`<sup>Optional</sup> <a name="dockerfile_location" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.dockerfileLocation"></a>

```python
dockerfile_location: str
```

- *Type:* str

The path to the Dockerfile, relative to the source root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#dockerfile_location ElasticbeanstalkApplicationVersion#dockerfile_location}

---

##### `timeout_in_minutes`<sup>Optional</sup> <a name="timeout_in_minutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The timeout for the CodeBuild build, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#timeout_in_minutes ElasticbeanstalkApplicationVersion#timeout_in_minutes}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.type"></a>

```python
type: str
```

- *Type:* str

The type of image build: docker or buildpack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#type ElasticbeanstalkApplicationVersion#type}

---

### ElasticbeanstalkApplicationVersionImageConfigurationSource <a name="ElasticbeanstalkApplicationVersionImageConfigurationSource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application_version

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource(
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource.property.uri">uri</a></code> | <code>str</code> | The URI of the container image, e.g. an ECR image URI. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource.property.uri"></a>

```python
uri: str
```

- *Type:* str

The URI of the container image, e.g. an ECR image URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#uri ElasticbeanstalkApplicationVersion#uri}

---

### ElasticbeanstalkApplicationVersionSourceBundle <a name="ElasticbeanstalkApplicationVersionSourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application_version

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle(
  s3_bucket: str = None,
  s3_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | The Amazon S3 bucket where the data is located. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.property.s3Key">s3_key</a></code> | <code>str</code> | The Amazon S3 key where the data is located. |

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

The Amazon S3 bucket where the data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#s3_bucket ElasticbeanstalkApplicationVersion#s3_bucket}

---

##### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

The Amazon S3 key where the data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#s3_key ElasticbeanstalkApplicationVersion#s3_key}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference <a name="ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application_version

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetArtifactName">reset_artifact_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetCodeBuildServiceRole">reset_code_build_service_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetComputeType">reset_compute_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetTimeoutInMinutes">reset_timeout_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_artifact_name` <a name="reset_artifact_name" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetArtifactName"></a>

```python
def reset_artifact_name() -> None
```

##### `reset_code_build_service_role` <a name="reset_code_build_service_role" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetCodeBuildServiceRole"></a>

```python
def reset_code_build_service_role() -> None
```

##### `reset_compute_type` <a name="reset_compute_type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetComputeType"></a>

```python
def reset_compute_type() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_timeout_in_minutes` <a name="reset_timeout_in_minutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetTimeoutInMinutes"></a>

```python
def reset_timeout_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactNameInput">artifact_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRoleInput">code_build_service_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeTypeInput">compute_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutesInput">timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactName">artifact_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRole">code_build_service_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeType">compute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifact_name_input`<sup>Optional</sup> <a name="artifact_name_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactNameInput"></a>

```python
artifact_name_input: str
```

- *Type:* str

---

##### `code_build_service_role_input`<sup>Optional</sup> <a name="code_build_service_role_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRoleInput"></a>

```python
code_build_service_role_input: str
```

- *Type:* str

---

##### `compute_type_input`<sup>Optional</sup> <a name="compute_type_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeTypeInput"></a>

```python
compute_type_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `timeout_in_minutes_input`<sup>Optional</sup> <a name="timeout_in_minutes_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutesInput"></a>

```python
timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `artifact_name`<sup>Required</sup> <a name="artifact_name" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactName"></a>

```python
artifact_name: str
```

- *Type:* str

---

##### `code_build_service_role`<sup>Required</sup> <a name="code_build_service_role" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRole"></a>

```python
code_build_service_role: str
```

- *Type:* str

---

##### `compute_type`<sup>Required</sup> <a name="compute_type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeType"></a>

```python
compute_type: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `timeout_in_minutes`<sup>Required</sup> <a name="timeout_in_minutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticbeanstalkApplicationVersionBuildConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

---


### ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference <a name="ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application_version

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetArchitecture">reset_architecture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetBuildpack">reset_buildpack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetCodeBuildServiceRole">reset_code_build_service_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetComputeType">reset_compute_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetDockerfileLocation">reset_dockerfile_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetTimeoutInMinutes">reset_timeout_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_architecture` <a name="reset_architecture" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetArchitecture"></a>

```python
def reset_architecture() -> None
```

##### `reset_buildpack` <a name="reset_buildpack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetBuildpack"></a>

```python
def reset_buildpack() -> None
```

##### `reset_code_build_service_role` <a name="reset_code_build_service_role" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetCodeBuildServiceRole"></a>

```python
def reset_code_build_service_role() -> None
```

##### `reset_compute_type` <a name="reset_compute_type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetComputeType"></a>

```python
def reset_compute_type() -> None
```

##### `reset_dockerfile_location` <a name="reset_dockerfile_location" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetDockerfileLocation"></a>

```python
def reset_dockerfile_location() -> None
```

##### `reset_timeout_in_minutes` <a name="reset_timeout_in_minutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetTimeoutInMinutes"></a>

```python
def reset_timeout_in_minutes() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architectureInput">architecture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpackInput">buildpack_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRoleInput">code_build_service_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeTypeInput">compute_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocationInput">dockerfile_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutesInput">timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpack">buildpack</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRole">code_build_service_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeType">compute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocation">dockerfile_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutes">timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture_input`<sup>Optional</sup> <a name="architecture_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architectureInput"></a>

```python
architecture_input: str
```

- *Type:* str

---

##### `buildpack_input`<sup>Optional</sup> <a name="buildpack_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpackInput"></a>

```python
buildpack_input: str
```

- *Type:* str

---

##### `code_build_service_role_input`<sup>Optional</sup> <a name="code_build_service_role_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRoleInput"></a>

```python
code_build_service_role_input: str
```

- *Type:* str

---

##### `compute_type_input`<sup>Optional</sup> <a name="compute_type_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeTypeInput"></a>

```python
compute_type_input: str
```

- *Type:* str

---

##### `dockerfile_location_input`<sup>Optional</sup> <a name="dockerfile_location_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocationInput"></a>

```python
dockerfile_location_input: str
```

- *Type:* str

---

##### `timeout_in_minutes_input`<sup>Optional</sup> <a name="timeout_in_minutes_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutesInput"></a>

```python
timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `buildpack`<sup>Required</sup> <a name="buildpack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpack"></a>

```python
buildpack: str
```

- *Type:* str

---

##### `code_build_service_role`<sup>Required</sup> <a name="code_build_service_role" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRole"></a>

```python
code_build_service_role: str
```

- *Type:* str

---

##### `compute_type`<sup>Required</sup> <a name="compute_type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeType"></a>

```python
compute_type: str
```

- *Type:* str

---

##### `dockerfile_location`<sup>Required</sup> <a name="dockerfile_location" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocation"></a>

```python
dockerfile_location: str
```

- *Type:* str

---

##### `timeout_in_minutes`<sup>Required</sup> <a name="timeout_in_minutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutes"></a>

```python
timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticbeanstalkApplicationVersionImageConfigurationBuild
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

---


### ElasticbeanstalkApplicationVersionImageConfigurationOutputReference <a name="ElasticbeanstalkApplicationVersionImageConfigurationOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application_version

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute">put_build_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resetBuildAttribute">reset_build_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_build_attribute` <a name="put_build_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute"></a>

```python
def put_build_attribute(
  architecture: str = None,
  buildpack: str = None,
  code_build_service_role: str = None,
  compute_type: str = None,
  dockerfile_location: str = None,
  timeout_in_minutes: typing.Union[int, float] = None,
  type: str = None
) -> None
```

###### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute.parameter.architecture"></a>

- *Type:* str

The target architecture for the built container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#architecture ElasticbeanstalkApplicationVersion#architecture}

---

###### `buildpack`<sup>Optional</sup> <a name="buildpack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute.parameter.buildpack"></a>

- *Type:* str

The buildpack to use for building the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#buildpack ElasticbeanstalkApplicationVersion#buildpack}

---

###### `code_build_service_role`<sup>Optional</sup> <a name="code_build_service_role" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute.parameter.codeBuildServiceRole"></a>

- *Type:* str

The ARN of the IAM role that AWS CodeBuild assumes to build the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#code_build_service_role ElasticbeanstalkApplicationVersion#code_build_service_role}

---

###### `compute_type`<sup>Optional</sup> <a name="compute_type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute.parameter.computeType"></a>

- *Type:* str

The compute type for the CodeBuild build environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#compute_type ElasticbeanstalkApplicationVersion#compute_type}

---

###### `dockerfile_location`<sup>Optional</sup> <a name="dockerfile_location" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute.parameter.dockerfileLocation"></a>

- *Type:* str

The path to the Dockerfile, relative to the source root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#dockerfile_location ElasticbeanstalkApplicationVersion#dockerfile_location}

---

###### `timeout_in_minutes`<sup>Optional</sup> <a name="timeout_in_minutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute.parameter.timeoutInMinutes"></a>

- *Type:* typing.Union[int, float]

The timeout for the CodeBuild build, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#timeout_in_minutes ElasticbeanstalkApplicationVersion#timeout_in_minutes}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute.parameter.type"></a>

- *Type:* str

The type of image build: docker or buildpack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#type ElasticbeanstalkApplicationVersion#type}

---

##### `put_source` <a name="put_source" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putSource"></a>

```python
def put_source(
  uri: str = None
) -> None
```

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putSource.parameter.uri"></a>

- *Type:* str

The URI of the container image, e.g. an ECR image URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#uri ElasticbeanstalkApplicationVersion#uri}

---

##### `reset_build_attribute` <a name="reset_build_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resetBuildAttribute"></a>

```python
def reset_build_attribute() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttribute">build_attribute</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttributeInput">build_attribute_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.sourceInput">source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `build_attribute`<sup>Required</sup> <a name="build_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttribute"></a>

```python
build_attribute: ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.source"></a>

```python
source: ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference</a>

---

##### `build_attribute_input`<sup>Optional</sup> <a name="build_attribute_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttributeInput"></a>

```python
build_attribute_input: IResolvable | ElasticbeanstalkApplicationVersionImageConfigurationBuild
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.sourceInput"></a>

```python
source_input: IResolvable | ElasticbeanstalkApplicationVersionImageConfigurationSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticbeanstalkApplicationVersionImageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

---


### ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference <a name="ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application_version

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uri` <a name="reset_uri" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticbeanstalkApplicationVersionImageConfigurationSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a>

---


### ElasticbeanstalkApplicationVersionSourceBundleOutputReference <a name="ElasticbeanstalkApplicationVersionSourceBundleOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticbeanstalk_application_version

elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resetS3Bucket">reset_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resetS3Key">reset_s3_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_bucket` <a name="reset_s3_bucket" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resetS3Bucket"></a>

```python
def reset_s3_bucket() -> None
```

##### `reset_s3_key` <a name="reset_s3_key" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resetS3Key"></a>

```python
def reset_s3_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3KeyInput">s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_key_input`<sup>Optional</sup> <a name="s3_key_input" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3KeyInput"></a>

```python
s3_key_input: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticbeanstalkApplicationVersionSourceBundle
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

---



