# `codedeployDeploymentConfig` Submodule <a name="`codedeployDeploymentConfig` Submodule" id="@cdktn/provider-awscc.codedeployDeploymentConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodedeployDeploymentConfig <a name="CodedeployDeploymentConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config awscc_codedeploy_deployment_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  compute_platform: str = None,
  deployment_config_name: str = None,
  minimum_healthy_hosts: CodedeployDeploymentConfigMinimumHealthyHosts = None,
  traffic_routing_config: CodedeployDeploymentConfigTrafficRoutingConfig = None,
  zonal_config: CodedeployDeploymentConfigZonalConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.computePlatform">compute_platform</a></code> | <code>str</code> | The destination platform type for the deployment (Lambda, Server, or ECS). |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.deploymentConfigName">deployment_config_name</a></code> | <code>str</code> | A name for the deployment configuration. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.minimumHealthyHosts">minimum_healthy_hosts</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | The minimum number of healthy instances that should be available at any time during the deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.trafficRoutingConfig">traffic_routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | The configuration that specifies how the deployment traffic is routed. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.zonalConfig">zonal_config</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a></code> | The zonal deployment config that specifies how the zonal deployment behaves. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `compute_platform`<sup>Optional</sup> <a name="compute_platform" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.computePlatform"></a>

- *Type:* str

The destination platform type for the deployment (Lambda, Server, or ECS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#compute_platform CodedeployDeploymentConfig#compute_platform}

---

##### `deployment_config_name`<sup>Optional</sup> <a name="deployment_config_name" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.deploymentConfigName"></a>

- *Type:* str

A name for the deployment configuration.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment configuration name. For more information, see Name Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}

---

##### `minimum_healthy_hosts`<sup>Optional</sup> <a name="minimum_healthy_hosts" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.minimumHealthyHosts"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

The minimum number of healthy instances that should be available at any time during the deployment.

There are two parameters expected in the input: type and value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts CodedeployDeploymentConfig#minimum_healthy_hosts}

---

##### `traffic_routing_config`<sup>Optional</sup> <a name="traffic_routing_config" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.trafficRoutingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

The configuration that specifies how the deployment traffic is routed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#traffic_routing_config CodedeployDeploymentConfig#traffic_routing_config}

---

##### `zonal_config`<sup>Optional</sup> <a name="zonal_config" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.zonalConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a>

The zonal deployment config that specifies how the zonal deployment behaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#zonal_config CodedeployDeploymentConfig#zonal_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putMinimumHealthyHosts">put_minimum_healthy_hosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig">put_traffic_routing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putZonalConfig">put_zonal_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetComputePlatform">reset_compute_platform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetDeploymentConfigName">reset_deployment_config_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetMinimumHealthyHosts">reset_minimum_healthy_hosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetTrafficRoutingConfig">reset_traffic_routing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetZonalConfig">reset_zonal_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_minimum_healthy_hosts` <a name="put_minimum_healthy_hosts" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putMinimumHealthyHosts"></a>

```python
def put_minimum_healthy_hosts(
  type: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putMinimumHealthyHosts.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putMinimumHealthyHosts.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}.

---

##### `put_traffic_routing_config` <a name="put_traffic_routing_config" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig"></a>

```python
def put_traffic_routing_config(
  time_based_canary: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary = None,
  time_based_linear: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear = None,
  type: str = None
) -> None
```

###### `time_based_canary`<sup>Optional</sup> <a name="time_based_canary" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig.parameter.timeBasedCanary"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#time_based_canary CodedeployDeploymentConfig#time_based_canary}.

---

###### `time_based_linear`<sup>Optional</sup> <a name="time_based_linear" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig.parameter.timeBasedLinear"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#time_based_linear CodedeployDeploymentConfig#time_based_linear}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}.

---

##### `put_zonal_config` <a name="put_zonal_config" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putZonalConfig"></a>

```python
def put_zonal_config(
  first_zone_monitor_duration_in_seconds: typing.Union[int, float] = None,
  minimum_healthy_hosts_per_zone: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone = None,
  monitor_duration_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `first_zone_monitor_duration_in_seconds`<sup>Optional</sup> <a name="first_zone_monitor_duration_in_seconds" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putZonalConfig.parameter.firstZoneMonitorDurationInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#first_zone_monitor_duration_in_seconds CodedeployDeploymentConfig#first_zone_monitor_duration_in_seconds}.

---

###### `minimum_healthy_hosts_per_zone`<sup>Optional</sup> <a name="minimum_healthy_hosts_per_zone" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putZonalConfig.parameter.minimumHealthyHostsPerZone"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts_per_zone CodedeployDeploymentConfig#minimum_healthy_hosts_per_zone}.

---

###### `monitor_duration_in_seconds`<sup>Optional</sup> <a name="monitor_duration_in_seconds" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.putZonalConfig.parameter.monitorDurationInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#monitor_duration_in_seconds CodedeployDeploymentConfig#monitor_duration_in_seconds}.

---

##### `reset_compute_platform` <a name="reset_compute_platform" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetComputePlatform"></a>

```python
def reset_compute_platform() -> None
```

##### `reset_deployment_config_name` <a name="reset_deployment_config_name" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetDeploymentConfigName"></a>

```python
def reset_deployment_config_name() -> None
```

##### `reset_minimum_healthy_hosts` <a name="reset_minimum_healthy_hosts" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetMinimumHealthyHosts"></a>

```python
def reset_minimum_healthy_hosts() -> None
```

##### `reset_traffic_routing_config` <a name="reset_traffic_routing_config" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetTrafficRoutingConfig"></a>

```python
def reset_traffic_routing_config() -> None
```

##### `reset_zonal_config` <a name="reset_zonal_config" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetZonalConfig"></a>

```python
def reset_zonal_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CodedeployDeploymentConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformResource"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CodedeployDeploymentConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodedeployDeploymentConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodedeployDeploymentConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodedeployDeploymentConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHosts">minimum_healthy_hosts</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference">CodedeployDeploymentConfigMinimumHealthyHostsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfig">traffic_routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.zonalConfig">zonal_config</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference">CodedeployDeploymentConfigZonalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatformInput">compute_platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigNameInput">deployment_config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHostsInput">minimum_healthy_hosts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfigInput">traffic_routing_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.zonalConfigInput">zonal_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatform">compute_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigName">deployment_config_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `minimum_healthy_hosts`<sup>Required</sup> <a name="minimum_healthy_hosts" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHosts"></a>

```python
minimum_healthy_hosts: CodedeployDeploymentConfigMinimumHealthyHostsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference">CodedeployDeploymentConfigMinimumHealthyHostsOutputReference</a>

---

##### `traffic_routing_config`<sup>Required</sup> <a name="traffic_routing_config" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfig"></a>

```python
traffic_routing_config: CodedeployDeploymentConfigTrafficRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigOutputReference</a>

---

##### `zonal_config`<sup>Required</sup> <a name="zonal_config" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.zonalConfig"></a>

```python
zonal_config: CodedeployDeploymentConfigZonalConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference">CodedeployDeploymentConfigZonalConfigOutputReference</a>

---

##### `compute_platform_input`<sup>Optional</sup> <a name="compute_platform_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatformInput"></a>

```python
compute_platform_input: str
```

- *Type:* str

---

##### `deployment_config_name_input`<sup>Optional</sup> <a name="deployment_config_name_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigNameInput"></a>

```python
deployment_config_name_input: str
```

- *Type:* str

---

##### `minimum_healthy_hosts_input`<sup>Optional</sup> <a name="minimum_healthy_hosts_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHostsInput"></a>

```python
minimum_healthy_hosts_input: IResolvable | CodedeployDeploymentConfigMinimumHealthyHosts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

---

##### `traffic_routing_config_input`<sup>Optional</sup> <a name="traffic_routing_config_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfigInput"></a>

```python
traffic_routing_config_input: IResolvable | CodedeployDeploymentConfigTrafficRoutingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

---

##### `zonal_config_input`<sup>Optional</sup> <a name="zonal_config_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.zonalConfigInput"></a>

```python
zonal_config_input: IResolvable | CodedeployDeploymentConfigZonalConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a>

---

##### `compute_platform`<sup>Required</sup> <a name="compute_platform" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatform"></a>

```python
compute_platform: str
```

- *Type:* str

---

##### `deployment_config_name`<sup>Required</sup> <a name="deployment_config_name" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigName"></a>

```python
deployment_config_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodedeployDeploymentConfigConfig <a name="CodedeployDeploymentConfigConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  compute_platform: str = None,
  deployment_config_name: str = None,
  minimum_healthy_hosts: CodedeployDeploymentConfigMinimumHealthyHosts = None,
  traffic_routing_config: CodedeployDeploymentConfigTrafficRoutingConfig = None,
  zonal_config: CodedeployDeploymentConfigZonalConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.computePlatform">compute_platform</a></code> | <code>str</code> | The destination platform type for the deployment (Lambda, Server, or ECS). |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.deploymentConfigName">deployment_config_name</a></code> | <code>str</code> | A name for the deployment configuration. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.minimumHealthyHosts">minimum_healthy_hosts</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | The minimum number of healthy instances that should be available at any time during the deployment. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.trafficRoutingConfig">traffic_routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | The configuration that specifies how the deployment traffic is routed. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.zonalConfig">zonal_config</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a></code> | The zonal deployment config that specifies how the zonal deployment behaves. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `compute_platform`<sup>Optional</sup> <a name="compute_platform" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.computePlatform"></a>

```python
compute_platform: str
```

- *Type:* str

The destination platform type for the deployment (Lambda, Server, or ECS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#compute_platform CodedeployDeploymentConfig#compute_platform}

---

##### `deployment_config_name`<sup>Optional</sup> <a name="deployment_config_name" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.deploymentConfigName"></a>

```python
deployment_config_name: str
```

- *Type:* str

A name for the deployment configuration.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment configuration name. For more information, see Name Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}

---

##### `minimum_healthy_hosts`<sup>Optional</sup> <a name="minimum_healthy_hosts" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.minimumHealthyHosts"></a>

```python
minimum_healthy_hosts: CodedeployDeploymentConfigMinimumHealthyHosts
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

The minimum number of healthy instances that should be available at any time during the deployment.

There are two parameters expected in the input: type and value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts CodedeployDeploymentConfig#minimum_healthy_hosts}

---

##### `traffic_routing_config`<sup>Optional</sup> <a name="traffic_routing_config" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.trafficRoutingConfig"></a>

```python
traffic_routing_config: CodedeployDeploymentConfigTrafficRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

The configuration that specifies how the deployment traffic is routed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#traffic_routing_config CodedeployDeploymentConfig#traffic_routing_config}

---

##### `zonal_config`<sup>Optional</sup> <a name="zonal_config" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.zonalConfig"></a>

```python
zonal_config: CodedeployDeploymentConfigZonalConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a>

The zonal deployment config that specifies how the zonal deployment behaves.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#zonal_config CodedeployDeploymentConfig#zonal_config}

---

### CodedeployDeploymentConfigMinimumHealthyHosts <a name="CodedeployDeploymentConfigMinimumHealthyHosts" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts(
  type: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}.

---

### CodedeployDeploymentConfigTrafficRoutingConfig <a name="CodedeployDeploymentConfigTrafficRoutingConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig(
  time_based_canary: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary = None,
  time_based_linear: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedCanary">time_based_canary</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#time_based_canary CodedeployDeploymentConfig#time_based_canary}. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedLinear">time_based_linear</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#time_based_linear CodedeployDeploymentConfig#time_based_linear}. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}. |

---

##### `time_based_canary`<sup>Optional</sup> <a name="time_based_canary" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedCanary"></a>

```python
time_based_canary: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#time_based_canary CodedeployDeploymentConfig#time_based_canary}.

---

##### `time_based_linear`<sup>Optional</sup> <a name="time_based_linear" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedLinear"></a>

```python
time_based_linear: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#time_based_linear CodedeployDeploymentConfig#time_based_linear}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}.

---

### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary(
  canary_interval: typing.Union[int, float] = None,
  canary_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.canaryInterval">canary_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#canary_interval CodedeployDeploymentConfig#canary_interval}. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.canaryPercentage">canary_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#canary_percentage CodedeployDeploymentConfig#canary_percentage}. |

---

##### `canary_interval`<sup>Optional</sup> <a name="canary_interval" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.canaryInterval"></a>

```python
canary_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#canary_interval CodedeployDeploymentConfig#canary_interval}.

---

##### `canary_percentage`<sup>Optional</sup> <a name="canary_percentage" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.canaryPercentage"></a>

```python
canary_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#canary_percentage CodedeployDeploymentConfig#canary_percentage}.

---

### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear(
  linear_interval: typing.Union[int, float] = None,
  linear_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.linearInterval">linear_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#linear_interval CodedeployDeploymentConfig#linear_interval}. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.linearPercentage">linear_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#linear_percentage CodedeployDeploymentConfig#linear_percentage}. |

---

##### `linear_interval`<sup>Optional</sup> <a name="linear_interval" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.linearInterval"></a>

```python
linear_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#linear_interval CodedeployDeploymentConfig#linear_interval}.

---

##### `linear_percentage`<sup>Optional</sup> <a name="linear_percentage" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.linearPercentage"></a>

```python
linear_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#linear_percentage CodedeployDeploymentConfig#linear_percentage}.

---

### CodedeployDeploymentConfigZonalConfig <a name="CodedeployDeploymentConfigZonalConfig" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig(
  first_zone_monitor_duration_in_seconds: typing.Union[int, float] = None,
  minimum_healthy_hosts_per_zone: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone = None,
  monitor_duration_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.firstZoneMonitorDurationInSeconds">first_zone_monitor_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#first_zone_monitor_duration_in_seconds CodedeployDeploymentConfig#first_zone_monitor_duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.minimumHealthyHostsPerZone">minimum_healthy_hosts_per_zone</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts_per_zone CodedeployDeploymentConfig#minimum_healthy_hosts_per_zone}. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.monitorDurationInSeconds">monitor_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#monitor_duration_in_seconds CodedeployDeploymentConfig#monitor_duration_in_seconds}. |

---

##### `first_zone_monitor_duration_in_seconds`<sup>Optional</sup> <a name="first_zone_monitor_duration_in_seconds" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.firstZoneMonitorDurationInSeconds"></a>

```python
first_zone_monitor_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#first_zone_monitor_duration_in_seconds CodedeployDeploymentConfig#first_zone_monitor_duration_in_seconds}.

---

##### `minimum_healthy_hosts_per_zone`<sup>Optional</sup> <a name="minimum_healthy_hosts_per_zone" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.minimumHealthyHostsPerZone"></a>

```python
minimum_healthy_hosts_per_zone: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts_per_zone CodedeployDeploymentConfig#minimum_healthy_hosts_per_zone}.

---

##### `monitor_duration_in_seconds`<sup>Optional</sup> <a name="monitor_duration_in_seconds" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.monitorDurationInSeconds"></a>

```python
monitor_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#monitor_duration_in_seconds CodedeployDeploymentConfig#monitor_duration_in_seconds}.

---

### CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone <a name="CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone(
  type: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodedeployDeploymentConfigMinimumHealthyHostsOutputReference <a name="CodedeployDeploymentConfigMinimumHealthyHostsOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentConfigMinimumHealthyHosts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

---


### CodedeployDeploymentConfigTrafficRoutingConfigOutputReference <a name="CodedeployDeploymentConfigTrafficRoutingConfigOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedCanary">put_time_based_canary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedLinear">put_time_based_linear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedCanary">reset_time_based_canary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedLinear">reset_time_based_linear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_time_based_canary` <a name="put_time_based_canary" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedCanary"></a>

```python
def put_time_based_canary(
  canary_interval: typing.Union[int, float] = None,
  canary_percentage: typing.Union[int, float] = None
) -> None
```

###### `canary_interval`<sup>Optional</sup> <a name="canary_interval" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedCanary.parameter.canaryInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#canary_interval CodedeployDeploymentConfig#canary_interval}.

---

###### `canary_percentage`<sup>Optional</sup> <a name="canary_percentage" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedCanary.parameter.canaryPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#canary_percentage CodedeployDeploymentConfig#canary_percentage}.

---

##### `put_time_based_linear` <a name="put_time_based_linear" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedLinear"></a>

```python
def put_time_based_linear(
  linear_interval: typing.Union[int, float] = None,
  linear_percentage: typing.Union[int, float] = None
) -> None
```

###### `linear_interval`<sup>Optional</sup> <a name="linear_interval" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedLinear.parameter.linearInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#linear_interval CodedeployDeploymentConfig#linear_interval}.

---

###### `linear_percentage`<sup>Optional</sup> <a name="linear_percentage" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedLinear.parameter.linearPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#linear_percentage CodedeployDeploymentConfig#linear_percentage}.

---

##### `reset_time_based_canary` <a name="reset_time_based_canary" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedCanary"></a>

```python
def reset_time_based_canary() -> None
```

##### `reset_time_based_linear` <a name="reset_time_based_linear" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedLinear"></a>

```python
def reset_time_based_linear() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanary">time_based_canary</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinear">time_based_linear</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanaryInput">time_based_canary_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinearInput">time_based_linear_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_based_canary`<sup>Required</sup> <a name="time_based_canary" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanary"></a>

```python
time_based_canary: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference</a>

---

##### `time_based_linear`<sup>Required</sup> <a name="time_based_linear" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinear"></a>

```python
time_based_linear: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference</a>

---

##### `time_based_canary_input`<sup>Optional</sup> <a name="time_based_canary_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanaryInput"></a>

```python
time_based_canary_input: IResolvable | CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---

##### `time_based_linear_input`<sup>Optional</sup> <a name="time_based_linear_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinearInput"></a>

```python
time_based_linear_input: IResolvable | CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentConfigTrafficRoutingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

---


### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetCanaryInterval">reset_canary_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetCanaryPercentage">reset_canary_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_canary_interval` <a name="reset_canary_interval" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetCanaryInterval"></a>

```python
def reset_canary_interval() -> None
```

##### `reset_canary_percentage` <a name="reset_canary_percentage" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetCanaryPercentage"></a>

```python
def reset_canary_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryIntervalInput">canary_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryPercentageInput">canary_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryInterval">canary_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryPercentage">canary_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canary_interval_input`<sup>Optional</sup> <a name="canary_interval_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryIntervalInput"></a>

```python
canary_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `canary_percentage_input`<sup>Optional</sup> <a name="canary_percentage_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryPercentageInput"></a>

```python
canary_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `canary_interval`<sup>Required</sup> <a name="canary_interval" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryInterval"></a>

```python
canary_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `canary_percentage`<sup>Required</sup> <a name="canary_percentage" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.canaryPercentage"></a>

```python
canary_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---


### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetLinearInterval">reset_linear_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetLinearPercentage">reset_linear_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_linear_interval` <a name="reset_linear_interval" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetLinearInterval"></a>

```python
def reset_linear_interval() -> None
```

##### `reset_linear_percentage` <a name="reset_linear_percentage" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetLinearPercentage"></a>

```python
def reset_linear_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearIntervalInput">linear_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearPercentageInput">linear_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearInterval">linear_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearPercentage">linear_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linear_interval_input`<sup>Optional</sup> <a name="linear_interval_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearIntervalInput"></a>

```python
linear_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `linear_percentage_input`<sup>Optional</sup> <a name="linear_percentage_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearPercentageInput"></a>

```python
linear_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `linear_interval`<sup>Required</sup> <a name="linear_interval" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearInterval"></a>

```python
linear_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `linear_percentage`<sup>Required</sup> <a name="linear_percentage" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.linearPercentage"></a>

```python
linear_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---


### CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference <a name="CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a>

---


### CodedeployDeploymentConfigZonalConfigOutputReference <a name="CodedeployDeploymentConfigZonalConfigOutputReference" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import codedeploy_deployment_config

codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.putMinimumHealthyHostsPerZone">put_minimum_healthy_hosts_per_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetFirstZoneMonitorDurationInSeconds">reset_first_zone_monitor_duration_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetMinimumHealthyHostsPerZone">reset_minimum_healthy_hosts_per_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetMonitorDurationInSeconds">reset_monitor_duration_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_minimum_healthy_hosts_per_zone` <a name="put_minimum_healthy_hosts_per_zone" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.putMinimumHealthyHostsPerZone"></a>

```python
def put_minimum_healthy_hosts_per_zone(
  type: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.putMinimumHealthyHostsPerZone.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.putMinimumHealthyHostsPerZone.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}.

---

##### `reset_first_zone_monitor_duration_in_seconds` <a name="reset_first_zone_monitor_duration_in_seconds" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetFirstZoneMonitorDurationInSeconds"></a>

```python
def reset_first_zone_monitor_duration_in_seconds() -> None
```

##### `reset_minimum_healthy_hosts_per_zone` <a name="reset_minimum_healthy_hosts_per_zone" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetMinimumHealthyHostsPerZone"></a>

```python
def reset_minimum_healthy_hosts_per_zone() -> None
```

##### `reset_monitor_duration_in_seconds` <a name="reset_monitor_duration_in_seconds" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetMonitorDurationInSeconds"></a>

```python
def reset_monitor_duration_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZone">minimum_healthy_hosts_per_zone</a></code> | <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSecondsInput">first_zone_monitor_duration_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZoneInput">minimum_healthy_hosts_per_zone_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSecondsInput">monitor_duration_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSeconds">first_zone_monitor_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSeconds">monitor_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minimum_healthy_hosts_per_zone`<sup>Required</sup> <a name="minimum_healthy_hosts_per_zone" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZone"></a>

```python
minimum_healthy_hosts_per_zone: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference</a>

---

##### `first_zone_monitor_duration_in_seconds_input`<sup>Optional</sup> <a name="first_zone_monitor_duration_in_seconds_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSecondsInput"></a>

```python
first_zone_monitor_duration_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_healthy_hosts_per_zone_input`<sup>Optional</sup> <a name="minimum_healthy_hosts_per_zone_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZoneInput"></a>

```python
minimum_healthy_hosts_per_zone_input: IResolvable | CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a>

---

##### `monitor_duration_in_seconds_input`<sup>Optional</sup> <a name="monitor_duration_in_seconds_input" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSecondsInput"></a>

```python
monitor_duration_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first_zone_monitor_duration_in_seconds`<sup>Required</sup> <a name="first_zone_monitor_duration_in_seconds" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSeconds"></a>

```python
first_zone_monitor_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitor_duration_in_seconds`<sup>Required</sup> <a name="monitor_duration_in_seconds" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSeconds"></a>

```python
monitor_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CodedeployDeploymentConfigZonalConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a>

---



