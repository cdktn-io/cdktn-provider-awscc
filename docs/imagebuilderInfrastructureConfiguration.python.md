# `imagebuilderInfrastructureConfiguration` Submodule <a name="`imagebuilderInfrastructureConfiguration` Submodule" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderInfrastructureConfiguration <a name="ImagebuilderInfrastructureConfiguration" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration awscc_imagebuilder_infrastructure_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_infrastructure_configuration

imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_profile_name: str,
  name: str,
  description: str = None,
  instance_metadata_options: ImagebuilderInfrastructureConfigurationInstanceMetadataOptions = None,
  instance_types: typing.List[str] = None,
  key_pair: str = None,
  logging: ImagebuilderInfrastructureConfigurationLogging = None,
  placement: ImagebuilderInfrastructureConfigurationPlacement = None,
  resource_tags: typing.Mapping[str] = None,
  security_group_ids: typing.List[str] = None,
  sns_topic_arn: str = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  terminate_instance_on_failure: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.instanceProfileName">instance_profile_name</a></code> | <code>str</code> | The instance profile of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.instanceMetadataOptions">instance_metadata_options</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a></code> | The instance metadata option settings for the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.instanceTypes">instance_types</a></code> | <code>typing.List[str]</code> | The instance types of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.keyPair">key_pair</a></code> | <code>str</code> | The EC2 key pair of the infrastructure configuration.. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a></code> | The logging configuration of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.placement">placement</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a></code> | The placement option settings for the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | The tags attached to the resource created by Image Builder. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The security group IDs of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | The SNS Topic Amazon Resource Name (ARN) of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | The subnet ID of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tags associated with the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.terminateInstanceOnFailure">terminate_instance_on_failure</a></code> | <code>bool \| cdktn.IResolvable</code> | The terminate instance on failure configuration of the infrastructure configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_profile_name`<sup>Required</sup> <a name="instance_profile_name" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.instanceProfileName"></a>

- *Type:* str

The instance profile of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#instance_profile_name ImagebuilderInfrastructureConfiguration#instance_profile_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.name"></a>

- *Type:* str

The name of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#name ImagebuilderInfrastructureConfiguration#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.description"></a>

- *Type:* str

The description of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#description ImagebuilderInfrastructureConfiguration#description}

---

##### `instance_metadata_options`<sup>Optional</sup> <a name="instance_metadata_options" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.instanceMetadataOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

The instance metadata option settings for the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#instance_metadata_options ImagebuilderInfrastructureConfiguration#instance_metadata_options}

---

##### `instance_types`<sup>Optional</sup> <a name="instance_types" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.instanceTypes"></a>

- *Type:* typing.List[str]

The instance types of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#instance_types ImagebuilderInfrastructureConfiguration#instance_types}

---

##### `key_pair`<sup>Optional</sup> <a name="key_pair" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.keyPair"></a>

- *Type:* str

The EC2 key pair of the infrastructure configuration..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#key_pair ImagebuilderInfrastructureConfiguration#key_pair}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a>

The logging configuration of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#logging ImagebuilderInfrastructureConfiguration#logging}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.placement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a>

The placement option settings for the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#placement ImagebuilderInfrastructureConfiguration#placement}

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.resourceTags"></a>

- *Type:* typing.Mapping[str]

The tags attached to the resource created by Image Builder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#resource_tags ImagebuilderInfrastructureConfiguration#resource_tags}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The security group IDs of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#security_group_ids ImagebuilderInfrastructureConfiguration#security_group_ids}

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.snsTopicArn"></a>

- *Type:* str

The SNS Topic Amazon Resource Name (ARN) of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#sns_topic_arn ImagebuilderInfrastructureConfiguration#sns_topic_arn}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.subnetId"></a>

- *Type:* str

The subnet ID of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#subnet_id ImagebuilderInfrastructureConfiguration#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

The tags associated with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#tags ImagebuilderInfrastructureConfiguration#tags}

---

##### `terminate_instance_on_failure`<sup>Optional</sup> <a name="terminate_instance_on_failure" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.terminateInstanceOnFailure"></a>

- *Type:* bool | cdktn.IResolvable

The terminate instance on failure configuration of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#terminate_instance_on_failure ImagebuilderInfrastructureConfiguration#terminate_instance_on_failure}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putInstanceMetadataOptions">put_instance_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putPlacement">put_placement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetInstanceMetadataOptions">reset_instance_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetInstanceTypes">reset_instance_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetKeyPair">reset_key_pair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetPlacement">reset_placement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetResourceTags">reset_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSnsTopicArn">reset_sns_topic_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetTerminateInstanceOnFailure">reset_terminate_instance_on_failure</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_instance_metadata_options` <a name="put_instance_metadata_options" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putInstanceMetadataOptions"></a>

```python
def put_instance_metadata_options(
  http_put_response_hop_limit: typing.Union[int, float] = None,
  http_tokens: str = None
) -> None
```

###### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putInstanceMetadataOptions.parameter.httpPutResponseHopLimit"></a>

- *Type:* typing.Union[int, float]

Limit the number of hops that an instance metadata request can traverse to reach its destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#http_put_response_hop_limit ImagebuilderInfrastructureConfiguration#http_put_response_hop_limit}

---

###### `http_tokens`<sup>Optional</sup> <a name="http_tokens" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putInstanceMetadataOptions.parameter.httpTokens"></a>

- *Type:* str

Indicates whether a signed token header is required for instance metadata retrieval requests.

The values affect the response as follows:

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#http_tokens ImagebuilderInfrastructureConfiguration#http_tokens}

---

##### `put_logging` <a name="put_logging" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putLogging"></a>

```python
def put_logging(
  s3_logs: ImagebuilderInfrastructureConfigurationLoggingS3Logs = None
) -> None
```

###### `s3_logs`<sup>Optional</sup> <a name="s3_logs" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putLogging.parameter.s3Logs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

The S3 path in which to store the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#s3_logs ImagebuilderInfrastructureConfiguration#s3_logs}

---

##### `put_placement` <a name="put_placement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putPlacement"></a>

```python
def put_placement(
  availability_zone: str = None,
  host_id: str = None,
  host_resource_group_arn: str = None,
  tenancy: str = None
) -> None
```

###### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putPlacement.parameter.availabilityZone"></a>

- *Type:* str

AvailabilityZone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#availability_zone ImagebuilderInfrastructureConfiguration#availability_zone}

---

###### `host_id`<sup>Optional</sup> <a name="host_id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putPlacement.parameter.hostId"></a>

- *Type:* str

HostId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#host_id ImagebuilderInfrastructureConfiguration#host_id}

---

###### `host_resource_group_arn`<sup>Optional</sup> <a name="host_resource_group_arn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putPlacement.parameter.hostResourceGroupArn"></a>

- *Type:* str

HostResourceGroupArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#host_resource_group_arn ImagebuilderInfrastructureConfiguration#host_resource_group_arn}

---

###### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putPlacement.parameter.tenancy"></a>

- *Type:* str

Tenancy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#tenancy ImagebuilderInfrastructureConfiguration#tenancy}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_instance_metadata_options` <a name="reset_instance_metadata_options" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetInstanceMetadataOptions"></a>

```python
def reset_instance_metadata_options() -> None
```

##### `reset_instance_types` <a name="reset_instance_types" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetInstanceTypes"></a>

```python
def reset_instance_types() -> None
```

##### `reset_key_pair` <a name="reset_key_pair" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetKeyPair"></a>

```python
def reset_key_pair() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_placement` <a name="reset_placement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetPlacement"></a>

```python
def reset_placement() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_sns_topic_arn` <a name="reset_sns_topic_arn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSnsTopicArn"></a>

```python
def reset_sns_topic_arn() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_terminate_instance_on_failure` <a name="reset_terminate_instance_on_failure" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetTerminateInstanceOnFailure"></a>

```python
def reset_terminate_instance_on_failure() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ImagebuilderInfrastructureConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import imagebuilder_infrastructure_configuration

imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import imagebuilder_infrastructure_configuration

imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import imagebuilder_infrastructure_configuration

imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import imagebuilder_infrastructure_configuration

imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ImagebuilderInfrastructureConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ImagebuilderInfrastructureConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ImagebuilderInfrastructureConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderInfrastructureConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceMetadataOptions">instance_metadata_options</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference">ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference">ImagebuilderInfrastructureConfigurationLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference">ImagebuilderInfrastructureConfigurationPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceMetadataOptionsInput">instance_metadata_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceProfileNameInput">instance_profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceTypesInput">instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.keyPairInput">key_pair_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.loggingInput">logging_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.placementInput">placement_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.resourceTagsInput">resource_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailureInput">terminate_instance_on_failure_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceProfileName">instance_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceTypes">instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.keyPair">key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure">terminate_instance_on_failure</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_metadata_options`<sup>Required</sup> <a name="instance_metadata_options" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceMetadataOptions"></a>

```python
instance_metadata_options: ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference">ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.logging"></a>

```python
logging: ImagebuilderInfrastructureConfigurationLoggingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference">ImagebuilderInfrastructureConfigurationLoggingOutputReference</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.placement"></a>

```python
placement: ImagebuilderInfrastructureConfigurationPlacementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference">ImagebuilderInfrastructureConfigurationPlacementOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `instance_metadata_options_input`<sup>Optional</sup> <a name="instance_metadata_options_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceMetadataOptionsInput"></a>

```python
instance_metadata_options_input: IResolvable | ImagebuilderInfrastructureConfigurationInstanceMetadataOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

---

##### `instance_profile_name_input`<sup>Optional</sup> <a name="instance_profile_name_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceProfileNameInput"></a>

```python
instance_profile_name_input: str
```

- *Type:* str

---

##### `instance_types_input`<sup>Optional</sup> <a name="instance_types_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceTypesInput"></a>

```python
instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_pair_input`<sup>Optional</sup> <a name="key_pair_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.keyPairInput"></a>

```python
key_pair_input: str
```

- *Type:* str

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.loggingInput"></a>

```python
logging_input: IResolvable | ImagebuilderInfrastructureConfigurationLogging
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `placement_input`<sup>Optional</sup> <a name="placement_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.placementInput"></a>

```python
placement_input: IResolvable | ImagebuilderInfrastructureConfigurationPlacement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a>

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.resourceTagsInput"></a>

```python
resource_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `terminate_instance_on_failure_input`<sup>Optional</sup> <a name="terminate_instance_on_failure_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailureInput"></a>

```python
terminate_instance_on_failure_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instance_profile_name`<sup>Required</sup> <a name="instance_profile_name" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceProfileName"></a>

```python
instance_profile_name: str
```

- *Type:* str

---

##### `instance_types`<sup>Required</sup> <a name="instance_types" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceTypes"></a>

```python
instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_pair`<sup>Required</sup> <a name="key_pair" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.resourceTags"></a>

```python
resource_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `terminate_instance_on_failure`<sup>Required</sup> <a name="terminate_instance_on_failure" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure"></a>

```python
terminate_instance_on_failure: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderInfrastructureConfigurationConfig <a name="ImagebuilderInfrastructureConfigurationConfig" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_infrastructure_configuration

imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_profile_name: str,
  name: str,
  description: str = None,
  instance_metadata_options: ImagebuilderInfrastructureConfigurationInstanceMetadataOptions = None,
  instance_types: typing.List[str] = None,
  key_pair: str = None,
  logging: ImagebuilderInfrastructureConfigurationLogging = None,
  placement: ImagebuilderInfrastructureConfigurationPlacement = None,
  resource_tags: typing.Mapping[str] = None,
  security_group_ids: typing.List[str] = None,
  sns_topic_arn: str = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  terminate_instance_on_failure: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceProfileName">instance_profile_name</a></code> | <code>str</code> | The instance profile of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.name">name</a></code> | <code>str</code> | The name of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.description">description</a></code> | <code>str</code> | The description of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceMetadataOptions">instance_metadata_options</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a></code> | The instance metadata option settings for the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceTypes">instance_types</a></code> | <code>typing.List[str]</code> | The instance types of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.keyPair">key_pair</a></code> | <code>str</code> | The EC2 key pair of the infrastructure configuration.. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a></code> | The logging configuration of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a></code> | The placement option settings for the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | The tags attached to the resource created by Image Builder. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The security group IDs of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | The SNS Topic Amazon Resource Name (ARN) of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | The subnet ID of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tags associated with the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.terminateInstanceOnFailure">terminate_instance_on_failure</a></code> | <code>bool \| cdktn.IResolvable</code> | The terminate instance on failure configuration of the infrastructure configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_profile_name`<sup>Required</sup> <a name="instance_profile_name" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceProfileName"></a>

```python
instance_profile_name: str
```

- *Type:* str

The instance profile of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#instance_profile_name ImagebuilderInfrastructureConfiguration#instance_profile_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#name ImagebuilderInfrastructureConfiguration#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#description ImagebuilderInfrastructureConfiguration#description}

---

##### `instance_metadata_options`<sup>Optional</sup> <a name="instance_metadata_options" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceMetadataOptions"></a>

```python
instance_metadata_options: ImagebuilderInfrastructureConfigurationInstanceMetadataOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

The instance metadata option settings for the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#instance_metadata_options ImagebuilderInfrastructureConfiguration#instance_metadata_options}

---

##### `instance_types`<sup>Optional</sup> <a name="instance_types" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceTypes"></a>

```python
instance_types: typing.List[str]
```

- *Type:* typing.List[str]

The instance types of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#instance_types ImagebuilderInfrastructureConfiguration#instance_types}

---

##### `key_pair`<sup>Optional</sup> <a name="key_pair" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

The EC2 key pair of the infrastructure configuration..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#key_pair ImagebuilderInfrastructureConfiguration#key_pair}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.logging"></a>

```python
logging: ImagebuilderInfrastructureConfigurationLogging
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a>

The logging configuration of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#logging ImagebuilderInfrastructureConfiguration#logging}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.placement"></a>

```python
placement: ImagebuilderInfrastructureConfigurationPlacement
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a>

The placement option settings for the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#placement ImagebuilderInfrastructureConfiguration#placement}

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.resourceTags"></a>

```python
resource_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The tags attached to the resource created by Image Builder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#resource_tags ImagebuilderInfrastructureConfiguration#resource_tags}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The security group IDs of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#security_group_ids ImagebuilderInfrastructureConfiguration#security_group_ids}

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

The SNS Topic Amazon Resource Name (ARN) of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#sns_topic_arn ImagebuilderInfrastructureConfiguration#sns_topic_arn}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The subnet ID of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#subnet_id ImagebuilderInfrastructureConfiguration#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The tags associated with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#tags ImagebuilderInfrastructureConfiguration#tags}

---

##### `terminate_instance_on_failure`<sup>Optional</sup> <a name="terminate_instance_on_failure" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.terminateInstanceOnFailure"></a>

```python
terminate_instance_on_failure: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The terminate instance on failure configuration of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#terminate_instance_on_failure ImagebuilderInfrastructureConfiguration#terminate_instance_on_failure}

---

### ImagebuilderInfrastructureConfigurationInstanceMetadataOptions <a name="ImagebuilderInfrastructureConfigurationInstanceMetadataOptions" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_infrastructure_configuration

imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions(
  http_put_response_hop_limit: typing.Union[int, float] = None,
  http_tokens: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | Limit the number of hops that an instance metadata request can traverse to reach its destination. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.property.httpTokens">http_tokens</a></code> | <code>str</code> | Indicates whether a signed token header is required for instance metadata retrieval requests. |

---

##### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Limit the number of hops that an instance metadata request can traverse to reach its destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#http_put_response_hop_limit ImagebuilderInfrastructureConfiguration#http_put_response_hop_limit}

---

##### `http_tokens`<sup>Optional</sup> <a name="http_tokens" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

Indicates whether a signed token header is required for instance metadata retrieval requests.

The values affect the response as follows:

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#http_tokens ImagebuilderInfrastructureConfiguration#http_tokens}

---

### ImagebuilderInfrastructureConfigurationLogging <a name="ImagebuilderInfrastructureConfigurationLogging" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_infrastructure_configuration

imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging(
  s3_logs: ImagebuilderInfrastructureConfigurationLoggingS3Logs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging.property.s3Logs">s3_logs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a></code> | The S3 path in which to store the logs. |

---

##### `s3_logs`<sup>Optional</sup> <a name="s3_logs" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging.property.s3Logs"></a>

```python
s3_logs: ImagebuilderInfrastructureConfigurationLoggingS3Logs
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

The S3 path in which to store the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#s3_logs ImagebuilderInfrastructureConfiguration#s3_logs}

---

### ImagebuilderInfrastructureConfigurationLoggingS3Logs <a name="ImagebuilderInfrastructureConfigurationLoggingS3Logs" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_infrastructure_configuration

imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs(
  s3_bucket_name: str = None,
  s3_key_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | S3BucketName. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | S3KeyPrefix. |

---

##### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

S3BucketName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#s3_bucket_name ImagebuilderInfrastructureConfiguration#s3_bucket_name}

---

##### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

S3KeyPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#s3_key_prefix ImagebuilderInfrastructureConfiguration#s3_key_prefix}

---

### ImagebuilderInfrastructureConfigurationPlacement <a name="ImagebuilderInfrastructureConfigurationPlacement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_infrastructure_configuration

imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement(
  availability_zone: str = None,
  host_id: str = None,
  host_resource_group_arn: str = None,
  tenancy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.availabilityZone">availability_zone</a></code> | <code>str</code> | AvailabilityZone. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.hostId">host_id</a></code> | <code>str</code> | HostId. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.hostResourceGroupArn">host_resource_group_arn</a></code> | <code>str</code> | HostResourceGroupArn. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.tenancy">tenancy</a></code> | <code>str</code> | Tenancy. |

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

AvailabilityZone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#availability_zone ImagebuilderInfrastructureConfiguration#availability_zone}

---

##### `host_id`<sup>Optional</sup> <a name="host_id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

HostId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#host_id ImagebuilderInfrastructureConfiguration#host_id}

---

##### `host_resource_group_arn`<sup>Optional</sup> <a name="host_resource_group_arn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.hostResourceGroupArn"></a>

```python
host_resource_group_arn: str
```

- *Type:* str

HostResourceGroupArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#host_resource_group_arn ImagebuilderInfrastructureConfiguration#host_resource_group_arn}

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

Tenancy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#tenancy ImagebuilderInfrastructureConfiguration#tenancy}

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference <a name="ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_infrastructure_configuration

imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">reset_http_put_response_hop_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resetHttpTokens">reset_http_tokens</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_put_response_hop_limit` <a name="reset_http_put_response_hop_limit" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```python
def reset_http_put_response_hop_limit() -> None
```

##### `reset_http_tokens` <a name="reset_http_tokens" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resetHttpTokens"></a>

```python
def reset_http_tokens() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">http_put_response_hop_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokensInput">http_tokens_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokens">http_tokens</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_put_response_hop_limit_input`<sup>Optional</sup> <a name="http_put_response_hop_limit_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```python
http_put_response_hop_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens_input`<sup>Optional</sup> <a name="http_tokens_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```python
http_tokens_input: str
```

- *Type:* str

---

##### `http_put_response_hop_limit`<sup>Required</sup> <a name="http_put_response_hop_limit" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderInfrastructureConfigurationInstanceMetadataOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

---


### ImagebuilderInfrastructureConfigurationLoggingOutputReference <a name="ImagebuilderInfrastructureConfigurationLoggingOutputReference" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_infrastructure_configuration

imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.putS3Logs">put_s3_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.resetS3Logs">reset_s3_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_logs` <a name="put_s3_logs" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.putS3Logs"></a>

```python
def put_s3_logs(
  s3_bucket_name: str = None,
  s3_key_prefix: str = None
) -> None
```

###### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.putS3Logs.parameter.s3BucketName"></a>

- *Type:* str

S3BucketName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#s3_bucket_name ImagebuilderInfrastructureConfiguration#s3_bucket_name}

---

###### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.putS3Logs.parameter.s3KeyPrefix"></a>

- *Type:* str

S3KeyPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#s3_key_prefix ImagebuilderInfrastructureConfiguration#s3_key_prefix}

---

##### `reset_s3_logs` <a name="reset_s3_logs" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.resetS3Logs"></a>

```python
def reset_s3_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3Logs">s3_logs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference">ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3LogsInput">s3_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_logs`<sup>Required</sup> <a name="s3_logs" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3Logs"></a>

```python
s3_logs: ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference">ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference</a>

---

##### `s3_logs_input`<sup>Optional</sup> <a name="s3_logs_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3LogsInput"></a>

```python
s3_logs_input: IResolvable | ImagebuilderInfrastructureConfigurationLoggingS3Logs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderInfrastructureConfigurationLogging
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a>

---


### ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference <a name="ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_infrastructure_configuration

imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resetS3BucketName">reset_s3_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resetS3KeyPrefix">reset_s3_key_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_bucket_name` <a name="reset_s3_bucket_name" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resetS3BucketName"></a>

```python
def reset_s3_bucket_name() -> None
```

##### `reset_s3_key_prefix` <a name="reset_s3_key_prefix" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resetS3KeyPrefix"></a>

```python
def reset_s3_key_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefixInput">s3_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_key_prefix_input`<sup>Optional</sup> <a name="s3_key_prefix_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefixInput"></a>

```python
s3_key_prefix_input: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_key_prefix`<sup>Required</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderInfrastructureConfigurationLoggingS3Logs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

---


### ImagebuilderInfrastructureConfigurationPlacementOutputReference <a name="ImagebuilderInfrastructureConfigurationPlacementOutputReference" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_infrastructure_configuration

imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetHostId">reset_host_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetHostResourceGroupArn">reset_host_resource_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetTenancy">reset_tenancy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_host_id` <a name="reset_host_id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetHostId"></a>

```python
def reset_host_id() -> None
```

##### `reset_host_resource_group_arn` <a name="reset_host_resource_group_arn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetHostResourceGroupArn"></a>

```python
def reset_host_resource_group_arn() -> None
```

##### `reset_tenancy` <a name="reset_tenancy" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetTenancy"></a>

```python
def reset_tenancy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostIdInput">host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArnInput">host_resource_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancyInput">tenancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArn">host_resource_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `host_id_input`<sup>Optional</sup> <a name="host_id_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostIdInput"></a>

```python
host_id_input: str
```

- *Type:* str

---

##### `host_resource_group_arn_input`<sup>Optional</sup> <a name="host_resource_group_arn_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArnInput"></a>

```python
host_resource_group_arn_input: str
```

- *Type:* str

---

##### `tenancy_input`<sup>Optional</sup> <a name="tenancy_input" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancyInput"></a>

```python
tenancy_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `host_resource_group_arn`<sup>Required</sup> <a name="host_resource_group_arn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArn"></a>

```python
host_resource_group_arn: str
```

- *Type:* str

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderInfrastructureConfigurationPlacement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a>

---



