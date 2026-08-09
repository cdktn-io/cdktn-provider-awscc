# `configOrganizationConformancePack` Submodule <a name="`configOrganizationConformancePack` Submodule" id="@cdktn/provider-awscc.configOrganizationConformancePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationConformancePack <a name="ConfigOrganizationConformancePack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack awscc_config_organization_conformance_pack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer"></a>

```python
from cdktn_provider_awscc import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePack(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  organization_conformance_pack_name: str,
  conformance_pack_input_parameters: IResolvable | typing.List[ConfigOrganizationConformancePackConformancePackInputParameters] = None,
  delivery_s3_bucket: str = None,
  delivery_s3_key_prefix: str = None,
  excluded_accounts: typing.List[str] = None,
  tags: IResolvable | typing.List[ConfigOrganizationConformancePackTags] = None,
  template_body: str = None,
  template_s3_uri: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.organizationConformancePackName">organization_conformance_pack_name</a></code> | <code>str</code> | The name of the organization conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.conformancePackInputParameters">conformance_pack_input_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>]</code> | A list of ConformancePackInputParameter objects. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.deliveryS3Bucket">delivery_s3_bucket</a></code> | <code>str</code> | AWS Config stores intermediate files while processing conformance pack template. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.deliveryS3KeyPrefix">delivery_s3_key_prefix</a></code> | <code>str</code> | The prefix for the delivery S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>]</code> | The tags for the organization conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.templateBody">template_body</a></code> | <code>str</code> | A string containing full conformance pack template body. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.templateS3Uri">template_s3_uri</a></code> | <code>str</code> | Location of file containing the template body. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `organization_conformance_pack_name`<sup>Required</sup> <a name="organization_conformance_pack_name" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.organizationConformancePackName"></a>

- *Type:* str

The name of the organization conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#organization_conformance_pack_name ConfigOrganizationConformancePack#organization_conformance_pack_name}

---

##### `conformance_pack_input_parameters`<sup>Optional</sup> <a name="conformance_pack_input_parameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.conformancePackInputParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>]

A list of ConformancePackInputParameter objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#conformance_pack_input_parameters ConfigOrganizationConformancePack#conformance_pack_input_parameters}

---

##### `delivery_s3_bucket`<sup>Optional</sup> <a name="delivery_s3_bucket" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.deliveryS3Bucket"></a>

- *Type:* str

AWS Config stores intermediate files while processing conformance pack template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}

---

##### `delivery_s3_key_prefix`<sup>Optional</sup> <a name="delivery_s3_key_prefix" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.deliveryS3KeyPrefix"></a>

- *Type:* str

The prefix for the delivery S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}

---

##### `excluded_accounts`<sup>Optional</sup> <a name="excluded_accounts" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.excludedAccounts"></a>

- *Type:* typing.List[str]

A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>]

The tags for the organization conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#tags ConfigOrganizationConformancePack#tags}

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.templateBody"></a>

- *Type:* str

A string containing full conformance pack template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#template_body ConfigOrganizationConformancePack#template_body}

---

##### `template_s3_uri`<sup>Optional</sup> <a name="template_s3_uri" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.templateS3Uri"></a>

- *Type:* str

Location of file containing the template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putConformancePackInputParameters">put_conformance_pack_input_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetConformancePackInputParameters">reset_conformance_pack_input_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3Bucket">reset_delivery_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3KeyPrefix">reset_delivery_s3_key_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetExcludedAccounts">reset_excluded_accounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateBody">reset_template_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateS3Uri">reset_template_s3_uri</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_conformance_pack_input_parameters` <a name="put_conformance_pack_input_parameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putConformancePackInputParameters"></a>

```python
def put_conformance_pack_input_parameters(
  value: IResolvable | typing.List[ConfigOrganizationConformancePackConformancePackInputParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putConformancePackInputParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConfigOrganizationConformancePackTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>]

---

##### `reset_conformance_pack_input_parameters` <a name="reset_conformance_pack_input_parameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetConformancePackInputParameters"></a>

```python
def reset_conformance_pack_input_parameters() -> None
```

##### `reset_delivery_s3_bucket` <a name="reset_delivery_s3_bucket" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3Bucket"></a>

```python
def reset_delivery_s3_bucket() -> None
```

##### `reset_delivery_s3_key_prefix` <a name="reset_delivery_s3_key_prefix" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3KeyPrefix"></a>

```python
def reset_delivery_s3_key_prefix() -> None
```

##### `reset_excluded_accounts` <a name="reset_excluded_accounts" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetExcludedAccounts"></a>

```python
def reset_excluded_accounts() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_body` <a name="reset_template_body" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateBody"></a>

```python
def reset_template_body() -> None
```

##### `reset_template_s3_uri` <a name="reset_template_s3_uri" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateS3Uri"></a>

```python
def reset_template_s3_uri() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConfigOrganizationConformancePack resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct"></a>

```python
from cdktn_provider_awscc import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePack.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement"></a>

```python
from cdktn_provider_awscc import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePack.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource"></a>

```python
from cdktn_provider_awscc import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePack.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePack.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConfigOrganizationConformancePack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigOrganizationConformancePack to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigOrganizationConformancePack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigOrganizationConformancePack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.conformancePackInputParameters">conformance_pack_input_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList">ConfigOrganizationConformancePackConformancePackInputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackArn">organization_conformance_pack_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList">ConfigOrganizationConformancePackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.conformancePackInputParametersInput">conformance_pack_input_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3BucketInput">delivery_s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefixInput">delivery_s3_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccountsInput">excluded_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackNameInput">organization_conformance_pack_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBodyInput">template_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3UriInput">template_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3Bucket">delivery_s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefix">delivery_s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackName">organization_conformance_pack_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBody">template_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3Uri">template_s3_uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conformance_pack_input_parameters`<sup>Required</sup> <a name="conformance_pack_input_parameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.conformancePackInputParameters"></a>

```python
conformance_pack_input_parameters: ConfigOrganizationConformancePackConformancePackInputParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList">ConfigOrganizationConformancePackConformancePackInputParametersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `organization_conformance_pack_arn`<sup>Required</sup> <a name="organization_conformance_pack_arn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackArn"></a>

```python
organization_conformance_pack_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tags"></a>

```python
tags: ConfigOrganizationConformancePackTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList">ConfigOrganizationConformancePackTagsList</a>

---

##### `conformance_pack_input_parameters_input`<sup>Optional</sup> <a name="conformance_pack_input_parameters_input" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.conformancePackInputParametersInput"></a>

```python
conformance_pack_input_parameters_input: IResolvable | typing.List[ConfigOrganizationConformancePackConformancePackInputParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>]

---

##### `delivery_s3_bucket_input`<sup>Optional</sup> <a name="delivery_s3_bucket_input" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3BucketInput"></a>

```python
delivery_s3_bucket_input: str
```

- *Type:* str

---

##### `delivery_s3_key_prefix_input`<sup>Optional</sup> <a name="delivery_s3_key_prefix_input" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefixInput"></a>

```python
delivery_s3_key_prefix_input: str
```

- *Type:* str

---

##### `excluded_accounts_input`<sup>Optional</sup> <a name="excluded_accounts_input" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccountsInput"></a>

```python
excluded_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_conformance_pack_name_input`<sup>Optional</sup> <a name="organization_conformance_pack_name_input" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackNameInput"></a>

```python
organization_conformance_pack_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConfigOrganizationConformancePackTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>]

---

##### `template_body_input`<sup>Optional</sup> <a name="template_body_input" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBodyInput"></a>

```python
template_body_input: str
```

- *Type:* str

---

##### `template_s3_uri_input`<sup>Optional</sup> <a name="template_s3_uri_input" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3UriInput"></a>

```python
template_s3_uri_input: str
```

- *Type:* str

---

##### `delivery_s3_bucket`<sup>Required</sup> <a name="delivery_s3_bucket" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3Bucket"></a>

```python
delivery_s3_bucket: str
```

- *Type:* str

---

##### `delivery_s3_key_prefix`<sup>Required</sup> <a name="delivery_s3_key_prefix" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefix"></a>

```python
delivery_s3_key_prefix: str
```

- *Type:* str

---

##### `excluded_accounts`<sup>Required</sup> <a name="excluded_accounts" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccounts"></a>

```python
excluded_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_conformance_pack_name`<sup>Required</sup> <a name="organization_conformance_pack_name" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.organizationConformancePackName"></a>

```python
organization_conformance_pack_name: str
```

- *Type:* str

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

---

##### `template_s3_uri`<sup>Required</sup> <a name="template_s3_uri" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3Uri"></a>

```python
template_s3_uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationConformancePackConfig <a name="ConfigOrganizationConformancePackConfig" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.Initializer"></a>

```python
from cdktn_provider_awscc import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePackConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  organization_conformance_pack_name: str,
  conformance_pack_input_parameters: IResolvable | typing.List[ConfigOrganizationConformancePackConformancePackInputParameters] = None,
  delivery_s3_bucket: str = None,
  delivery_s3_key_prefix: str = None,
  excluded_accounts: typing.List[str] = None,
  tags: IResolvable | typing.List[ConfigOrganizationConformancePackTags] = None,
  template_body: str = None,
  template_s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.organizationConformancePackName">organization_conformance_pack_name</a></code> | <code>str</code> | The name of the organization conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.conformancePackInputParameters">conformance_pack_input_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>]</code> | A list of ConformancePackInputParameter objects. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3Bucket">delivery_s3_bucket</a></code> | <code>str</code> | AWS Config stores intermediate files while processing conformance pack template. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3KeyPrefix">delivery_s3_key_prefix</a></code> | <code>str</code> | The prefix for the delivery S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>]</code> | The tags for the organization conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateBody">template_body</a></code> | <code>str</code> | A string containing full conformance pack template body. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateS3Uri">template_s3_uri</a></code> | <code>str</code> | Location of file containing the template body. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `organization_conformance_pack_name`<sup>Required</sup> <a name="organization_conformance_pack_name" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.organizationConformancePackName"></a>

```python
organization_conformance_pack_name: str
```

- *Type:* str

The name of the organization conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#organization_conformance_pack_name ConfigOrganizationConformancePack#organization_conformance_pack_name}

---

##### `conformance_pack_input_parameters`<sup>Optional</sup> <a name="conformance_pack_input_parameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.conformancePackInputParameters"></a>

```python
conformance_pack_input_parameters: IResolvable | typing.List[ConfigOrganizationConformancePackConformancePackInputParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>]

A list of ConformancePackInputParameter objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#conformance_pack_input_parameters ConfigOrganizationConformancePack#conformance_pack_input_parameters}

---

##### `delivery_s3_bucket`<sup>Optional</sup> <a name="delivery_s3_bucket" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3Bucket"></a>

```python
delivery_s3_bucket: str
```

- *Type:* str

AWS Config stores intermediate files while processing conformance pack template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}

---

##### `delivery_s3_key_prefix`<sup>Optional</sup> <a name="delivery_s3_key_prefix" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3KeyPrefix"></a>

```python
delivery_s3_key_prefix: str
```

- *Type:* str

The prefix for the delivery S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}

---

##### `excluded_accounts`<sup>Optional</sup> <a name="excluded_accounts" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.excludedAccounts"></a>

```python
excluded_accounts: typing.List[str]
```

- *Type:* typing.List[str]

A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConfigOrganizationConformancePackTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>]

The tags for the organization conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#tags ConfigOrganizationConformancePack#tags}

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

A string containing full conformance pack template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#template_body ConfigOrganizationConformancePack#template_body}

---

##### `template_s3_uri`<sup>Optional</sup> <a name="template_s3_uri" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateS3Uri"></a>

```python
template_s3_uri: str
```

- *Type:* str

Location of file containing the template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}

---

### ConfigOrganizationConformancePackConformancePackInputParameters <a name="ConfigOrganizationConformancePackConformancePackInputParameters" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters.Initializer"></a>

```python
from cdktn_provider_awscc import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters(
  parameter_name: str = None,
  parameter_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters.property.parameterName">parameter_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#parameter_name ConfigOrganizationConformancePack#parameter_name}. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters.property.parameterValue">parameter_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#parameter_value ConfigOrganizationConformancePack#parameter_value}. |

---

##### `parameter_name`<sup>Optional</sup> <a name="parameter_name" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#parameter_name ConfigOrganizationConformancePack#parameter_name}.

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#parameter_value ConfigOrganizationConformancePack#parameter_value}.

---

### ConfigOrganizationConformancePackTags <a name="ConfigOrganizationConformancePackTags" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags.Initializer"></a>

```python
from cdktn_provider_awscc import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePackTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#key ConfigOrganizationConformancePack#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_organization_conformance_pack#value ConfigOrganizationConformancePack#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationConformancePackConformancePackInputParametersList <a name="ConfigOrganizationConformancePackConformancePackInputParametersList" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigOrganizationConformancePackConformancePackInputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigOrganizationConformancePackConformancePackInputParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>]

---


### ConfigOrganizationConformancePackConformancePackInputParametersOutputReference <a name="ConfigOrganizationConformancePackConformancePackInputParametersOutputReference" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resetParameterName">reset_parameter_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resetParameterValue">reset_parameter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameter_name` <a name="reset_parameter_name" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resetParameterName"></a>

```python
def reset_parameter_name() -> None
```

##### `reset_parameter_value` <a name="reset_parameter_value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.resetParameterValue"></a>

```python
def reset_parameter_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigOrganizationConformancePackConformancePackInputParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackConformancePackInputParameters">ConfigOrganizationConformancePackConformancePackInputParameters</a>

---


### ConfigOrganizationConformancePackTagsList <a name="ConfigOrganizationConformancePackTagsList" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigOrganizationConformancePackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigOrganizationConformancePackTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>]

---


### ConfigOrganizationConformancePackTagsOutputReference <a name="ConfigOrganizationConformancePackTagsOutputReference" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigOrganizationConformancePackTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configOrganizationConformancePack.ConfigOrganizationConformancePackTags">ConfigOrganizationConformancePackTags</a>

---



