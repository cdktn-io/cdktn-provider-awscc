# `wellarchitectedWorkload` Submodule <a name="`wellarchitectedWorkload` Submodule" id="@cdktn/provider-awscc.wellarchitectedWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WellarchitectedWorkload <a name="WellarchitectedWorkload" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload awscc_wellarchitected_workload}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer"></a>

```python
from cdktn_provider_awscc import wellarchitected_workload

wellarchitectedWorkload.WellarchitectedWorkload(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  environment: str,
  lenses: typing.List[str],
  workload_name: str,
  account_ids: typing.List[str] = None,
  architectural_design: str = None,
  aws_regions: typing.List[str] = None,
  discovery_config: WellarchitectedWorkloadDiscoveryConfig = None,
  industry: str = None,
  industry_type: str = None,
  non_aws_regions: typing.List[str] = None,
  notes: str = None,
  review_owner: str = None,
  tags: IResolvable | typing.List[WellarchitectedWorkloadTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.description">description</a></code> | <code>str</code> | The description for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The environment for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.lenses">lenses</a></code> | <code>typing.List[str]</code> | The list of lenses associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.workloadName">workload_name</a></code> | <code>str</code> | The name of the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.accountIds">account_ids</a></code> | <code>typing.List[str]</code> | The list of Amazon Web Services account IDs associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.architecturalDesign">architectural_design</a></code> | <code>str</code> | The URL of the architectural design for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | The list of Amazon Web Services Regions associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.discoveryConfig">discovery_config</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a></code> | Discovery configuration associated to the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.industry">industry</a></code> | <code>str</code> | The industry for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.industryType">industry_type</a></code> | <code>str</code> | The industry type for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.nonAwsRegions">non_aws_regions</a></code> | <code>typing.List[str]</code> | The list of non-Amazon Web Services Regions associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.notes">notes</a></code> | <code>str</code> | The notes associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.reviewOwner">review_owner</a></code> | <code>str</code> | The review owner of the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>]</code> | The tags associated with the workload. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.description"></a>

- *Type:* str

The description for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#description WellarchitectedWorkload#description}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.environment"></a>

- *Type:* str

The environment for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#environment WellarchitectedWorkload#environment}

---

##### `lenses`<sup>Required</sup> <a name="lenses" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.lenses"></a>

- *Type:* typing.List[str]

The list of lenses associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#lenses WellarchitectedWorkload#lenses}

---

##### `workload_name`<sup>Required</sup> <a name="workload_name" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.workloadName"></a>

- *Type:* str

The name of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#workload_name WellarchitectedWorkload#workload_name}

---

##### `account_ids`<sup>Optional</sup> <a name="account_ids" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.accountIds"></a>

- *Type:* typing.List[str]

The list of Amazon Web Services account IDs associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#account_ids WellarchitectedWorkload#account_ids}

---

##### `architectural_design`<sup>Optional</sup> <a name="architectural_design" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.architecturalDesign"></a>

- *Type:* str

The URL of the architectural design for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#architectural_design WellarchitectedWorkload#architectural_design}

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.awsRegions"></a>

- *Type:* typing.List[str]

The list of Amazon Web Services Regions associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#aws_regions WellarchitectedWorkload#aws_regions}

---

##### `discovery_config`<sup>Optional</sup> <a name="discovery_config" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.discoveryConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

Discovery configuration associated to the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#discovery_config WellarchitectedWorkload#discovery_config}

---

##### `industry`<sup>Optional</sup> <a name="industry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.industry"></a>

- *Type:* str

The industry for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#industry WellarchitectedWorkload#industry}

---

##### `industry_type`<sup>Optional</sup> <a name="industry_type" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.industryType"></a>

- *Type:* str

The industry type for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#industry_type WellarchitectedWorkload#industry_type}

---

##### `non_aws_regions`<sup>Optional</sup> <a name="non_aws_regions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.nonAwsRegions"></a>

- *Type:* typing.List[str]

The list of non-Amazon Web Services Regions associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#non_aws_regions WellarchitectedWorkload#non_aws_regions}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.notes"></a>

- *Type:* str

The notes associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#notes WellarchitectedWorkload#notes}

---

##### `review_owner`<sup>Optional</sup> <a name="review_owner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.reviewOwner"></a>

- *Type:* str

The review owner of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#review_owner WellarchitectedWorkload#review_owner}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>]

The tags associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#tags WellarchitectedWorkload#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putDiscoveryConfig">put_discovery_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAccountIds">reset_account_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetArchitecturalDesign">reset_architectural_design</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetDiscoveryConfig">reset_discovery_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustry">reset_industry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustryType">reset_industry_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNonAwsRegions">reset_non_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNotes">reset_notes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetReviewOwner">reset_review_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_discovery_config` <a name="put_discovery_config" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putDiscoveryConfig"></a>

```python
def put_discovery_config(
  trusted_advisor_integration_status: str = None,
  workload_resource_definition: typing.List[str] = None
) -> None
```

###### `trusted_advisor_integration_status`<sup>Optional</sup> <a name="trusted_advisor_integration_status" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putDiscoveryConfig.parameter.trustedAdvisorIntegrationStatus"></a>

- *Type:* str

Discovery integration status in respect to Trusted Advisor for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#trusted_advisor_integration_status WellarchitectedWorkload#trusted_advisor_integration_status}

---

###### `workload_resource_definition`<sup>Optional</sup> <a name="workload_resource_definition" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putDiscoveryConfig.parameter.workloadResourceDefinition"></a>

- *Type:* typing.List[str]

The mode to use for identifying resources associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#workload_resource_definition WellarchitectedWorkload#workload_resource_definition}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WellarchitectedWorkloadTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>]

---

##### `reset_account_ids` <a name="reset_account_ids" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAccountIds"></a>

```python
def reset_account_ids() -> None
```

##### `reset_architectural_design` <a name="reset_architectural_design" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetArchitecturalDesign"></a>

```python
def reset_architectural_design() -> None
```

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_discovery_config` <a name="reset_discovery_config" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetDiscoveryConfig"></a>

```python
def reset_discovery_config() -> None
```

##### `reset_industry` <a name="reset_industry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustry"></a>

```python
def reset_industry() -> None
```

##### `reset_industry_type` <a name="reset_industry_type" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustryType"></a>

```python
def reset_industry_type() -> None
```

##### `reset_non_aws_regions` <a name="reset_non_aws_regions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNonAwsRegions"></a>

```python
def reset_non_aws_regions() -> None
```

##### `reset_notes` <a name="reset_notes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNotes"></a>

```python
def reset_notes() -> None
```

##### `reset_review_owner` <a name="reset_review_owner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetReviewOwner"></a>

```python
def reset_review_owner() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WellarchitectedWorkload resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isConstruct"></a>

```python
from cdktn_provider_awscc import wellarchitected_workload

wellarchitectedWorkload.WellarchitectedWorkload.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformElement"></a>

```python
from cdktn_provider_awscc import wellarchitected_workload

wellarchitectedWorkload.WellarchitectedWorkload.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformResource"></a>

```python
from cdktn_provider_awscc import wellarchitected_workload

wellarchitectedWorkload.WellarchitectedWorkload.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import wellarchitected_workload

wellarchitectedWorkload.WellarchitectedWorkload.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WellarchitectedWorkload resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WellarchitectedWorkload to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WellarchitectedWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WellarchitectedWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfig">discovery_config</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference">WellarchitectedWorkloadDiscoveryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.improvementStatus">improvement_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList">WellarchitectedWorkloadTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadArn">workload_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadId">workload_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIdsInput">account_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesignInput">architectural_design_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfigInput">discovery_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryInput">industry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryTypeInput">industry_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lensesInput">lenses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegionsInput">non_aws_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notesInput">notes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwnerInput">review_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadNameInput">workload_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIds">account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesign">architectural_design</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industry">industry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryType">industry_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lenses">lenses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegions">non_aws_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notes">notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwner">review_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadName">workload_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `discovery_config`<sup>Required</sup> <a name="discovery_config" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfig"></a>

```python
discovery_config: WellarchitectedWorkloadDiscoveryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference">WellarchitectedWorkloadDiscoveryConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `improvement_status`<sup>Required</sup> <a name="improvement_status" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.improvementStatus"></a>

```python
improvement_status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tags"></a>

```python
tags: WellarchitectedWorkloadTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList">WellarchitectedWorkloadTagsList</a>

---

##### `workload_arn`<sup>Required</sup> <a name="workload_arn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadArn"></a>

```python
workload_arn: str
```

- *Type:* str

---

##### `workload_id`<sup>Required</sup> <a name="workload_id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadId"></a>

```python
workload_id: str
```

- *Type:* str

---

##### `account_ids_input`<sup>Optional</sup> <a name="account_ids_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIdsInput"></a>

```python
account_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `architectural_design_input`<sup>Optional</sup> <a name="architectural_design_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesignInput"></a>

```python
architectural_design_input: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `discovery_config_input`<sup>Optional</sup> <a name="discovery_config_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfigInput"></a>

```python
discovery_config_input: IResolvable | WellarchitectedWorkloadDiscoveryConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `industry_input`<sup>Optional</sup> <a name="industry_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryInput"></a>

```python
industry_input: str
```

- *Type:* str

---

##### `industry_type_input`<sup>Optional</sup> <a name="industry_type_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryTypeInput"></a>

```python
industry_type_input: str
```

- *Type:* str

---

##### `lenses_input`<sup>Optional</sup> <a name="lenses_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lensesInput"></a>

```python
lenses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `non_aws_regions_input`<sup>Optional</sup> <a name="non_aws_regions_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegionsInput"></a>

```python
non_aws_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notes_input`<sup>Optional</sup> <a name="notes_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notesInput"></a>

```python
notes_input: str
```

- *Type:* str

---

##### `review_owner_input`<sup>Optional</sup> <a name="review_owner_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwnerInput"></a>

```python
review_owner_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WellarchitectedWorkloadTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>]

---

##### `workload_name_input`<sup>Optional</sup> <a name="workload_name_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadNameInput"></a>

```python
workload_name_input: str
```

- *Type:* str

---

##### `account_ids`<sup>Required</sup> <a name="account_ids" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIds"></a>

```python
account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `architectural_design`<sup>Required</sup> <a name="architectural_design" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesign"></a>

```python
architectural_design: str
```

- *Type:* str

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `industry`<sup>Required</sup> <a name="industry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industry"></a>

```python
industry: str
```

- *Type:* str

---

##### `industry_type`<sup>Required</sup> <a name="industry_type" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryType"></a>

```python
industry_type: str
```

- *Type:* str

---

##### `lenses`<sup>Required</sup> <a name="lenses" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lenses"></a>

```python
lenses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `non_aws_regions`<sup>Required</sup> <a name="non_aws_regions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegions"></a>

```python
non_aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notes"></a>

```python
notes: str
```

- *Type:* str

---

##### `review_owner`<sup>Required</sup> <a name="review_owner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwner"></a>

```python
review_owner: str
```

- *Type:* str

---

##### `workload_name`<sup>Required</sup> <a name="workload_name" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadName"></a>

```python
workload_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WellarchitectedWorkloadConfig <a name="WellarchitectedWorkloadConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wellarchitected_workload

wellarchitectedWorkload.WellarchitectedWorkloadConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  environment: str,
  lenses: typing.List[str],
  workload_name: str,
  account_ids: typing.List[str] = None,
  architectural_design: str = None,
  aws_regions: typing.List[str] = None,
  discovery_config: WellarchitectedWorkloadDiscoveryConfig = None,
  industry: str = None,
  industry_type: str = None,
  non_aws_regions: typing.List[str] = None,
  notes: str = None,
  review_owner: str = None,
  tags: IResolvable | typing.List[WellarchitectedWorkloadTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.description">description</a></code> | <code>str</code> | The description for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.environment">environment</a></code> | <code>str</code> | The environment for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lenses">lenses</a></code> | <code>typing.List[str]</code> | The list of lenses associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.workloadName">workload_name</a></code> | <code>str</code> | The name of the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.accountIds">account_ids</a></code> | <code>typing.List[str]</code> | The list of Amazon Web Services account IDs associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.architecturalDesign">architectural_design</a></code> | <code>str</code> | The URL of the architectural design for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.awsRegions">aws_regions</a></code> | <code>typing.List[str]</code> | The list of Amazon Web Services Regions associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.discoveryConfig">discovery_config</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a></code> | Discovery configuration associated to the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industry">industry</a></code> | <code>str</code> | The industry for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industryType">industry_type</a></code> | <code>str</code> | The industry type for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.nonAwsRegions">non_aws_regions</a></code> | <code>typing.List[str]</code> | The list of non-Amazon Web Services Regions associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.notes">notes</a></code> | <code>str</code> | The notes associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.reviewOwner">review_owner</a></code> | <code>str</code> | The review owner of the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>]</code> | The tags associated with the workload. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#description WellarchitectedWorkload#description}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The environment for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#environment WellarchitectedWorkload#environment}

---

##### `lenses`<sup>Required</sup> <a name="lenses" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lenses"></a>

```python
lenses: typing.List[str]
```

- *Type:* typing.List[str]

The list of lenses associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#lenses WellarchitectedWorkload#lenses}

---

##### `workload_name`<sup>Required</sup> <a name="workload_name" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.workloadName"></a>

```python
workload_name: str
```

- *Type:* str

The name of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#workload_name WellarchitectedWorkload#workload_name}

---

##### `account_ids`<sup>Optional</sup> <a name="account_ids" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.accountIds"></a>

```python
account_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of Amazon Web Services account IDs associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#account_ids WellarchitectedWorkload#account_ids}

---

##### `architectural_design`<sup>Optional</sup> <a name="architectural_design" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.architecturalDesign"></a>

```python
architectural_design: str
```

- *Type:* str

The URL of the architectural design for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#architectural_design WellarchitectedWorkload#architectural_design}

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.awsRegions"></a>

```python
aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

The list of Amazon Web Services Regions associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#aws_regions WellarchitectedWorkload#aws_regions}

---

##### `discovery_config`<sup>Optional</sup> <a name="discovery_config" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.discoveryConfig"></a>

```python
discovery_config: WellarchitectedWorkloadDiscoveryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

Discovery configuration associated to the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#discovery_config WellarchitectedWorkload#discovery_config}

---

##### `industry`<sup>Optional</sup> <a name="industry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industry"></a>

```python
industry: str
```

- *Type:* str

The industry for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#industry WellarchitectedWorkload#industry}

---

##### `industry_type`<sup>Optional</sup> <a name="industry_type" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industryType"></a>

```python
industry_type: str
```

- *Type:* str

The industry type for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#industry_type WellarchitectedWorkload#industry_type}

---

##### `non_aws_regions`<sup>Optional</sup> <a name="non_aws_regions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.nonAwsRegions"></a>

```python
non_aws_regions: typing.List[str]
```

- *Type:* typing.List[str]

The list of non-Amazon Web Services Regions associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#non_aws_regions WellarchitectedWorkload#non_aws_regions}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.notes"></a>

```python
notes: str
```

- *Type:* str

The notes associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#notes WellarchitectedWorkload#notes}

---

##### `review_owner`<sup>Optional</sup> <a name="review_owner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.reviewOwner"></a>

```python
review_owner: str
```

- *Type:* str

The review owner of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#review_owner WellarchitectedWorkload#review_owner}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[WellarchitectedWorkloadTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>]

The tags associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#tags WellarchitectedWorkload#tags}

---

### WellarchitectedWorkloadDiscoveryConfig <a name="WellarchitectedWorkloadDiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wellarchitected_workload

wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig(
  trusted_advisor_integration_status: str = None,
  workload_resource_definition: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.trustedAdvisorIntegrationStatus">trusted_advisor_integration_status</a></code> | <code>str</code> | Discovery integration status in respect to Trusted Advisor for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.workloadResourceDefinition">workload_resource_definition</a></code> | <code>typing.List[str]</code> | The mode to use for identifying resources associated with the workload. |

---

##### `trusted_advisor_integration_status`<sup>Optional</sup> <a name="trusted_advisor_integration_status" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.trustedAdvisorIntegrationStatus"></a>

```python
trusted_advisor_integration_status: str
```

- *Type:* str

Discovery integration status in respect to Trusted Advisor for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#trusted_advisor_integration_status WellarchitectedWorkload#trusted_advisor_integration_status}

---

##### `workload_resource_definition`<sup>Optional</sup> <a name="workload_resource_definition" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.workloadResourceDefinition"></a>

```python
workload_resource_definition: typing.List[str]
```

- *Type:* typing.List[str]

The mode to use for identifying resources associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#workload_resource_definition WellarchitectedWorkload#workload_resource_definition}

---

### WellarchitectedWorkloadTags <a name="WellarchitectedWorkloadTags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.Initializer"></a>

```python
from cdktn_provider_awscc import wellarchitected_workload

wellarchitectedWorkload.WellarchitectedWorkloadTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#key WellarchitectedWorkload#key}. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#value WellarchitectedWorkload#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#key WellarchitectedWorkload#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#value WellarchitectedWorkload#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WellarchitectedWorkloadDiscoveryConfigOutputReference <a name="WellarchitectedWorkloadDiscoveryConfigOutputReference" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wellarchitected_workload

wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetTrustedAdvisorIntegrationStatus">reset_trusted_advisor_integration_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetWorkloadResourceDefinition">reset_workload_resource_definition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_trusted_advisor_integration_status` <a name="reset_trusted_advisor_integration_status" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetTrustedAdvisorIntegrationStatus"></a>

```python
def reset_trusted_advisor_integration_status() -> None
```

##### `reset_workload_resource_definition` <a name="reset_workload_resource_definition" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetWorkloadResourceDefinition"></a>

```python
def reset_workload_resource_definition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatusInput">trusted_advisor_integration_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinitionInput">workload_resource_definition_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatus">trusted_advisor_integration_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinition">workload_resource_definition</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trusted_advisor_integration_status_input`<sup>Optional</sup> <a name="trusted_advisor_integration_status_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatusInput"></a>

```python
trusted_advisor_integration_status_input: str
```

- *Type:* str

---

##### `workload_resource_definition_input`<sup>Optional</sup> <a name="workload_resource_definition_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinitionInput"></a>

```python
workload_resource_definition_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trusted_advisor_integration_status`<sup>Required</sup> <a name="trusted_advisor_integration_status" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatus"></a>

```python
trusted_advisor_integration_status: str
```

- *Type:* str

---

##### `workload_resource_definition`<sup>Required</sup> <a name="workload_resource_definition" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinition"></a>

```python
workload_resource_definition: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WellarchitectedWorkloadDiscoveryConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

---


### WellarchitectedWorkloadTagsList <a name="WellarchitectedWorkloadTagsList" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import wellarchitected_workload

wellarchitectedWorkload.WellarchitectedWorkloadTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WellarchitectedWorkloadTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WellarchitectedWorkloadTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>]

---


### WellarchitectedWorkloadTagsOutputReference <a name="WellarchitectedWorkloadTagsOutputReference" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wellarchitected_workload

wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WellarchitectedWorkloadTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>

---



