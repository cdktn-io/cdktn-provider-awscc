# `resiliencehubv2Service` Submodule <a name="`resiliencehubv2Service` Submodule" id="@cdktn/provider-awscc.resiliencehubv2Service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2Service <a name="Resiliencehubv2Service" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service awscc_resiliencehubv2_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2Service(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  regions: typing.List[str],
  assertions: IResolvable | typing.List[Resiliencehubv2ServiceAssertions] = None,
  associated_systems: IResolvable | typing.List[Resiliencehubv2ServiceAssociatedSystems] = None,
  dependency_discovery: str = None,
  description: str = None,
  input_sources: IResolvable | typing.List[Resiliencehubv2ServiceInputSources] = None,
  kms_key_id: str = None,
  permission_model: Resiliencehubv2ServicePermissionModel = None,
  policy_arn: str = None,
  report_configuration: Resiliencehubv2ServiceReportConfiguration = None,
  tags: IResolvable | typing.List[Resiliencehubv2ServiceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.regions">regions</a></code> | <code>typing.List[str]</code> | AWS regions for the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.assertions">assertions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>]</code> | Assertions associated with this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.associatedSystems">associated_systems</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>]</code> | Systems associated with this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.dependencyDiscovery">dependency_discovery</a></code> | <code>str</code> | Dependency discovery state. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.inputSources">input_sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>]</code> | Input sources for this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The KMS key ID for encrypting service data. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.permissionModel">permission_model</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.policyArn">policy_arn</a></code> | <code>str</code> | The ARN of the resilience policy to associate. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.reportConfiguration">report_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a></code> | Configuration for automatic report generation on a Service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>]</code> | Tags assigned to the service. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.name"></a>

- *Type:* str

The name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#name Resiliencehubv2Service#name}

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.regions"></a>

- *Type:* typing.List[str]

AWS regions for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#regions Resiliencehubv2Service#regions}

---

##### `assertions`<sup>Optional</sup> <a name="assertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.assertions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>]

Assertions associated with this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#assertions Resiliencehubv2Service#assertions}

---

##### `associated_systems`<sup>Optional</sup> <a name="associated_systems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.associatedSystems"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>]

Systems associated with this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#associated_systems Resiliencehubv2Service#associated_systems}

---

##### `dependency_discovery`<sup>Optional</sup> <a name="dependency_discovery" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.dependencyDiscovery"></a>

- *Type:* str

Dependency discovery state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#dependency_discovery Resiliencehubv2Service#dependency_discovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.description"></a>

- *Type:* str

The description of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#description Resiliencehubv2Service#description}

---

##### `input_sources`<sup>Optional</sup> <a name="input_sources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.inputSources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>]

Input sources for this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#input_sources Resiliencehubv2Service#input_sources}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The KMS key ID for encrypting service data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#kms_key_id Resiliencehubv2Service#kms_key_id}

---

##### `permission_model`<sup>Optional</sup> <a name="permission_model" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.permissionModel"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}.

---

##### `policy_arn`<sup>Optional</sup> <a name="policy_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.policyArn"></a>

- *Type:* str

The ARN of the resilience policy to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#policy_arn Resiliencehubv2Service#policy_arn}

---

##### `report_configuration`<sup>Optional</sup> <a name="report_configuration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.reportConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

Configuration for automatic report generation on a Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#report_configuration Resiliencehubv2Service#report_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>]

Tags assigned to the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#tags Resiliencehubv2Service#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssertions">put_assertions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystems">put_associated_systems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putInputSources">put_input_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel">put_permission_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putReportConfiguration">put_report_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetAssertions">reset_assertions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetAssociatedSystems">reset_associated_systems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetDependencyDiscovery">reset_dependency_discovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetInputSources">reset_input_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetPermissionModel">reset_permission_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetPolicyArn">reset_policy_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetReportConfiguration">reset_report_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_assertions` <a name="put_assertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssertions"></a>

```python
def put_assertions(
  value: IResolvable | typing.List[Resiliencehubv2ServiceAssertions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssertions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>]

---

##### `put_associated_systems` <a name="put_associated_systems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystems"></a>

```python
def put_associated_systems(
  value: IResolvable | typing.List[Resiliencehubv2ServiceAssociatedSystems]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystems.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>]

---

##### `put_input_sources` <a name="put_input_sources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putInputSources"></a>

```python
def put_input_sources(
  value: IResolvable | typing.List[Resiliencehubv2ServiceInputSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putInputSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>]

---

##### `put_permission_model` <a name="put_permission_model" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel"></a>

```python
def put_permission_model(
  cross_account_role_arns: IResolvable | typing.List[Resiliencehubv2ServicePermissionModelCrossAccountRoleArns] = None,
  invoker_role_name: str = None
) -> None
```

###### `cross_account_role_arns`<sup>Optional</sup> <a name="cross_account_role_arns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel.parameter.crossAccountRoleArns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>]

Cross-account role ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#cross_account_role_arns Resiliencehubv2Service#cross_account_role_arns}

---

###### `invoker_role_name`<sup>Optional</sup> <a name="invoker_role_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel.parameter.invokerRoleName"></a>

- *Type:* str

Name of the invoker IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#invoker_role_name Resiliencehubv2Service#invoker_role_name}

---

##### `put_report_configuration` <a name="put_report_configuration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putReportConfiguration"></a>

```python
def put_report_configuration(
  report_output: IResolvable | typing.List[Resiliencehubv2ServiceReportConfigurationReportOutput] = None
) -> None
```

###### `report_output`<sup>Optional</sup> <a name="report_output" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putReportConfiguration.parameter.reportOutput"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>]

Output destinations for generated reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#report_output Resiliencehubv2Service#report_output}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Resiliencehubv2ServiceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>]

---

##### `reset_assertions` <a name="reset_assertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetAssertions"></a>

```python
def reset_assertions() -> None
```

##### `reset_associated_systems` <a name="reset_associated_systems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetAssociatedSystems"></a>

```python
def reset_associated_systems() -> None
```

##### `reset_dependency_discovery` <a name="reset_dependency_discovery" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetDependencyDiscovery"></a>

```python
def reset_dependency_discovery() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_input_sources` <a name="reset_input_sources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetInputSources"></a>

```python
def reset_input_sources() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_permission_model` <a name="reset_permission_model" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetPermissionModel"></a>

```python
def reset_permission_model() -> None
```

##### `reset_policy_arn` <a name="reset_policy_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetPolicyArn"></a>

```python
def reset_policy_arn() -> None
```

##### `reset_report_configuration` <a name="reset_report_configuration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetReportConfiguration"></a>

```python
def reset_report_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Resiliencehubv2Service resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isConstruct"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2Service.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2Service.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2Service.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2Service.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Resiliencehubv2Service resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Resiliencehubv2Service to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Resiliencehubv2Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.assertions">assertions</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList">Resiliencehubv2ServiceAssertionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystems">associated_systems</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList">Resiliencehubv2ServiceAssociatedSystemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.effectivePolicyValues">effective_policy_values</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.inputSources">input_sources</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList">Resiliencehubv2ServiceInputSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModel">permission_model</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference">Resiliencehubv2ServicePermissionModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.reportConfiguration">report_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference">Resiliencehubv2ServiceReportConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.serviceArn">service_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList">Resiliencehubv2ServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.assertionsInput">assertions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystemsInput">associated_systems_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscoveryInput">dependency_discovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.inputSourcesInput">input_sources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModelInput">permission_model_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.policyArnInput">policy_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.reportConfigurationInput">report_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscovery">dependency_discovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.policyArn">policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assertions`<sup>Required</sup> <a name="assertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.assertions"></a>

```python
assertions: Resiliencehubv2ServiceAssertionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList">Resiliencehubv2ServiceAssertionsList</a>

---

##### `associated_systems`<sup>Required</sup> <a name="associated_systems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystems"></a>

```python
associated_systems: Resiliencehubv2ServiceAssociatedSystemsList
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList">Resiliencehubv2ServiceAssociatedSystemsList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `effective_policy_values`<sup>Required</sup> <a name="effective_policy_values" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.effectivePolicyValues"></a>

```python
effective_policy_values: Resiliencehubv2ServiceEffectivePolicyValuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_sources`<sup>Required</sup> <a name="input_sources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.inputSources"></a>

```python
input_sources: Resiliencehubv2ServiceInputSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList">Resiliencehubv2ServiceInputSourcesList</a>

---

##### `permission_model`<sup>Required</sup> <a name="permission_model" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModel"></a>

```python
permission_model: Resiliencehubv2ServicePermissionModelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference">Resiliencehubv2ServicePermissionModelOutputReference</a>

---

##### `report_configuration`<sup>Required</sup> <a name="report_configuration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.reportConfiguration"></a>

```python
report_configuration: Resiliencehubv2ServiceReportConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference">Resiliencehubv2ServiceReportConfigurationOutputReference</a>

---

##### `service_arn`<sup>Required</sup> <a name="service_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.serviceArn"></a>

```python
service_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tags"></a>

```python
tags: Resiliencehubv2ServiceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList">Resiliencehubv2ServiceTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `assertions_input`<sup>Optional</sup> <a name="assertions_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.assertionsInput"></a>

```python
assertions_input: IResolvable | typing.List[Resiliencehubv2ServiceAssertions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>]

---

##### `associated_systems_input`<sup>Optional</sup> <a name="associated_systems_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystemsInput"></a>

```python
associated_systems_input: IResolvable | typing.List[Resiliencehubv2ServiceAssociatedSystems]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>]

---

##### `dependency_discovery_input`<sup>Optional</sup> <a name="dependency_discovery_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscoveryInput"></a>

```python
dependency_discovery_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `input_sources_input`<sup>Optional</sup> <a name="input_sources_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.inputSourcesInput"></a>

```python
input_sources_input: IResolvable | typing.List[Resiliencehubv2ServiceInputSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permission_model_input`<sup>Optional</sup> <a name="permission_model_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModelInput"></a>

```python
permission_model_input: IResolvable | Resiliencehubv2ServicePermissionModel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

---

##### `policy_arn_input`<sup>Optional</sup> <a name="policy_arn_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.policyArnInput"></a>

```python
policy_arn_input: str
```

- *Type:* str

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `report_configuration_input`<sup>Optional</sup> <a name="report_configuration_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.reportConfigurationInput"></a>

```python
report_configuration_input: IResolvable | Resiliencehubv2ServiceReportConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Resiliencehubv2ServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>]

---

##### `dependency_discovery`<sup>Required</sup> <a name="dependency_discovery" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscovery"></a>

```python
dependency_discovery: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2ServiceAssertions <a name="Resiliencehubv2ServiceAssertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceAssertions(
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions.property.text">text</a></code> | <code>str</code> | The text of the assertion. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions.property.text"></a>

```python
text: str
```

- *Type:* str

The text of the assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#text Resiliencehubv2Service#text}

---

### Resiliencehubv2ServiceAssociatedSystems <a name="Resiliencehubv2ServiceAssociatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems(
  system_arn: str = None,
  user_journey_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.property.systemArn">system_arn</a></code> | <code>str</code> | The system ARN. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.property.userJourneyIds">user_journey_ids</a></code> | <code>typing.List[str]</code> | User journey IDs associated with this system. |

---

##### `system_arn`<sup>Optional</sup> <a name="system_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.property.systemArn"></a>

```python
system_arn: str
```

- *Type:* str

The system ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#system_arn Resiliencehubv2Service#system_arn}

---

##### `user_journey_ids`<sup>Optional</sup> <a name="user_journey_ids" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.property.userJourneyIds"></a>

```python
user_journey_ids: typing.List[str]
```

- *Type:* typing.List[str]

User journey IDs associated with this system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#user_journey_ids Resiliencehubv2Service#user_journey_ids}

---

### Resiliencehubv2ServiceConfig <a name="Resiliencehubv2ServiceConfig" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  regions: typing.List[str],
  assertions: IResolvable | typing.List[Resiliencehubv2ServiceAssertions] = None,
  associated_systems: IResolvable | typing.List[Resiliencehubv2ServiceAssociatedSystems] = None,
  dependency_discovery: str = None,
  description: str = None,
  input_sources: IResolvable | typing.List[Resiliencehubv2ServiceInputSources] = None,
  kms_key_id: str = None,
  permission_model: Resiliencehubv2ServicePermissionModel = None,
  policy_arn: str = None,
  report_configuration: Resiliencehubv2ServiceReportConfiguration = None,
  tags: IResolvable | typing.List[Resiliencehubv2ServiceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.name">name</a></code> | <code>str</code> | The name of the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.regions">regions</a></code> | <code>typing.List[str]</code> | AWS regions for the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.assertions">assertions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>]</code> | Assertions associated with this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.associatedSystems">associated_systems</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>]</code> | Systems associated with this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependencyDiscovery">dependency_discovery</a></code> | <code>str</code> | Dependency discovery state. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.description">description</a></code> | <code>str</code> | The description of the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.inputSources">input_sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>]</code> | Input sources for this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The KMS key ID for encrypting service data. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.permissionModel">permission_model</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.policyArn">policy_arn</a></code> | <code>str</code> | The ARN of the resilience policy to associate. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.reportConfiguration">report_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a></code> | Configuration for automatic report generation on a Service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>]</code> | Tags assigned to the service. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#name Resiliencehubv2Service#name}

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

AWS regions for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#regions Resiliencehubv2Service#regions}

---

##### `assertions`<sup>Optional</sup> <a name="assertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.assertions"></a>

```python
assertions: IResolvable | typing.List[Resiliencehubv2ServiceAssertions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>]

Assertions associated with this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#assertions Resiliencehubv2Service#assertions}

---

##### `associated_systems`<sup>Optional</sup> <a name="associated_systems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.associatedSystems"></a>

```python
associated_systems: IResolvable | typing.List[Resiliencehubv2ServiceAssociatedSystems]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>]

Systems associated with this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#associated_systems Resiliencehubv2Service#associated_systems}

---

##### `dependency_discovery`<sup>Optional</sup> <a name="dependency_discovery" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependencyDiscovery"></a>

```python
dependency_discovery: str
```

- *Type:* str

Dependency discovery state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#dependency_discovery Resiliencehubv2Service#dependency_discovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#description Resiliencehubv2Service#description}

---

##### `input_sources`<sup>Optional</sup> <a name="input_sources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.inputSources"></a>

```python
input_sources: IResolvable | typing.List[Resiliencehubv2ServiceInputSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>]

Input sources for this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#input_sources Resiliencehubv2Service#input_sources}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The KMS key ID for encrypting service data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#kms_key_id Resiliencehubv2Service#kms_key_id}

---

##### `permission_model`<sup>Optional</sup> <a name="permission_model" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.permissionModel"></a>

```python
permission_model: Resiliencehubv2ServicePermissionModel
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}.

---

##### `policy_arn`<sup>Optional</sup> <a name="policy_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

The ARN of the resilience policy to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#policy_arn Resiliencehubv2Service#policy_arn}

---

##### `report_configuration`<sup>Optional</sup> <a name="report_configuration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.reportConfiguration"></a>

```python
report_configuration: Resiliencehubv2ServiceReportConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

Configuration for automatic report generation on a Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#report_configuration Resiliencehubv2Service#report_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Resiliencehubv2ServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>]

Tags assigned to the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#tags Resiliencehubv2Service#tags}

---

### Resiliencehubv2ServiceEffectivePolicyValues <a name="Resiliencehubv2ServiceEffectivePolicyValues" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues()
```


### Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo <a name="Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo()
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach()
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo()
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto()
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach()
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo()
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto()
```


### Resiliencehubv2ServiceInputSources <a name="Resiliencehubv2ServiceInputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceInputSources(
  resource_configuration: Resiliencehubv2ServiceInputSourcesResourceConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources.property.resourceConfiguration">resource_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a></code> | Resource configuration for an input source. Provide exactly one field. |

---

##### `resource_configuration`<sup>Optional</sup> <a name="resource_configuration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources.property.resourceConfiguration"></a>

```python
resource_configuration: Resiliencehubv2ServiceInputSourcesResourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a>

Resource configuration for an input source. Provide exactly one field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#resource_configuration Resiliencehubv2Service#resource_configuration}

---

### Resiliencehubv2ServiceInputSourcesResourceConfiguration <a name="Resiliencehubv2ServiceInputSourcesResourceConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration(
  cfn_stack_arn: str = None,
  design_file_s3_url: str = None,
  eks: Resiliencehubv2ServiceInputSourcesResourceConfigurationEks = None,
  resource_tags: IResolvable | typing.List[Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags] = None,
  tf_state_file_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.cfnStackArn">cfn_stack_arn</a></code> | <code>str</code> | ARN of a CloudFormation stack. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.designFileS3Url">design_file_s3_url</a></code> | <code>str</code> | S3 URL of a design file. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.eks">eks</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#eks Resiliencehubv2Service#eks}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.resourceTags">resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>]</code> | Resource tags to discover resources. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.tfStateFileUrl">tf_state_file_url</a></code> | <code>str</code> | URL of a Terraform state file. |

---

##### `cfn_stack_arn`<sup>Optional</sup> <a name="cfn_stack_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.cfnStackArn"></a>

```python
cfn_stack_arn: str
```

- *Type:* str

ARN of a CloudFormation stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#cfn_stack_arn Resiliencehubv2Service#cfn_stack_arn}

---

##### `design_file_s3_url`<sup>Optional</sup> <a name="design_file_s3_url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.designFileS3Url"></a>

```python
design_file_s3_url: str
```

- *Type:* str

S3 URL of a design file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#design_file_s3_url Resiliencehubv2Service#design_file_s3_url}

---

##### `eks`<sup>Optional</sup> <a name="eks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.eks"></a>

```python
eks: Resiliencehubv2ServiceInputSourcesResourceConfigurationEks
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#eks Resiliencehubv2Service#eks}.

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.resourceTags"></a>

```python
resource_tags: IResolvable | typing.List[Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>]

Resource tags to discover resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#resource_tags Resiliencehubv2Service#resource_tags}

---

##### `tf_state_file_url`<sup>Optional</sup> <a name="tf_state_file_url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.tfStateFileUrl"></a>

```python
tf_state_file_url: str
```

- *Type:* str

URL of a Terraform state file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#tf_state_file_url Resiliencehubv2Service#tf_state_file_url}

---

### Resiliencehubv2ServiceInputSourcesResourceConfigurationEks <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationEks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks(
  cluster_arn: str = None,
  namespaces: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.property.clusterArn">cluster_arn</a></code> | <code>str</code> | ARN of the EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | EKS namespaces. |

---

##### `cluster_arn`<sup>Optional</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

ARN of the EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#cluster_arn Resiliencehubv2Service#cluster_arn}

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

EKS namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#namespaces Resiliencehubv2Service#namespaces}

---

### Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags(
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.property.key">key</a></code> | <code>str</code> | Tag key. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.property.values">values</a></code> | <code>typing.List[str]</code> | Tag values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#key Resiliencehubv2Service#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#values Resiliencehubv2Service#values}

---

### Resiliencehubv2ServicePermissionModel <a name="Resiliencehubv2ServicePermissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServicePermissionModel(
  cross_account_role_arns: IResolvable | typing.List[Resiliencehubv2ServicePermissionModelCrossAccountRoleArns] = None,
  invoker_role_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.crossAccountRoleArns">cross_account_role_arns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>]</code> | Cross-account role ARNs. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.invokerRoleName">invoker_role_name</a></code> | <code>str</code> | Name of the invoker IAM role. |

---

##### `cross_account_role_arns`<sup>Optional</sup> <a name="cross_account_role_arns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.crossAccountRoleArns"></a>

```python
cross_account_role_arns: IResolvable | typing.List[Resiliencehubv2ServicePermissionModelCrossAccountRoleArns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>]

Cross-account role ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#cross_account_role_arns Resiliencehubv2Service#cross_account_role_arns}

---

##### `invoker_role_name`<sup>Optional</sup> <a name="invoker_role_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.invokerRoleName"></a>

```python
invoker_role_name: str
```

- *Type:* str

Name of the invoker IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#invoker_role_name Resiliencehubv2Service#invoker_role_name}

---

### Resiliencehubv2ServicePermissionModelCrossAccountRoleArns <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns(
  cross_account_role_arn: str = None,
  external_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.property.crossAccountRoleArn">cross_account_role_arn</a></code> | <code>str</code> | ARN of the cross-account IAM role. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.property.externalId">external_id</a></code> | <code>str</code> | External ID for cross-account access. |

---

##### `cross_account_role_arn`<sup>Optional</sup> <a name="cross_account_role_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.property.crossAccountRoleArn"></a>

```python
cross_account_role_arn: str
```

- *Type:* str

ARN of the cross-account IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#cross_account_role_arn Resiliencehubv2Service#cross_account_role_arn}

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

External ID for cross-account access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#external_id Resiliencehubv2Service#external_id}

---

### Resiliencehubv2ServiceReportConfiguration <a name="Resiliencehubv2ServiceReportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration(
  report_output: IResolvable | typing.List[Resiliencehubv2ServiceReportConfigurationReportOutput] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration.property.reportOutput">report_output</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>]</code> | Output destinations for generated reports. |

---

##### `report_output`<sup>Optional</sup> <a name="report_output" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration.property.reportOutput"></a>

```python
report_output: IResolvable | typing.List[Resiliencehubv2ServiceReportConfigurationReportOutput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>]

Output destinations for generated reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#report_output Resiliencehubv2Service#report_output}

---

### Resiliencehubv2ServiceReportConfigurationReportOutput <a name="Resiliencehubv2ServiceReportConfigurationReportOutput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput(
  s3: Resiliencehubv2ServiceReportConfigurationReportOutputS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a></code> | S3 configuration for report output. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput.property.s3"></a>

```python
s3: Resiliencehubv2ServiceReportConfigurationReportOutputS3
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a>

S3 configuration for report output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#s3 Resiliencehubv2Service#s3}

---

### Resiliencehubv2ServiceReportConfigurationReportOutputS3 <a name="Resiliencehubv2ServiceReportConfigurationReportOutputS3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3(
  bucket_owner: str = None,
  bucket_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | Account ID of the bucket owner. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.property.bucketPath">bucket_path</a></code> | <code>str</code> | S3 bucket path where reports will be written. |

---

##### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

Account ID of the bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#bucket_owner Resiliencehubv2Service#bucket_owner}

---

##### `bucket_path`<sup>Optional</sup> <a name="bucket_path" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.property.bucketPath"></a>

```python
bucket_path: str
```

- *Type:* str

S3 bucket path where reports will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#bucket_path Resiliencehubv2Service#bucket_path}

---

### Resiliencehubv2ServiceTags <a name="Resiliencehubv2ServiceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#key Resiliencehubv2Service#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#value Resiliencehubv2Service#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Resiliencehubv2ServiceAssertionsList <a name="Resiliencehubv2ServiceAssertionsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Resiliencehubv2ServiceAssertionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Resiliencehubv2ServiceAssertions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>]

---


### Resiliencehubv2ServiceAssertionsOutputReference <a name="Resiliencehubv2ServiceAssertionsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_text` <a name="reset_text" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2ServiceAssertions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>

---


### Resiliencehubv2ServiceAssociatedSystemsList <a name="Resiliencehubv2ServiceAssociatedSystemsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Resiliencehubv2ServiceAssociatedSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Resiliencehubv2ServiceAssociatedSystems]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>]

---


### Resiliencehubv2ServiceAssociatedSystemsOutputReference <a name="Resiliencehubv2ServiceAssociatedSystemsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resetSystemArn">reset_system_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resetUserJourneyIds">reset_user_journey_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_system_arn` <a name="reset_system_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resetSystemArn"></a>

```python
def reset_system_arn() -> None
```

##### `reset_user_journey_ids` <a name="reset_user_journey_ids" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resetUserJourneyIds"></a>

```python
def reset_user_journey_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArnInput">system_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIdsInput">user_journey_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArn">system_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIds">user_journey_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `system_arn_input`<sup>Optional</sup> <a name="system_arn_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArnInput"></a>

```python
system_arn_input: str
```

- *Type:* str

---

##### `user_journey_ids_input`<sup>Optional</sup> <a name="user_journey_ids_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIdsInput"></a>

```python
user_journey_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_arn`<sup>Required</sup> <a name="system_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArn"></a>

```python
system_arn: str
```

- *Type:* str

---

##### `user_journey_ids`<sup>Required</sup> <a name="user_journey_ids" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIds"></a>

```python
user_journey_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2ServiceAssociatedSystems
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo">Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.internalValue"></a>

```python
internal_value: Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo">Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.internalValue"></a>

```python
internal_value: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.internalValue"></a>

```python
internal_value: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.internalValue"></a>

```python
internal_value: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.internalValue"></a>

```python
internal_value: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.internalValue"></a>

```python
internal_value: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.internalValue"></a>

```python
internal_value: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.availabilitySlo">availability_slo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzDrApproach">multi_az_dr_approach</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRpo">multi_az_rpo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRto">multi_az_rto</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionDrApproach">multi_region_dr_approach</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRpo">multi_region_rpo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRto">multi_region_rto</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues">Resiliencehubv2ServiceEffectivePolicyValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_slo`<sup>Required</sup> <a name="availability_slo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.availabilitySlo"></a>

```python
availability_slo: Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference</a>

---

##### `multi_az_dr_approach`<sup>Required</sup> <a name="multi_az_dr_approach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzDrApproach"></a>

```python
multi_az_dr_approach: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference</a>

---

##### `multi_az_rpo`<sup>Required</sup> <a name="multi_az_rpo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRpo"></a>

```python
multi_az_rpo: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference</a>

---

##### `multi_az_rto`<sup>Required</sup> <a name="multi_az_rto" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRto"></a>

```python
multi_az_rto: Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference</a>

---

##### `multi_region_dr_approach`<sup>Required</sup> <a name="multi_region_dr_approach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionDrApproach"></a>

```python
multi_region_dr_approach: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference</a>

---

##### `multi_region_rpo`<sup>Required</sup> <a name="multi_region_rpo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRpo"></a>

```python
multi_region_rpo: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference</a>

---

##### `multi_region_rto`<sup>Required</sup> <a name="multi_region_rto" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRto"></a>

```python
multi_region_rto: Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.internalValue"></a>

```python
internal_value: Resiliencehubv2ServiceEffectivePolicyValues
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues">Resiliencehubv2ServiceEffectivePolicyValues</a>

---


### Resiliencehubv2ServiceInputSourcesList <a name="Resiliencehubv2ServiceInputSourcesList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Resiliencehubv2ServiceInputSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Resiliencehubv2ServiceInputSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>]

---


### Resiliencehubv2ServiceInputSourcesOutputReference <a name="Resiliencehubv2ServiceInputSourcesOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.putResourceConfiguration">put_resource_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resetResourceConfiguration">reset_resource_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_resource_configuration` <a name="put_resource_configuration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.putResourceConfiguration"></a>

```python
def put_resource_configuration(
  cfn_stack_arn: str = None,
  design_file_s3_url: str = None,
  eks: Resiliencehubv2ServiceInputSourcesResourceConfigurationEks = None,
  resource_tags: IResolvable | typing.List[Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags] = None,
  tf_state_file_url: str = None
) -> None
```

###### `cfn_stack_arn`<sup>Optional</sup> <a name="cfn_stack_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.putResourceConfiguration.parameter.cfnStackArn"></a>

- *Type:* str

ARN of a CloudFormation stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#cfn_stack_arn Resiliencehubv2Service#cfn_stack_arn}

---

###### `design_file_s3_url`<sup>Optional</sup> <a name="design_file_s3_url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.putResourceConfiguration.parameter.designFileS3Url"></a>

- *Type:* str

S3 URL of a design file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#design_file_s3_url Resiliencehubv2Service#design_file_s3_url}

---

###### `eks`<sup>Optional</sup> <a name="eks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.putResourceConfiguration.parameter.eks"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#eks Resiliencehubv2Service#eks}.

---

###### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.putResourceConfiguration.parameter.resourceTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>]

Resource tags to discover resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#resource_tags Resiliencehubv2Service#resource_tags}

---

###### `tf_state_file_url`<sup>Optional</sup> <a name="tf_state_file_url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.putResourceConfiguration.parameter.tfStateFileUrl"></a>

- *Type:* str

URL of a Terraform state file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#tf_state_file_url Resiliencehubv2Service#tf_state_file_url}

---

##### `reset_resource_configuration` <a name="reset_resource_configuration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resetResourceConfiguration"></a>

```python
def reset_resource_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfiguration">resource_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference">Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfigurationInput">resource_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_configuration`<sup>Required</sup> <a name="resource_configuration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfiguration"></a>

```python
resource_configuration: Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference">Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference</a>

---

##### `resource_configuration_input`<sup>Optional</sup> <a name="resource_configuration_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfigurationInput"></a>

```python
resource_configuration_input: IResolvable | Resiliencehubv2ServiceInputSourcesResourceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2ServiceInputSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>

---


### Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resetClusterArn">reset_cluster_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resetNamespaces">reset_namespaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_arn` <a name="reset_cluster_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resetClusterArn"></a>

```python
def reset_cluster_arn() -> None
```

##### `reset_namespaces` <a name="reset_namespaces" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resetNamespaces"></a>

```python
def reset_namespaces() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArnInput">cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespacesInput">namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_arn_input`<sup>Optional</sup> <a name="cluster_arn_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArnInput"></a>

```python
cluster_arn_input: str
```

- *Type:* str

---

##### `namespaces_input`<sup>Optional</sup> <a name="namespaces_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespacesInput"></a>

```python
namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2ServiceInputSourcesResourceConfigurationEks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

---


### Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putEks">put_eks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putResourceTags">put_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetCfnStackArn">reset_cfn_stack_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetDesignFileS3Url">reset_design_file_s3_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetEks">reset_eks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetResourceTags">reset_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetTfStateFileUrl">reset_tf_state_file_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_eks` <a name="put_eks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putEks"></a>

```python
def put_eks(
  cluster_arn: str = None,
  namespaces: typing.List[str] = None
) -> None
```

###### `cluster_arn`<sup>Optional</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putEks.parameter.clusterArn"></a>

- *Type:* str

ARN of the EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#cluster_arn Resiliencehubv2Service#cluster_arn}

---

###### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putEks.parameter.namespaces"></a>

- *Type:* typing.List[str]

EKS namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#namespaces Resiliencehubv2Service#namespaces}

---

##### `put_resource_tags` <a name="put_resource_tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putResourceTags"></a>

```python
def put_resource_tags(
  value: IResolvable | typing.List[Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putResourceTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>]

---

##### `reset_cfn_stack_arn` <a name="reset_cfn_stack_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetCfnStackArn"></a>

```python
def reset_cfn_stack_arn() -> None
```

##### `reset_design_file_s3_url` <a name="reset_design_file_s3_url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetDesignFileS3Url"></a>

```python
def reset_design_file_s3_url() -> None
```

##### `reset_eks` <a name="reset_eks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetEks"></a>

```python
def reset_eks() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

##### `reset_tf_state_file_url` <a name="reset_tf_state_file_url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetTfStateFileUrl"></a>

```python
def reset_tf_state_file_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eks">eks</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference">Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTags">resource_tags</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArnInput">cfn_stack_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3UrlInput">design_file_s3_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eksInput">eks_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTagsInput">resource_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrlInput">tf_state_file_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArn">cfn_stack_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3Url">design_file_s3_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrl">tf_state_file_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eks`<sup>Required</sup> <a name="eks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eks"></a>

```python
eks: Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference">Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference</a>

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTags"></a>

```python
resource_tags: Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList</a>

---

##### `cfn_stack_arn_input`<sup>Optional</sup> <a name="cfn_stack_arn_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArnInput"></a>

```python
cfn_stack_arn_input: str
```

- *Type:* str

---

##### `design_file_s3_url_input`<sup>Optional</sup> <a name="design_file_s3_url_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3UrlInput"></a>

```python
design_file_s3_url_input: str
```

- *Type:* str

---

##### `eks_input`<sup>Optional</sup> <a name="eks_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eksInput"></a>

```python
eks_input: IResolvable | Resiliencehubv2ServiceInputSourcesResourceConfigurationEks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTagsInput"></a>

```python
resource_tags_input: IResolvable | typing.List[Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>]

---

##### `tf_state_file_url_input`<sup>Optional</sup> <a name="tf_state_file_url_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrlInput"></a>

```python
tf_state_file_url_input: str
```

- *Type:* str

---

##### `cfn_stack_arn`<sup>Required</sup> <a name="cfn_stack_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArn"></a>

```python
cfn_stack_arn: str
```

- *Type:* str

---

##### `design_file_s3_url`<sup>Required</sup> <a name="design_file_s3_url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3Url"></a>

```python
design_file_s3_url: str
```

- *Type:* str

---

##### `tf_state_file_url`<sup>Required</sup> <a name="tf_state_file_url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrl"></a>

```python
tf_state_file_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2ServiceInputSourcesResourceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a>

---


### Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>]

---


### Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>

---


### Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Resiliencehubv2ServicePermissionModelCrossAccountRoleArns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>]

---


### Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resetCrossAccountRoleArn">reset_cross_account_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cross_account_role_arn` <a name="reset_cross_account_role_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resetCrossAccountRoleArn"></a>

```python
def reset_cross_account_role_arn() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArnInput">cross_account_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArn">cross_account_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_account_role_arn_input`<sup>Optional</sup> <a name="cross_account_role_arn_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArnInput"></a>

```python
cross_account_role_arn_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `cross_account_role_arn`<sup>Required</sup> <a name="cross_account_role_arn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArn"></a>

```python
cross_account_role_arn: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2ServicePermissionModelCrossAccountRoleArns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>

---


### Resiliencehubv2ServicePermissionModelOutputReference <a name="Resiliencehubv2ServicePermissionModelOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRoleArns">put_cross_account_role_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetCrossAccountRoleArns">reset_cross_account_role_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetInvokerRoleName">reset_invoker_role_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cross_account_role_arns` <a name="put_cross_account_role_arns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRoleArns"></a>

```python
def put_cross_account_role_arns(
  value: IResolvable | typing.List[Resiliencehubv2ServicePermissionModelCrossAccountRoleArns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRoleArns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>]

---

##### `reset_cross_account_role_arns` <a name="reset_cross_account_role_arns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetCrossAccountRoleArns"></a>

```python
def reset_cross_account_role_arns() -> None
```

##### `reset_invoker_role_name` <a name="reset_invoker_role_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetInvokerRoleName"></a>

```python
def reset_invoker_role_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArns">cross_account_role_arns</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList">Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArnsInput">cross_account_role_arns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleNameInput">invoker_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName">invoker_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_account_role_arns`<sup>Required</sup> <a name="cross_account_role_arns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArns"></a>

```python
cross_account_role_arns: Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList">Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList</a>

---

##### `cross_account_role_arns_input`<sup>Optional</sup> <a name="cross_account_role_arns_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArnsInput"></a>

```python
cross_account_role_arns_input: IResolvable | typing.List[Resiliencehubv2ServicePermissionModelCrossAccountRoleArns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>]

---

##### `invoker_role_name_input`<sup>Optional</sup> <a name="invoker_role_name_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleNameInput"></a>

```python
invoker_role_name_input: str
```

- *Type:* str

---

##### `invoker_role_name`<sup>Required</sup> <a name="invoker_role_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName"></a>

```python
invoker_role_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2ServicePermissionModel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

---


### Resiliencehubv2ServiceReportConfigurationOutputReference <a name="Resiliencehubv2ServiceReportConfigurationOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.putReportOutput">put_report_output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resetReportOutput">reset_report_output</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_report_output` <a name="put_report_output" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.putReportOutput"></a>

```python
def put_report_output(
  value: IResolvable | typing.List[Resiliencehubv2ServiceReportConfigurationReportOutput]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.putReportOutput.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>]

---

##### `reset_report_output` <a name="reset_report_output" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resetReportOutput"></a>

```python
def reset_report_output() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutput">report_output</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList">Resiliencehubv2ServiceReportConfigurationReportOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutputInput">report_output_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `report_output`<sup>Required</sup> <a name="report_output" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutput"></a>

```python
report_output: Resiliencehubv2ServiceReportConfigurationReportOutputList
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList">Resiliencehubv2ServiceReportConfigurationReportOutputList</a>

---

##### `report_output_input`<sup>Optional</sup> <a name="report_output_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutputInput"></a>

```python
report_output_input: IResolvable | typing.List[Resiliencehubv2ServiceReportConfigurationReportOutput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2ServiceReportConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

---


### Resiliencehubv2ServiceReportConfigurationReportOutputList <a name="Resiliencehubv2ServiceReportConfigurationReportOutputList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Resiliencehubv2ServiceReportConfigurationReportOutput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>]

---


### Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference <a name="Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.putS3"></a>

```python
def put_s3(
  bucket_owner: str = None,
  bucket_path: str = None
) -> None
```

###### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.putS3.parameter.bucketOwner"></a>

- *Type:* str

Account ID of the bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#bucket_owner Resiliencehubv2Service#bucket_owner}

---

###### `bucket_path`<sup>Optional</sup> <a name="bucket_path" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.putS3.parameter.bucketPath"></a>

- *Type:* str

S3 bucket path where reports will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_service#bucket_path Resiliencehubv2Service#bucket_path}

---

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference">Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3Input">s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3"></a>

```python
s3: Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference">Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3Input"></a>

```python
s3_input: IResolvable | Resiliencehubv2ServiceReportConfigurationReportOutputS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2ServiceReportConfigurationReportOutput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>

---


### Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference <a name="Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resetBucketOwner">reset_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resetBucketPath">reset_bucket_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_owner` <a name="reset_bucket_owner" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resetBucketOwner"></a>

```python
def reset_bucket_owner() -> None
```

##### `reset_bucket_path` <a name="reset_bucket_path" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resetBucketPath"></a>

```python
def reset_bucket_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwnerInput">bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPathInput">bucket_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPath">bucket_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_owner_input`<sup>Optional</sup> <a name="bucket_owner_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwnerInput"></a>

```python
bucket_owner_input: str
```

- *Type:* str

---

##### `bucket_path_input`<sup>Optional</sup> <a name="bucket_path_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPathInput"></a>

```python
bucket_path_input: str
```

- *Type:* str

---

##### `bucket_owner`<sup>Required</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

---

##### `bucket_path`<sup>Required</sup> <a name="bucket_path" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPath"></a>

```python
bucket_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2ServiceReportConfigurationReportOutputS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a>

---


### Resiliencehubv2ServiceTagsList <a name="Resiliencehubv2ServiceTagsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Resiliencehubv2ServiceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Resiliencehubv2ServiceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>]

---


### Resiliencehubv2ServiceTagsOutputReference <a name="Resiliencehubv2ServiceTagsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_service

resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2ServiceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>

---



