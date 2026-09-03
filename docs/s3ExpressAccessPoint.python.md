# `s3ExpressAccessPoint` Submodule <a name="`s3ExpressAccessPoint` Submodule" id="@cdktn/provider-awscc.s3ExpressAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ExpressAccessPoint <a name="S3ExpressAccessPoint" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point awscc_s3express_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_access_point

s3ExpressAccessPoint.S3ExpressAccessPoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bucket: str,
  bucket_account_id: str = None,
  name: str = None,
  policy: str = None,
  public_access_block_configuration: S3ExpressAccessPointPublicAccessBlockConfiguration = None,
  scope: S3ExpressAccessPointScope = None,
  tags: IResolvable | typing.List[S3ExpressAccessPointTags] = None,
  vpc_configuration: S3ExpressAccessPointVpcConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | The name of the bucket that you want to associate this Access Point with. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.bucketAccountId">bucket_account_id</a></code> | <code>str</code> | The AWS account ID associated with the S3 bucket associated with this access point. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.name">name</a></code> | <code>str</code> | The name you want to assign to this Access Point. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.policy">policy</a></code> | <code>str</code> | The Access Point Policy you want to apply to this access point. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.publicAccessBlockConfiguration">public_access_block_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration">S3ExpressAccessPointPublicAccessBlockConfiguration</a></code> | The PublicAccessBlock configuration that you want to apply to this Access Point. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope">S3ExpressAccessPointScope</a></code> | For directory buckets, you can ?lter access control to speci?c pre?xes, API operations, or a combination of both. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags">S3ExpressAccessPointTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#tags S3ExpressAccessPoint#tags}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration">S3ExpressAccessPointVpcConfiguration</a></code> | If you include this field, Amazon S3 restricts access to this Access Point to requests from the specified Virtual Private Cloud (VPC). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.bucket"></a>

- *Type:* str

The name of the bucket that you want to associate this Access Point with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#bucket S3ExpressAccessPoint#bucket}

---

##### `bucket_account_id`<sup>Optional</sup> <a name="bucket_account_id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.bucketAccountId"></a>

- *Type:* str

The AWS account ID associated with the S3 bucket associated with this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#bucket_account_id S3ExpressAccessPoint#bucket_account_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.name"></a>

- *Type:* str

The name you want to assign to this Access Point.

If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the access point name. For directory buckets, the access point name must consist of a base name that you provide and su?x that includes the ZoneID (AWS Availability Zone or Local Zone) of your bucket location, followed by --xa-s3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#name S3ExpressAccessPoint#name}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.policy"></a>

- *Type:* str

The Access Point Policy you want to apply to this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#policy S3ExpressAccessPoint#policy}

---

##### `public_access_block_configuration`<sup>Optional</sup> <a name="public_access_block_configuration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.publicAccessBlockConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration">S3ExpressAccessPointPublicAccessBlockConfiguration</a>

The PublicAccessBlock configuration that you want to apply to this Access Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#public_access_block_configuration S3ExpressAccessPoint#public_access_block_configuration}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope">S3ExpressAccessPointScope</a>

For directory buckets, you can ?lter access control to speci?c pre?xes, API operations, or a combination of both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#scope S3ExpressAccessPoint#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags">S3ExpressAccessPointTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#tags S3ExpressAccessPoint#tags}.

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.Initializer.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration">S3ExpressAccessPointVpcConfiguration</a>

If you include this field, Amazon S3 restricts access to this Access Point to requests from the specified Virtual Private Cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#vpc_configuration S3ExpressAccessPoint#vpc_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putPublicAccessBlockConfiguration">put_public_access_block_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putVpcConfiguration">put_vpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetBucketAccountId">reset_bucket_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetPublicAccessBlockConfiguration">reset_public_access_block_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetVpcConfiguration">reset_vpc_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_public_access_block_configuration` <a name="put_public_access_block_configuration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putPublicAccessBlockConfiguration"></a>

```python
def put_public_access_block_configuration(
  block_public_acls: bool | IResolvable = None,
  block_public_policy: bool | IResolvable = None,
  ignore_public_acls: bool | IResolvable = None,
  restrict_public_buckets: bool | IResolvable = None
) -> None
```

###### `block_public_acls`<sup>Optional</sup> <a name="block_public_acls" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putPublicAccessBlockConfiguration.parameter.blockPublicAcls"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account.

Setting this element to TRUE causes the following behavior:

* PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
* PUT Object calls fail if the request includes a public ACL.
  . - PUT Bucket calls fail if the request includes a public ACL.
  Enabling this setting doesn't affect existing policies or ACLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#block_public_acls S3ExpressAccessPoint#block_public_acls}

---

###### `block_public_policy`<sup>Optional</sup> <a name="block_public_policy" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putPublicAccessBlockConfiguration.parameter.blockPublicPolicy"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should block public bucket policies for buckets in this account.

Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#block_public_policy S3ExpressAccessPoint#block_public_policy}

---

###### `ignore_public_acls`<sup>Optional</sup> <a name="ignore_public_acls" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putPublicAccessBlockConfiguration.parameter.ignorePublicAcls"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should ignore public ACLs for buckets in this account.

Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#ignore_public_acls S3ExpressAccessPoint#ignore_public_acls}

---

###### `restrict_public_buckets`<sup>Optional</sup> <a name="restrict_public_buckets" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putPublicAccessBlockConfiguration.parameter.restrictPublicBuckets"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should restrict public bucket policies for this bucket.

Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.
Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#restrict_public_buckets S3ExpressAccessPoint#restrict_public_buckets}

---

##### `put_scope` <a name="put_scope" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putScope"></a>

```python
def put_scope(
  permissions: typing.List[str] = None,
  prefixes: typing.List[str] = None
) -> None
```

###### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putScope.parameter.permissions"></a>

- *Type:* typing.List[str]

You can include one or more API operations as permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#permissions S3ExpressAccessPoint#permissions}

---

###### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putScope.parameter.prefixes"></a>

- *Type:* typing.List[str]

You can specify any amount of pre?xes, but the total length of characters of all pre?xes must be less than 256 bytes in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#prefixes S3ExpressAccessPoint#prefixes}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[S3ExpressAccessPointTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags">S3ExpressAccessPointTags</a>]

---

##### `put_vpc_configuration` <a name="put_vpc_configuration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putVpcConfiguration"></a>

```python
def put_vpc_configuration(
  vpc_id: str = None
) -> None
```

###### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.putVpcConfiguration.parameter.vpcId"></a>

- *Type:* str

If this field is specified, this access point will only allow connections from the specified VPC ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#vpc_id S3ExpressAccessPoint#vpc_id}

---

##### `reset_bucket_account_id` <a name="reset_bucket_account_id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetBucketAccountId"></a>

```python
def reset_bucket_account_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_public_access_block_configuration` <a name="reset_public_access_block_configuration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetPublicAccessBlockConfiguration"></a>

```python
def reset_public_access_block_configuration() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_configuration` <a name="reset_vpc_configuration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.resetVpcConfiguration"></a>

```python
def reset_vpc_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a S3ExpressAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isConstruct"></a>

```python
from cdktn_provider_awscc import s3_express_access_point

s3ExpressAccessPoint.S3ExpressAccessPoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import s3_express_access_point

s3ExpressAccessPoint.S3ExpressAccessPoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import s3_express_access_point

s3ExpressAccessPoint.S3ExpressAccessPoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import s3_express_access_point

s3ExpressAccessPoint.S3ExpressAccessPoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a S3ExpressAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3ExpressAccessPoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3ExpressAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3ExpressAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.networkOrigin">network_origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.publicAccessBlockConfiguration">public_access_block_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference">S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference">S3ExpressAccessPointScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList">S3ExpressAccessPointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference">S3ExpressAccessPointVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.bucketAccountIdInput">bucket_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.publicAccessBlockConfigurationInput">public_access_block_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration">S3ExpressAccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.scopeInput">scope_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope">S3ExpressAccessPointScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags">S3ExpressAccessPointTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.vpcConfigurationInput">vpc_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration">S3ExpressAccessPointVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.bucketAccountId">bucket_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.policy">policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_origin`<sup>Required</sup> <a name="network_origin" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.networkOrigin"></a>

```python
network_origin: str
```

- *Type:* str

---

##### `public_access_block_configuration`<sup>Required</sup> <a name="public_access_block_configuration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.publicAccessBlockConfiguration"></a>

```python
public_access_block_configuration: S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference">S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.scope"></a>

```python
scope: S3ExpressAccessPointScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference">S3ExpressAccessPointScopeOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.tags"></a>

```python
tags: S3ExpressAccessPointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList">S3ExpressAccessPointTagsList</a>

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.vpcConfiguration"></a>

```python
vpc_configuration: S3ExpressAccessPointVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference">S3ExpressAccessPointVpcConfigurationOutputReference</a>

---

##### `bucket_account_id_input`<sup>Optional</sup> <a name="bucket_account_id_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.bucketAccountIdInput"></a>

```python
bucket_account_id_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `public_access_block_configuration_input`<sup>Optional</sup> <a name="public_access_block_configuration_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.publicAccessBlockConfigurationInput"></a>

```python
public_access_block_configuration_input: IResolvable | S3ExpressAccessPointPublicAccessBlockConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration">S3ExpressAccessPointPublicAccessBlockConfiguration</a>

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.scopeInput"></a>

```python
scope_input: IResolvable | S3ExpressAccessPointScope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope">S3ExpressAccessPointScope</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[S3ExpressAccessPointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags">S3ExpressAccessPointTags</a>]

---

##### `vpc_configuration_input`<sup>Optional</sup> <a name="vpc_configuration_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.vpcConfigurationInput"></a>

```python
vpc_configuration_input: IResolvable | S3ExpressAccessPointVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration">S3ExpressAccessPointVpcConfiguration</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_account_id`<sup>Required</sup> <a name="bucket_account_id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.bucketAccountId"></a>

```python
bucket_account_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3ExpressAccessPointConfig <a name="S3ExpressAccessPointConfig" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_access_point

s3ExpressAccessPoint.S3ExpressAccessPointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bucket: str,
  bucket_account_id: str = None,
  name: str = None,
  policy: str = None,
  public_access_block_configuration: S3ExpressAccessPointPublicAccessBlockConfiguration = None,
  scope: S3ExpressAccessPointScope = None,
  tags: IResolvable | typing.List[S3ExpressAccessPointTags] = None,
  vpc_configuration: S3ExpressAccessPointVpcConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.bucket">bucket</a></code> | <code>str</code> | The name of the bucket that you want to associate this Access Point with. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.bucketAccountId">bucket_account_id</a></code> | <code>str</code> | The AWS account ID associated with the S3 bucket associated with this access point. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.name">name</a></code> | <code>str</code> | The name you want to assign to this Access Point. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.policy">policy</a></code> | <code>str</code> | The Access Point Policy you want to apply to this access point. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.publicAccessBlockConfiguration">public_access_block_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration">S3ExpressAccessPointPublicAccessBlockConfiguration</a></code> | The PublicAccessBlock configuration that you want to apply to this Access Point. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope">S3ExpressAccessPointScope</a></code> | For directory buckets, you can ?lter access control to speci?c pre?xes, API operations, or a combination of both. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags">S3ExpressAccessPointTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#tags S3ExpressAccessPoint#tags}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration">S3ExpressAccessPointVpcConfiguration</a></code> | If you include this field, Amazon S3 restricts access to this Access Point to requests from the specified Virtual Private Cloud (VPC). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the bucket that you want to associate this Access Point with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#bucket S3ExpressAccessPoint#bucket}

---

##### `bucket_account_id`<sup>Optional</sup> <a name="bucket_account_id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.bucketAccountId"></a>

```python
bucket_account_id: str
```

- *Type:* str

The AWS account ID associated with the S3 bucket associated with this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#bucket_account_id S3ExpressAccessPoint#bucket_account_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name you want to assign to this Access Point.

If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the access point name. For directory buckets, the access point name must consist of a base name that you provide and su?x that includes the ZoneID (AWS Availability Zone or Local Zone) of your bucket location, followed by --xa-s3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#name S3ExpressAccessPoint#name}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

The Access Point Policy you want to apply to this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#policy S3ExpressAccessPoint#policy}

---

##### `public_access_block_configuration`<sup>Optional</sup> <a name="public_access_block_configuration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.publicAccessBlockConfiguration"></a>

```python
public_access_block_configuration: S3ExpressAccessPointPublicAccessBlockConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration">S3ExpressAccessPointPublicAccessBlockConfiguration</a>

The PublicAccessBlock configuration that you want to apply to this Access Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#public_access_block_configuration S3ExpressAccessPoint#public_access_block_configuration}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.scope"></a>

```python
scope: S3ExpressAccessPointScope
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope">S3ExpressAccessPointScope</a>

For directory buckets, you can ?lter access control to speci?c pre?xes, API operations, or a combination of both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#scope S3ExpressAccessPoint#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[S3ExpressAccessPointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags">S3ExpressAccessPointTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#tags S3ExpressAccessPoint#tags}.

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointConfig.property.vpcConfiguration"></a>

```python
vpc_configuration: S3ExpressAccessPointVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration">S3ExpressAccessPointVpcConfiguration</a>

If you include this field, Amazon S3 restricts access to this Access Point to requests from the specified Virtual Private Cloud (VPC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#vpc_configuration S3ExpressAccessPoint#vpc_configuration}

---

### S3ExpressAccessPointPublicAccessBlockConfiguration <a name="S3ExpressAccessPointPublicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_access_point

s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration(
  block_public_acls: bool | IResolvable = None,
  block_public_policy: bool | IResolvable = None,
  ignore_public_acls: bool | IResolvable = None,
  restrict_public_buckets: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.property.blockPublicAcls">block_public_acls</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy">block_public_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether Amazon S3 should block public bucket policies for buckets in this account. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls">ignore_public_acls</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets">restrict_public_buckets</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether Amazon S3 should restrict public bucket policies for this bucket. |

---

##### `block_public_acls`<sup>Optional</sup> <a name="block_public_acls" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.property.blockPublicAcls"></a>

```python
block_public_acls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account.

Setting this element to TRUE causes the following behavior:

* PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
* PUT Object calls fail if the request includes a public ACL.
  . - PUT Bucket calls fail if the request includes a public ACL.
  Enabling this setting doesn't affect existing policies or ACLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#block_public_acls S3ExpressAccessPoint#block_public_acls}

---

##### `block_public_policy`<sup>Optional</sup> <a name="block_public_policy" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.property.blockPublicPolicy"></a>

```python
block_public_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should block public bucket policies for buckets in this account.

Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#block_public_policy S3ExpressAccessPoint#block_public_policy}

---

##### `ignore_public_acls`<sup>Optional</sup> <a name="ignore_public_acls" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.property.ignorePublicAcls"></a>

```python
ignore_public_acls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should ignore public ACLs for buckets in this account.

Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#ignore_public_acls S3ExpressAccessPoint#ignore_public_acls}

---

##### `restrict_public_buckets`<sup>Optional</sup> <a name="restrict_public_buckets" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration.property.restrictPublicBuckets"></a>

```python
restrict_public_buckets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon S3 should restrict public bucket policies for this bucket.

Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.
Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#restrict_public_buckets S3ExpressAccessPoint#restrict_public_buckets}

---

### S3ExpressAccessPointScope <a name="S3ExpressAccessPointScope" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_access_point

s3ExpressAccessPoint.S3ExpressAccessPointScope(
  permissions: typing.List[str] = None,
  prefixes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | You can include one or more API operations as permissions. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope.property.prefixes">prefixes</a></code> | <code>typing.List[str]</code> | You can specify any amount of pre?xes, but the total length of characters of all pre?xes must be less than 256 bytes in size. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

You can include one or more API operations as permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#permissions S3ExpressAccessPoint#permissions}

---

##### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope.property.prefixes"></a>

```python
prefixes: typing.List[str]
```

- *Type:* typing.List[str]

You can specify any amount of pre?xes, but the total length of characters of all pre?xes must be less than 256 bytes in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#prefixes S3ExpressAccessPoint#prefixes}

---

### S3ExpressAccessPointTags <a name="S3ExpressAccessPointTags" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_access_point

s3ExpressAccessPoint.S3ExpressAccessPointTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#key S3ExpressAccessPoint#key}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#value S3ExpressAccessPoint#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#key S3ExpressAccessPoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#value S3ExpressAccessPoint#value}.

---

### S3ExpressAccessPointVpcConfiguration <a name="S3ExpressAccessPointVpcConfiguration" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_access_point

s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration(
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration.property.vpcId">vpc_id</a></code> | <code>str</code> | If this field is specified, this access point will only allow connections from the specified VPC ID. |

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

If this field is specified, this access point will only allow connections from the specified VPC ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3express_access_point#vpc_id S3ExpressAccessPoint#vpc_id}

---

## Classes <a name="Classes" id="Classes"></a>

### S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference <a name="S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_access_point

s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicAcls">reset_block_public_acls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicPolicy">reset_block_public_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resetIgnorePublicAcls">reset_ignore_public_acls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resetRestrictPublicBuckets">reset_restrict_public_buckets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_block_public_acls` <a name="reset_block_public_acls" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicAcls"></a>

```python
def reset_block_public_acls() -> None
```

##### `reset_block_public_policy` <a name="reset_block_public_policy" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resetBlockPublicPolicy"></a>

```python
def reset_block_public_policy() -> None
```

##### `reset_ignore_public_acls` <a name="reset_ignore_public_acls" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resetIgnorePublicAcls"></a>

```python
def reset_ignore_public_acls() -> None
```

##### `reset_restrict_public_buckets` <a name="reset_restrict_public_buckets" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.resetRestrictPublicBuckets"></a>

```python
def reset_restrict_public_buckets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAclsInput">block_public_acls_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicyInput">block_public_policy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAclsInput">ignore_public_acls_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBucketsInput">restrict_public_buckets_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls">block_public_acls</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy">block_public_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls">ignore_public_acls</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets">restrict_public_buckets</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration">S3ExpressAccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_public_acls_input`<sup>Optional</sup> <a name="block_public_acls_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAclsInput"></a>

```python
block_public_acls_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `block_public_policy_input`<sup>Optional</sup> <a name="block_public_policy_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicyInput"></a>

```python
block_public_policy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_public_acls_input`<sup>Optional</sup> <a name="ignore_public_acls_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAclsInput"></a>

```python
ignore_public_acls_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `restrict_public_buckets_input`<sup>Optional</sup> <a name="restrict_public_buckets_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBucketsInput"></a>

```python
restrict_public_buckets_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `block_public_acls`<sup>Required</sup> <a name="block_public_acls" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls"></a>

```python
block_public_acls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `block_public_policy`<sup>Required</sup> <a name="block_public_policy" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy"></a>

```python
block_public_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignore_public_acls`<sup>Required</sup> <a name="ignore_public_acls" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls"></a>

```python
ignore_public_acls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `restrict_public_buckets`<sup>Required</sup> <a name="restrict_public_buckets" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets"></a>

```python
restrict_public_buckets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ExpressAccessPointPublicAccessBlockConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointPublicAccessBlockConfiguration">S3ExpressAccessPointPublicAccessBlockConfiguration</a>

---


### S3ExpressAccessPointScopeOutputReference <a name="S3ExpressAccessPointScopeOutputReference" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_access_point

s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.resetPrefixes">reset_prefixes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_prefixes` <a name="reset_prefixes" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.resetPrefixes"></a>

```python
def reset_prefixes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.prefixesInput">prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.prefixes">prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope">S3ExpressAccessPointScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefixes_input`<sup>Optional</sup> <a name="prefixes_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.prefixesInput"></a>

```python
prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.prefixes"></a>

```python
prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScopeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ExpressAccessPointScope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointScope">S3ExpressAccessPointScope</a>

---


### S3ExpressAccessPointTagsList <a name="S3ExpressAccessPointTagsList" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_access_point

s3ExpressAccessPoint.S3ExpressAccessPointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3ExpressAccessPointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags">S3ExpressAccessPointTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3ExpressAccessPointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags">S3ExpressAccessPointTags</a>]

---


### S3ExpressAccessPointTagsOutputReference <a name="S3ExpressAccessPointTagsOutputReference" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_access_point

s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags">S3ExpressAccessPointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ExpressAccessPointTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointTags">S3ExpressAccessPointTags</a>

---


### S3ExpressAccessPointVpcConfigurationOutputReference <a name="S3ExpressAccessPointVpcConfigurationOutputReference" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_express_access_point

s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration">S3ExpressAccessPointVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3ExpressAccessPointVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ExpressAccessPoint.S3ExpressAccessPointVpcConfiguration">S3ExpressAccessPointVpcConfiguration</a>

---



