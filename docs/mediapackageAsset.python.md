# `mediapackageAsset` Submodule <a name="`mediapackageAsset` Submodule" id="@cdktn/provider-awscc.mediapackageAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediapackageAsset <a name="MediapackageAsset" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset awscc_mediapackage_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_asset

mediapackageAsset.MediapackageAsset(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  asset_id: str,
  packaging_group_id: str,
  source_arn: str,
  source_role_arn: str,
  egress_endpoints: IResolvable | typing.List[MediapackageAssetEgressEndpoints] = None,
  resource_id: str = None,
  tags: IResolvable | typing.List[MediapackageAssetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.assetId">asset_id</a></code> | <code>str</code> | The unique identifier for the Asset. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.packagingGroupId">packaging_group_id</a></code> | <code>str</code> | The ID of the PackagingGroup for the Asset. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.sourceArn">source_arn</a></code> | <code>str</code> | ARN of the source object in S3. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.sourceRoleArn">source_role_arn</a></code> | <code>str</code> | The IAM role_arn used to access the source S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.egressEndpoints">egress_endpoints</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints">MediapackageAssetEgressEndpoints</a>]</code> | The list of egress endpoints available for the Asset. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | The resource ID to include in SPEKE key requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags">MediapackageAssetTags</a>]</code> | A collection of tags associated with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.assetId"></a>

- *Type:* str

The unique identifier for the Asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#asset_id MediapackageAsset#asset_id}

---

##### `packaging_group_id`<sup>Required</sup> <a name="packaging_group_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.packagingGroupId"></a>

- *Type:* str

The ID of the PackagingGroup for the Asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#packaging_group_id MediapackageAsset#packaging_group_id}

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.sourceArn"></a>

- *Type:* str

ARN of the source object in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#source_arn MediapackageAsset#source_arn}

---

##### `source_role_arn`<sup>Required</sup> <a name="source_role_arn" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.sourceRoleArn"></a>

- *Type:* str

The IAM role_arn used to access the source S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#source_role_arn MediapackageAsset#source_role_arn}

---

##### `egress_endpoints`<sup>Optional</sup> <a name="egress_endpoints" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.egressEndpoints"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints">MediapackageAssetEgressEndpoints</a>]

The list of egress endpoints available for the Asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#egress_endpoints MediapackageAsset#egress_endpoints}

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.resourceId"></a>

- *Type:* str

The resource ID to include in SPEKE key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#resource_id MediapackageAsset#resource_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags">MediapackageAssetTags</a>]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#tags MediapackageAsset#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.putEgressEndpoints">put_egress_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.resetEgressEndpoints">reset_egress_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.resetResourceId">reset_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_egress_endpoints` <a name="put_egress_endpoints" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.putEgressEndpoints"></a>

```python
def put_egress_endpoints(
  value: IResolvable | typing.List[MediapackageAssetEgressEndpoints]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.putEgressEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints">MediapackageAssetEgressEndpoints</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MediapackageAssetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags">MediapackageAssetTags</a>]

---

##### `reset_egress_endpoints` <a name="reset_egress_endpoints" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.resetEgressEndpoints"></a>

```python
def reset_egress_endpoints() -> None
```

##### `reset_resource_id` <a name="reset_resource_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.resetResourceId"></a>

```python
def reset_resource_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediapackageAsset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.isConstruct"></a>

```python
from cdktn_provider_awscc import mediapackage_asset

mediapackageAsset.MediapackageAsset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediapackage_asset

mediapackageAsset.MediapackageAsset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediapackage_asset

mediapackageAsset.MediapackageAsset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediapackage_asset

mediapackageAsset.MediapackageAsset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediapackageAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediapackageAsset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediapackageAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediapackageAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.egressEndpoints">egress_endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList">MediapackageAssetEgressEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList">MediapackageAssetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.assetIdInput">asset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.egressEndpointsInput">egress_endpoints_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints">MediapackageAssetEgressEndpoints</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.packagingGroupIdInput">packaging_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.sourceArnInput">source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.sourceRoleArnInput">source_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags">MediapackageAssetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.assetId">asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.packagingGroupId">packaging_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.sourceArn">source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.sourceRoleArn">source_role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `egress_endpoints`<sup>Required</sup> <a name="egress_endpoints" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.egressEndpoints"></a>

```python
egress_endpoints: MediapackageAssetEgressEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList">MediapackageAssetEgressEndpointsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.tags"></a>

```python
tags: MediapackageAssetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList">MediapackageAssetTagsList</a>

---

##### `asset_id_input`<sup>Optional</sup> <a name="asset_id_input" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.assetIdInput"></a>

```python
asset_id_input: str
```

- *Type:* str

---

##### `egress_endpoints_input`<sup>Optional</sup> <a name="egress_endpoints_input" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.egressEndpointsInput"></a>

```python
egress_endpoints_input: IResolvable | typing.List[MediapackageAssetEgressEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints">MediapackageAssetEgressEndpoints</a>]

---

##### `packaging_group_id_input`<sup>Optional</sup> <a name="packaging_group_id_input" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.packagingGroupIdInput"></a>

```python
packaging_group_id_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `source_arn_input`<sup>Optional</sup> <a name="source_arn_input" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.sourceArnInput"></a>

```python
source_arn_input: str
```

- *Type:* str

---

##### `source_role_arn_input`<sup>Optional</sup> <a name="source_role_arn_input" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.sourceRoleArnInput"></a>

```python
source_role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MediapackageAssetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags">MediapackageAssetTags</a>]

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

---

##### `packaging_group_id`<sup>Required</sup> <a name="packaging_group_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.packagingGroupId"></a>

```python
packaging_group_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

---

##### `source_role_arn`<sup>Required</sup> <a name="source_role_arn" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.sourceRoleArn"></a>

```python
source_role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAsset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediapackageAssetConfig <a name="MediapackageAssetConfig" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_asset

mediapackageAsset.MediapackageAssetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  asset_id: str,
  packaging_group_id: str,
  source_arn: str,
  source_role_arn: str,
  egress_endpoints: IResolvable | typing.List[MediapackageAssetEgressEndpoints] = None,
  resource_id: str = None,
  tags: IResolvable | typing.List[MediapackageAssetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.assetId">asset_id</a></code> | <code>str</code> | The unique identifier for the Asset. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.packagingGroupId">packaging_group_id</a></code> | <code>str</code> | The ID of the PackagingGroup for the Asset. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.sourceArn">source_arn</a></code> | <code>str</code> | ARN of the source object in S3. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.sourceRoleArn">source_role_arn</a></code> | <code>str</code> | The IAM role_arn used to access the source S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.egressEndpoints">egress_endpoints</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints">MediapackageAssetEgressEndpoints</a>]</code> | The list of egress endpoints available for the Asset. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.resourceId">resource_id</a></code> | <code>str</code> | The resource ID to include in SPEKE key requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags">MediapackageAssetTags</a>]</code> | A collection of tags associated with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

The unique identifier for the Asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#asset_id MediapackageAsset#asset_id}

---

##### `packaging_group_id`<sup>Required</sup> <a name="packaging_group_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.packagingGroupId"></a>

```python
packaging_group_id: str
```

- *Type:* str

The ID of the PackagingGroup for the Asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#packaging_group_id MediapackageAsset#packaging_group_id}

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

ARN of the source object in S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#source_arn MediapackageAsset#source_arn}

---

##### `source_role_arn`<sup>Required</sup> <a name="source_role_arn" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.sourceRoleArn"></a>

```python
source_role_arn: str
```

- *Type:* str

The IAM role_arn used to access the source S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#source_role_arn MediapackageAsset#source_role_arn}

---

##### `egress_endpoints`<sup>Optional</sup> <a name="egress_endpoints" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.egressEndpoints"></a>

```python
egress_endpoints: IResolvable | typing.List[MediapackageAssetEgressEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints">MediapackageAssetEgressEndpoints</a>]

The list of egress endpoints available for the Asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#egress_endpoints MediapackageAsset#egress_endpoints}

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

The resource ID to include in SPEKE key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#resource_id MediapackageAsset#resource_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MediapackageAssetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags">MediapackageAssetTags</a>]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#tags MediapackageAsset#tags}

---

### MediapackageAssetEgressEndpoints <a name="MediapackageAssetEgressEndpoints" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_asset

mediapackageAsset.MediapackageAssetEgressEndpoints(
  packaging_configuration_id: str = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints.property.packagingConfigurationId">packaging_configuration_id</a></code> | <code>str</code> | The ID of the PackagingConfiguration being applied to the Asset. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints.property.url">url</a></code> | <code>str</code> | The URL of the parent manifest for the repackaged Asset. |

---

##### `packaging_configuration_id`<sup>Optional</sup> <a name="packaging_configuration_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints.property.packagingConfigurationId"></a>

```python
packaging_configuration_id: str
```

- *Type:* str

The ID of the PackagingConfiguration being applied to the Asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#packaging_configuration_id MediapackageAsset#packaging_configuration_id}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints.property.url"></a>

```python
url: str
```

- *Type:* str

The URL of the parent manifest for the repackaged Asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#url MediapackageAsset#url}

---

### MediapackageAssetTags <a name="MediapackageAssetTags" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_asset

mediapackageAsset.MediapackageAssetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#key MediapackageAsset#key}. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#value MediapackageAsset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#key MediapackageAsset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediapackage_asset#value MediapackageAsset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediapackageAssetEgressEndpointsList <a name="MediapackageAssetEgressEndpointsList" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_asset

mediapackageAsset.MediapackageAssetEgressEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediapackageAssetEgressEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints">MediapackageAssetEgressEndpoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediapackageAssetEgressEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints">MediapackageAssetEgressEndpoints</a>]

---


### MediapackageAssetEgressEndpointsOutputReference <a name="MediapackageAssetEgressEndpointsOutputReference" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_asset

mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.resetPackagingConfigurationId">reset_packaging_configuration_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_packaging_configuration_id` <a name="reset_packaging_configuration_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.resetPackagingConfigurationId"></a>

```python
def reset_packaging_configuration_id() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.property.packagingConfigurationIdInput">packaging_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.property.packagingConfigurationId">packaging_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints">MediapackageAssetEgressEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `packaging_configuration_id_input`<sup>Optional</sup> <a name="packaging_configuration_id_input" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.property.packagingConfigurationIdInput"></a>

```python
packaging_configuration_id_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `packaging_configuration_id`<sup>Required</sup> <a name="packaging_configuration_id" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.property.packagingConfigurationId"></a>

```python
packaging_configuration_id: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackageAssetEgressEndpoints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetEgressEndpoints">MediapackageAssetEgressEndpoints</a>

---


### MediapackageAssetTagsList <a name="MediapackageAssetTagsList" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_asset

mediapackageAsset.MediapackageAssetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediapackageAssetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags">MediapackageAssetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediapackageAssetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags">MediapackageAssetTags</a>]

---


### MediapackageAssetTagsOutputReference <a name="MediapackageAssetTagsOutputReference" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediapackage_asset

mediapackageAsset.MediapackageAssetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags">MediapackageAssetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediapackageAssetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackageAsset.MediapackageAssetTags">MediapackageAssetTags</a>

---



