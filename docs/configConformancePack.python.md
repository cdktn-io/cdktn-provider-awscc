# `configConformancePack` Submodule <a name="`configConformancePack` Submodule" id="@cdktn/provider-awscc.configConformancePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConformancePack <a name="ConfigConformancePack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack awscc_config_conformance_pack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer"></a>

```python
from cdktn_provider_awscc import config_conformance_pack

configConformancePack.ConfigConformancePack(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  conformance_pack_name: str,
  conformance_pack_input_parameters: IResolvable | typing.List[ConfigConformancePackConformancePackInputParameters] = None,
  delivery_s3_bucket: str = None,
  delivery_s3_key_prefix: str = None,
  tags: IResolvable | typing.List[ConfigConformancePackTags] = None,
  template_body: str = None,
  template_s3_uri: str = None,
  template_ssm_document_details: ConfigConformancePackTemplateSsmDocumentDetails = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.conformancePackName">conformance_pack_name</a></code> | <code>str</code> | Name of the conformance pack which will be assigned as the unique identifier. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.conformancePackInputParameters">conformance_pack_input_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>]</code> | A list of ConformancePackInputParameter objects. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.deliveryS3Bucket">delivery_s3_bucket</a></code> | <code>str</code> | AWS Config stores intermediate files while processing conformance pack template. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.deliveryS3KeyPrefix">delivery_s3_key_prefix</a></code> | <code>str</code> | The prefix for delivery S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>]</code> | The tags for the conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.templateBody">template_body</a></code> | <code>str</code> | A string containing full conformance pack template body. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.templateS3Uri">template_s3_uri</a></code> | <code>str</code> | Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.templateSsmDocumentDetails">template_ssm_document_details</a></code> | <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a></code> | The TemplateSSMDocumentDetails object contains the name of the SSM document and the version of the SSM document. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conformance_pack_name`<sup>Required</sup> <a name="conformance_pack_name" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.conformancePackName"></a>

- *Type:* str

Name of the conformance pack which will be assigned as the unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#conformance_pack_name ConfigConformancePack#conformance_pack_name}

---

##### `conformance_pack_input_parameters`<sup>Optional</sup> <a name="conformance_pack_input_parameters" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.conformancePackInputParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>]

A list of ConformancePackInputParameter objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#conformance_pack_input_parameters ConfigConformancePack#conformance_pack_input_parameters}

---

##### `delivery_s3_bucket`<sup>Optional</sup> <a name="delivery_s3_bucket" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.deliveryS3Bucket"></a>

- *Type:* str

AWS Config stores intermediate files while processing conformance pack template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#delivery_s3_bucket ConfigConformancePack#delivery_s3_bucket}

---

##### `delivery_s3_key_prefix`<sup>Optional</sup> <a name="delivery_s3_key_prefix" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.deliveryS3KeyPrefix"></a>

- *Type:* str

The prefix for delivery S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#delivery_s3_key_prefix ConfigConformancePack#delivery_s3_key_prefix}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>]

The tags for the conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#tags ConfigConformancePack#tags}

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.templateBody"></a>

- *Type:* str

A string containing full conformance pack template body.

You can only specify one of the template body or template S3Uri fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#template_body ConfigConformancePack#template_body}

---

##### `template_s3_uri`<sup>Optional</sup> <a name="template_s3_uri" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.templateS3Uri"></a>

- *Type:* str

Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket.

You can only specify one of the template body or template S3Uri fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#template_s3_uri ConfigConformancePack#template_s3_uri}

---

##### `template_ssm_document_details`<sup>Optional</sup> <a name="template_ssm_document_details" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.templateSsmDocumentDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a>

The TemplateSSMDocumentDetails object contains the name of the SSM document and the version of the SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#template_ssm_document_details ConfigConformancePack#template_ssm_document_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putConformancePackInputParameters">put_conformance_pack_input_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTemplateSsmDocumentDetails">put_template_ssm_document_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetConformancePackInputParameters">reset_conformance_pack_input_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetDeliveryS3Bucket">reset_delivery_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetDeliveryS3KeyPrefix">reset_delivery_s3_key_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateBody">reset_template_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateS3Uri">reset_template_s3_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateSsmDocumentDetails">reset_template_ssm_document_details</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_conformance_pack_input_parameters` <a name="put_conformance_pack_input_parameters" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putConformancePackInputParameters"></a>

```python
def put_conformance_pack_input_parameters(
  value: IResolvable | typing.List[ConfigConformancePackConformancePackInputParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putConformancePackInputParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConfigConformancePackTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>]

---

##### `put_template_ssm_document_details` <a name="put_template_ssm_document_details" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTemplateSsmDocumentDetails"></a>

```python
def put_template_ssm_document_details(
  document_name: str = None,
  document_version: str = None
) -> None
```

###### `document_name`<sup>Optional</sup> <a name="document_name" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTemplateSsmDocumentDetails.parameter.documentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#document_name ConfigConformancePack#document_name}.

---

###### `document_version`<sup>Optional</sup> <a name="document_version" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTemplateSsmDocumentDetails.parameter.documentVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#document_version ConfigConformancePack#document_version}.

---

##### `reset_conformance_pack_input_parameters` <a name="reset_conformance_pack_input_parameters" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetConformancePackInputParameters"></a>

```python
def reset_conformance_pack_input_parameters() -> None
```

##### `reset_delivery_s3_bucket` <a name="reset_delivery_s3_bucket" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetDeliveryS3Bucket"></a>

```python
def reset_delivery_s3_bucket() -> None
```

##### `reset_delivery_s3_key_prefix` <a name="reset_delivery_s3_key_prefix" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetDeliveryS3KeyPrefix"></a>

```python
def reset_delivery_s3_key_prefix() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_body` <a name="reset_template_body" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateBody"></a>

```python
def reset_template_body() -> None
```

##### `reset_template_s3_uri` <a name="reset_template_s3_uri" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateS3Uri"></a>

```python
def reset_template_s3_uri() -> None
```

##### `reset_template_ssm_document_details` <a name="reset_template_ssm_document_details" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateSsmDocumentDetails"></a>

```python
def reset_template_ssm_document_details() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConfigConformancePack resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isConstruct"></a>

```python
from cdktn_provider_awscc import config_conformance_pack

configConformancePack.ConfigConformancePack.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformElement"></a>

```python
from cdktn_provider_awscc import config_conformance_pack

configConformancePack.ConfigConformancePack.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformResource"></a>

```python
from cdktn_provider_awscc import config_conformance_pack

configConformancePack.ConfigConformancePack.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import config_conformance_pack

configConformancePack.ConfigConformancePack.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConfigConformancePack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigConformancePack to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigConformancePack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigConformancePack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackArn">conformance_pack_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackInputParameters">conformance_pack_input_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList">ConfigConformancePackConformancePackInputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList">ConfigConformancePackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateSsmDocumentDetails">template_ssm_document_details</a></code> | <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference">ConfigConformancePackTemplateSsmDocumentDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackInputParametersInput">conformance_pack_input_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackNameInput">conformance_pack_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3BucketInput">delivery_s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefixInput">delivery_s3_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateBodyInput">template_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateS3UriInput">template_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateSsmDocumentDetailsInput">template_ssm_document_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackName">conformance_pack_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3Bucket">delivery_s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefix">delivery_s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateBody">template_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateS3Uri">template_s3_uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conformance_pack_arn`<sup>Required</sup> <a name="conformance_pack_arn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackArn"></a>

```python
conformance_pack_arn: str
```

- *Type:* str

---

##### `conformance_pack_input_parameters`<sup>Required</sup> <a name="conformance_pack_input_parameters" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackInputParameters"></a>

```python
conformance_pack_input_parameters: ConfigConformancePackConformancePackInputParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList">ConfigConformancePackConformancePackInputParametersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tags"></a>

```python
tags: ConfigConformancePackTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList">ConfigConformancePackTagsList</a>

---

##### `template_ssm_document_details`<sup>Required</sup> <a name="template_ssm_document_details" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateSsmDocumentDetails"></a>

```python
template_ssm_document_details: ConfigConformancePackTemplateSsmDocumentDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference">ConfigConformancePackTemplateSsmDocumentDetailsOutputReference</a>

---

##### `conformance_pack_input_parameters_input`<sup>Optional</sup> <a name="conformance_pack_input_parameters_input" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackInputParametersInput"></a>

```python
conformance_pack_input_parameters_input: IResolvable | typing.List[ConfigConformancePackConformancePackInputParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>]

---

##### `conformance_pack_name_input`<sup>Optional</sup> <a name="conformance_pack_name_input" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackNameInput"></a>

```python
conformance_pack_name_input: str
```

- *Type:* str

---

##### `delivery_s3_bucket_input`<sup>Optional</sup> <a name="delivery_s3_bucket_input" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3BucketInput"></a>

```python
delivery_s3_bucket_input: str
```

- *Type:* str

---

##### `delivery_s3_key_prefix_input`<sup>Optional</sup> <a name="delivery_s3_key_prefix_input" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefixInput"></a>

```python
delivery_s3_key_prefix_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConfigConformancePackTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>]

---

##### `template_body_input`<sup>Optional</sup> <a name="template_body_input" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateBodyInput"></a>

```python
template_body_input: str
```

- *Type:* str

---

##### `template_s3_uri_input`<sup>Optional</sup> <a name="template_s3_uri_input" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateS3UriInput"></a>

```python
template_s3_uri_input: str
```

- *Type:* str

---

##### `template_ssm_document_details_input`<sup>Optional</sup> <a name="template_ssm_document_details_input" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateSsmDocumentDetailsInput"></a>

```python
template_ssm_document_details_input: IResolvable | ConfigConformancePackTemplateSsmDocumentDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a>

---

##### `conformance_pack_name`<sup>Required</sup> <a name="conformance_pack_name" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackName"></a>

```python
conformance_pack_name: str
```

- *Type:* str

---

##### `delivery_s3_bucket`<sup>Required</sup> <a name="delivery_s3_bucket" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3Bucket"></a>

```python
delivery_s3_bucket: str
```

- *Type:* str

---

##### `delivery_s3_key_prefix`<sup>Required</sup> <a name="delivery_s3_key_prefix" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefix"></a>

```python
delivery_s3_key_prefix: str
```

- *Type:* str

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

---

##### `template_s3_uri`<sup>Required</sup> <a name="template_s3_uri" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateS3Uri"></a>

```python
template_s3_uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConformancePackConfig <a name="ConfigConformancePackConfig" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.Initializer"></a>

```python
from cdktn_provider_awscc import config_conformance_pack

configConformancePack.ConfigConformancePackConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  conformance_pack_name: str,
  conformance_pack_input_parameters: IResolvable | typing.List[ConfigConformancePackConformancePackInputParameters] = None,
  delivery_s3_bucket: str = None,
  delivery_s3_key_prefix: str = None,
  tags: IResolvable | typing.List[ConfigConformancePackTags] = None,
  template_body: str = None,
  template_s3_uri: str = None,
  template_ssm_document_details: ConfigConformancePackTemplateSsmDocumentDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.conformancePackName">conformance_pack_name</a></code> | <code>str</code> | Name of the conformance pack which will be assigned as the unique identifier. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.conformancePackInputParameters">conformance_pack_input_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>]</code> | A list of ConformancePackInputParameter objects. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.deliveryS3Bucket">delivery_s3_bucket</a></code> | <code>str</code> | AWS Config stores intermediate files while processing conformance pack template. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.deliveryS3KeyPrefix">delivery_s3_key_prefix</a></code> | <code>str</code> | The prefix for delivery S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>]</code> | The tags for the conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateBody">template_body</a></code> | <code>str</code> | A string containing full conformance pack template body. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateS3Uri">template_s3_uri</a></code> | <code>str</code> | Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateSsmDocumentDetails">template_ssm_document_details</a></code> | <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a></code> | The TemplateSSMDocumentDetails object contains the name of the SSM document and the version of the SSM document. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conformance_pack_name`<sup>Required</sup> <a name="conformance_pack_name" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.conformancePackName"></a>

```python
conformance_pack_name: str
```

- *Type:* str

Name of the conformance pack which will be assigned as the unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#conformance_pack_name ConfigConformancePack#conformance_pack_name}

---

##### `conformance_pack_input_parameters`<sup>Optional</sup> <a name="conformance_pack_input_parameters" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.conformancePackInputParameters"></a>

```python
conformance_pack_input_parameters: IResolvable | typing.List[ConfigConformancePackConformancePackInputParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>]

A list of ConformancePackInputParameter objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#conformance_pack_input_parameters ConfigConformancePack#conformance_pack_input_parameters}

---

##### `delivery_s3_bucket`<sup>Optional</sup> <a name="delivery_s3_bucket" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.deliveryS3Bucket"></a>

```python
delivery_s3_bucket: str
```

- *Type:* str

AWS Config stores intermediate files while processing conformance pack template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#delivery_s3_bucket ConfigConformancePack#delivery_s3_bucket}

---

##### `delivery_s3_key_prefix`<sup>Optional</sup> <a name="delivery_s3_key_prefix" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.deliveryS3KeyPrefix"></a>

```python
delivery_s3_key_prefix: str
```

- *Type:* str

The prefix for delivery S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#delivery_s3_key_prefix ConfigConformancePack#delivery_s3_key_prefix}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConfigConformancePackTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>]

The tags for the conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#tags ConfigConformancePack#tags}

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

A string containing full conformance pack template body.

You can only specify one of the template body or template S3Uri fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#template_body ConfigConformancePack#template_body}

---

##### `template_s3_uri`<sup>Optional</sup> <a name="template_s3_uri" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateS3Uri"></a>

```python
template_s3_uri: str
```

- *Type:* str

Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket.

You can only specify one of the template body or template S3Uri fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#template_s3_uri ConfigConformancePack#template_s3_uri}

---

##### `template_ssm_document_details`<sup>Optional</sup> <a name="template_ssm_document_details" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateSsmDocumentDetails"></a>

```python
template_ssm_document_details: ConfigConformancePackTemplateSsmDocumentDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a>

The TemplateSSMDocumentDetails object contains the name of the SSM document and the version of the SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#template_ssm_document_details ConfigConformancePack#template_ssm_document_details}

---

### ConfigConformancePackConformancePackInputParameters <a name="ConfigConformancePackConformancePackInputParameters" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters.Initializer"></a>

```python
from cdktn_provider_awscc import config_conformance_pack

configConformancePack.ConfigConformancePackConformancePackInputParameters(
  parameter_name: str = None,
  parameter_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters.property.parameterName">parameter_name</a></code> | <code>str</code> | Key part of key-value pair with value being parameter value. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters.property.parameterValue">parameter_value</a></code> | <code>str</code> | Value part of key-value pair with key being parameter Name. |

---

##### `parameter_name`<sup>Optional</sup> <a name="parameter_name" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

Key part of key-value pair with value being parameter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#parameter_name ConfigConformancePack#parameter_name}

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

Value part of key-value pair with key being parameter Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#parameter_value ConfigConformancePack#parameter_value}

---

### ConfigConformancePackTags <a name="ConfigConformancePackTags" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags.Initializer"></a>

```python
from cdktn_provider_awscc import config_conformance_pack

configConformancePack.ConfigConformancePackTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#key ConfigConformancePack#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#value ConfigConformancePack#value}

---

### ConfigConformancePackTemplateSsmDocumentDetails <a name="ConfigConformancePackTemplateSsmDocumentDetails" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails.Initializer"></a>

```python
from cdktn_provider_awscc import config_conformance_pack

configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails(
  document_name: str = None,
  document_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails.property.documentName">document_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#document_name ConfigConformancePack#document_name}. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails.property.documentVersion">document_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#document_version ConfigConformancePack#document_version}. |

---

##### `document_name`<sup>Optional</sup> <a name="document_name" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails.property.documentName"></a>

```python
document_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#document_name ConfigConformancePack#document_name}.

---

##### `document_version`<sup>Optional</sup> <a name="document_version" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails.property.documentVersion"></a>

```python
document_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/config_conformance_pack#document_version ConfigConformancePack#document_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConformancePackConformancePackInputParametersList <a name="ConfigConformancePackConformancePackInputParametersList" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import config_conformance_pack

configConformancePack.ConfigConformancePackConformancePackInputParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigConformancePackConformancePackInputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigConformancePackConformancePackInputParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>]

---


### ConfigConformancePackConformancePackInputParametersOutputReference <a name="ConfigConformancePackConformancePackInputParametersOutputReference" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_conformance_pack

configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resetParameterName">reset_parameter_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resetParameterValue">reset_parameter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameter_name` <a name="reset_parameter_name" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resetParameterName"></a>

```python
def reset_parameter_name() -> None
```

##### `reset_parameter_value` <a name="reset_parameter_value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resetParameterValue"></a>

```python
def reset_parameter_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConformancePackConformancePackInputParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters">ConfigConformancePackConformancePackInputParameters</a>

---


### ConfigConformancePackTagsList <a name="ConfigConformancePackTagsList" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import config_conformance_pack

configConformancePack.ConfigConformancePackTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigConformancePackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigConformancePackTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>]

---


### ConfigConformancePackTagsOutputReference <a name="ConfigConformancePackTagsOutputReference" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_conformance_pack

configConformancePack.ConfigConformancePackTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConformancePackTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags">ConfigConformancePackTags</a>

---


### ConfigConformancePackTemplateSsmDocumentDetailsOutputReference <a name="ConfigConformancePackTemplateSsmDocumentDetailsOutputReference" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_conformance_pack

configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resetDocumentName">reset_document_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resetDocumentVersion">reset_document_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_document_name` <a name="reset_document_name" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resetDocumentName"></a>

```python
def reset_document_name() -> None
```

##### `reset_document_version` <a name="reset_document_version" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resetDocumentVersion"></a>

```python
def reset_document_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentNameInput">document_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentVersionInput">document_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentName">document_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentVersion">document_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `document_name_input`<sup>Optional</sup> <a name="document_name_input" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentNameInput"></a>

```python
document_name_input: str
```

- *Type:* str

---

##### `document_version_input`<sup>Optional</sup> <a name="document_version_input" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentVersionInput"></a>

```python
document_version_input: str
```

- *Type:* str

---

##### `document_name`<sup>Required</sup> <a name="document_name" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentName"></a>

```python
document_name: str
```

- *Type:* str

---

##### `document_version`<sup>Required</sup> <a name="document_version" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentVersion"></a>

```python
document_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigConformancePackTemplateSsmDocumentDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a>

---



