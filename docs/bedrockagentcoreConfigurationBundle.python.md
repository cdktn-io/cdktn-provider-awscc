# `bedrockagentcoreConfigurationBundle` Submodule <a name="`bedrockagentcoreConfigurationBundle` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreConfigurationBundle <a name="BedrockagentcoreConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle awscc_bedrockagentcore_configuration_bundle}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bundle_name: str,
  components: IResolvable | typing.Mapping[BedrockagentcoreConfigurationBundleComponents],
  branch_name: str = None,
  commit_message: str = None,
  created_by: BedrockagentcoreConfigurationBundleCreatedBy = None,
  description: str = None,
  kms_key_arn: str = None,
  tags: IResolvable | typing.List[BedrockagentcoreConfigurationBundleTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.bundleName">bundle_name</a></code> | <code>str</code> | The name for the configuration bundle. Names must be unique within your account. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.components">components</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>]</code> | A map of component identifiers to their configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.branchName">branch_name</a></code> | <code>str</code> | The branch name for version tracking. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.commitMessage">commit_message</a></code> | <code>str</code> | A commit message describing the version of the configuration bundle. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.createdBy">created_by</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a></code> | The source that created a configuration bundle version. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.description">description</a></code> | <code>str</code> | The description for the configuration bundle. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the KMS key used to encrypt component configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>]</code> | Tags to assign to the configuration bundle. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bundle_name`<sup>Required</sup> <a name="bundle_name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.bundleName"></a>

- *Type:* str

The name for the configuration bundle. Names must be unique within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#bundle_name BedrockagentcoreConfigurationBundle#bundle_name}

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.components"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>]

A map of component identifiers to their configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#components BedrockagentcoreConfigurationBundle#components}

---

##### `branch_name`<sup>Optional</sup> <a name="branch_name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.branchName"></a>

- *Type:* str

The branch name for version tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#branch_name BedrockagentcoreConfigurationBundle#branch_name}

---

##### `commit_message`<sup>Optional</sup> <a name="commit_message" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.commitMessage"></a>

- *Type:* str

A commit message describing the version of the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#commit_message BedrockagentcoreConfigurationBundle#commit_message}

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.createdBy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a>

The source that created a configuration bundle version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#created_by BedrockagentcoreConfigurationBundle#created_by}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.description"></a>

- *Type:* str

The description for the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#description BedrockagentcoreConfigurationBundle#description}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

The ARN of the KMS key used to encrypt component configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#kms_key_arn BedrockagentcoreConfigurationBundle#kms_key_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>]

Tags to assign to the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#tags BedrockagentcoreConfigurationBundle#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putComponents">put_components</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putCreatedBy">put_created_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetBranchName">reset_branch_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetCommitMessage">reset_commit_message</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_components` <a name="put_components" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putComponents"></a>

```python
def put_components(
  value: IResolvable | typing.Mapping[BedrockagentcoreConfigurationBundleComponents]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putComponents.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>]

---

##### `put_created_by` <a name="put_created_by" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putCreatedBy"></a>

```python
def put_created_by(
  arn: str = None,
  name: str = None
) -> None
```

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putCreatedBy.parameter.arn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the source, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#arn BedrockagentcoreConfigurationBundle#arn}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putCreatedBy.parameter.name"></a>

- *Type:* str

The name of the source (for example, user, optimization-job, or system).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#name BedrockagentcoreConfigurationBundle#name}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BedrockagentcoreConfigurationBundleTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>]

---

##### `reset_branch_name` <a name="reset_branch_name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetBranchName"></a>

```python
def reset_branch_name() -> None
```

##### `reset_commit_message` <a name="reset_commit_message" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetCommitMessage"></a>

```python
def reset_commit_message() -> None
```

##### `reset_created_by` <a name="reset_created_by" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockagentcoreConfigurationBundle resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockagentcoreConfigurationBundle resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentcoreConfigurationBundle to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentcoreConfigurationBundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreConfigurationBundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleArn">bundle_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleId">bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.components">components</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap">BedrockagentcoreConfigurationBundleComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdBy">created_by</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference">BedrockagentcoreConfigurationBundleCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.lineageMetadata">lineage_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference">BedrockagentcoreConfigurationBundleLineageMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList">BedrockagentcoreConfigurationBundleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.branchNameInput">branch_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleNameInput">bundle_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.commitMessageInput">commit_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.componentsInput">components_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdByInput">created_by_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.branchName">branch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleName">bundle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.commitMessage">commit_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bundle_arn`<sup>Required</sup> <a name="bundle_arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleArn"></a>

```python
bundle_arn: str
```

- *Type:* str

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.components"></a>

```python
components: BedrockagentcoreConfigurationBundleComponentsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap">BedrockagentcoreConfigurationBundleComponentsMap</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdBy"></a>

```python
created_by: BedrockagentcoreConfigurationBundleCreatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference">BedrockagentcoreConfigurationBundleCreatedByOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lineage_metadata`<sup>Required</sup> <a name="lineage_metadata" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.lineageMetadata"></a>

```python
lineage_metadata: BedrockagentcoreConfigurationBundleLineageMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference">BedrockagentcoreConfigurationBundleLineageMetadataOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tags"></a>

```python
tags: BedrockagentcoreConfigurationBundleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList">BedrockagentcoreConfigurationBundleTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `branch_name_input`<sup>Optional</sup> <a name="branch_name_input" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.branchNameInput"></a>

```python
branch_name_input: str
```

- *Type:* str

---

##### `bundle_name_input`<sup>Optional</sup> <a name="bundle_name_input" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleNameInput"></a>

```python
bundle_name_input: str
```

- *Type:* str

---

##### `commit_message_input`<sup>Optional</sup> <a name="commit_message_input" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.commitMessageInput"></a>

```python
commit_message_input: str
```

- *Type:* str

---

##### `components_input`<sup>Optional</sup> <a name="components_input" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.componentsInput"></a>

```python
components_input: IResolvable | typing.Mapping[BedrockagentcoreConfigurationBundleComponents]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>]

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdByInput"></a>

```python
created_by_input: IResolvable | BedrockagentcoreConfigurationBundleCreatedBy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BedrockagentcoreConfigurationBundleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>]

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

---

##### `bundle_name`<sup>Required</sup> <a name="bundle_name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleName"></a>

```python
bundle_name: str
```

- *Type:* str

---

##### `commit_message`<sup>Required</sup> <a name="commit_message" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.commitMessage"></a>

```python
commit_message: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreConfigurationBundleComponents <a name="BedrockagentcoreConfigurationBundleComponents" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents(
  configuration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents.property.configuration">configuration</a></code> | <code>str</code> | The configuration values as a flexible JSON document. |

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

The configuration values as a flexible JSON document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#configuration BedrockagentcoreConfigurationBundle#configuration}

---

### BedrockagentcoreConfigurationBundleConfig <a name="BedrockagentcoreConfigurationBundleConfig" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bundle_name: str,
  components: IResolvable | typing.Mapping[BedrockagentcoreConfigurationBundleComponents],
  branch_name: str = None,
  commit_message: str = None,
  created_by: BedrockagentcoreConfigurationBundleCreatedBy = None,
  description: str = None,
  kms_key_arn: str = None,
  tags: IResolvable | typing.List[BedrockagentcoreConfigurationBundleTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.bundleName">bundle_name</a></code> | <code>str</code> | The name for the configuration bundle. Names must be unique within your account. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.components">components</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>]</code> | A map of component identifiers to their configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.branchName">branch_name</a></code> | <code>str</code> | The branch name for version tracking. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.commitMessage">commit_message</a></code> | <code>str</code> | A commit message describing the version of the configuration bundle. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.createdBy">created_by</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a></code> | The source that created a configuration bundle version. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.description">description</a></code> | <code>str</code> | The description for the configuration bundle. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the KMS key used to encrypt component configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>]</code> | Tags to assign to the configuration bundle. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bundle_name`<sup>Required</sup> <a name="bundle_name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.bundleName"></a>

```python
bundle_name: str
```

- *Type:* str

The name for the configuration bundle. Names must be unique within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#bundle_name BedrockagentcoreConfigurationBundle#bundle_name}

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.components"></a>

```python
components: IResolvable | typing.Mapping[BedrockagentcoreConfigurationBundleComponents]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>]

A map of component identifiers to their configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#components BedrockagentcoreConfigurationBundle#components}

---

##### `branch_name`<sup>Optional</sup> <a name="branch_name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

The branch name for version tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#branch_name BedrockagentcoreConfigurationBundle#branch_name}

---

##### `commit_message`<sup>Optional</sup> <a name="commit_message" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.commitMessage"></a>

```python
commit_message: str
```

- *Type:* str

A commit message describing the version of the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#commit_message BedrockagentcoreConfigurationBundle#commit_message}

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.createdBy"></a>

```python
created_by: BedrockagentcoreConfigurationBundleCreatedBy
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a>

The source that created a configuration bundle version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#created_by BedrockagentcoreConfigurationBundle#created_by}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description for the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#description BedrockagentcoreConfigurationBundle#description}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The ARN of the KMS key used to encrypt component configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#kms_key_arn BedrockagentcoreConfigurationBundle#kms_key_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BedrockagentcoreConfigurationBundleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>]

Tags to assign to the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#tags BedrockagentcoreConfigurationBundle#tags}

---

### BedrockagentcoreConfigurationBundleCreatedBy <a name="BedrockagentcoreConfigurationBundleCreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy(
  arn: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.property.arn">arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the source, if applicable. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.property.name">name</a></code> | <code>str</code> | The name of the source (for example, user, optimization-job, or system). |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.property.arn"></a>

```python
arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the source, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#arn BedrockagentcoreConfigurationBundle#arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the source (for example, user, optimization-job, or system).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#name BedrockagentcoreConfigurationBundle#name}

---

### BedrockagentcoreConfigurationBundleLineageMetadata <a name="BedrockagentcoreConfigurationBundleLineageMetadata" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata()
```


### BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy <a name="BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy()
```


### BedrockagentcoreConfigurationBundleTags <a name="BedrockagentcoreConfigurationBundleTags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#key BedrockagentcoreConfigurationBundle#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#value BedrockagentcoreConfigurationBundle#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#key BedrockagentcoreConfigurationBundle#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_configuration_bundle#value BedrockagentcoreConfigurationBundle#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreConfigurationBundleComponentsMap <a name="BedrockagentcoreConfigurationBundleComponentsMap" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.get"></a>

```python
def get(
  key: str
) -> BedrockagentcoreConfigurationBundleComponentsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[BedrockagentcoreConfigurationBundleComponents]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>]

---


### BedrockagentcoreConfigurationBundleComponentsOutputReference <a name="BedrockagentcoreConfigurationBundleComponentsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resetConfiguration">reset_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resetConfiguration"></a>

```python
def reset_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.configurationInput">configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.configuration">configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.configurationInput"></a>

```python
configuration_input: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreConfigurationBundleComponents
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>

---


### BedrockagentcoreConfigurationBundleCreatedByOutputReference <a name="BedrockagentcoreConfigurationBundleCreatedByOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreConfigurationBundleCreatedBy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a>

---


### BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference <a name="BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy">BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy">BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy</a>

---


### BedrockagentcoreConfigurationBundleLineageMetadataOutputReference <a name="BedrockagentcoreConfigurationBundleLineageMetadataOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.branchName">branch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.commitMessage">commit_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.createdBy">created_by</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference">BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.parentVersionIds">parent_version_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata">BedrockagentcoreConfigurationBundleLineageMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

---

##### `commit_message`<sup>Required</sup> <a name="commit_message" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.commitMessage"></a>

```python
commit_message: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.createdBy"></a>

```python
created_by: BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference">BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference</a>

---

##### `parent_version_ids`<sup>Required</sup> <a name="parent_version_ids" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.parentVersionIds"></a>

```python
parent_version_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.internalValue"></a>

```python
internal_value: BedrockagentcoreConfigurationBundleLineageMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata">BedrockagentcoreConfigurationBundleLineageMetadata</a>

---


### BedrockagentcoreConfigurationBundleTagsList <a name="BedrockagentcoreConfigurationBundleTagsList" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreConfigurationBundleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreConfigurationBundleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>]

---


### BedrockagentcoreConfigurationBundleTagsOutputReference <a name="BedrockagentcoreConfigurationBundleTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_configuration_bundle

bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreConfigurationBundleTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>

---



