# `sesMailManagerIngressPoint` Submodule <a name="`sesMailManagerIngressPoint` Submodule" id="@cdktn/provider-awscc.sesMailManagerIngressPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesMailManagerIngressPoint <a name="SesMailManagerIngressPoint" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point awscc_ses_mail_manager_ingress_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rule_set_id: str,
  traffic_policy_id: str,
  type: str,
  ingress_point_configuration: SesMailManagerIngressPointIngressPointConfiguration = None,
  ingress_point_name: str = None,
  network_configuration: SesMailManagerIngressPointNetworkConfiguration = None,
  status_to_update: str = None,
  tags: IResolvable | typing.List[SesMailManagerIngressPointTags] = None,
  tls_policy: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.ruleSetId">rule_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#rule_set_id SesMailManagerIngressPoint#rule_set_id}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.trafficPolicyId">traffic_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#traffic_policy_id SesMailManagerIngressPoint#traffic_policy_id}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#type SesMailManagerIngressPoint#type}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.ingressPointConfiguration">ingress_point_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_configuration SesMailManagerIngressPoint#ingress_point_configuration}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.ingressPointName">ingress_point_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_name SesMailManagerIngressPoint#ingress_point_name}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#network_configuration SesMailManagerIngressPoint#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.statusToUpdate">status_to_update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#status_to_update SesMailManagerIngressPoint#status_to_update}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#tags SesMailManagerIngressPoint#tags}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.tlsPolicy">tls_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#tls_policy SesMailManagerIngressPoint#tls_policy}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rule_set_id`<sup>Required</sup> <a name="rule_set_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.ruleSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#rule_set_id SesMailManagerIngressPoint#rule_set_id}.

---

##### `traffic_policy_id`<sup>Required</sup> <a name="traffic_policy_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.trafficPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#traffic_policy_id SesMailManagerIngressPoint#traffic_policy_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#type SesMailManagerIngressPoint#type}.

---

##### `ingress_point_configuration`<sup>Optional</sup> <a name="ingress_point_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.ingressPointConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_configuration SesMailManagerIngressPoint#ingress_point_configuration}.

---

##### `ingress_point_name`<sup>Optional</sup> <a name="ingress_point_name" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.ingressPointName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_name SesMailManagerIngressPoint#ingress_point_name}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#network_configuration SesMailManagerIngressPoint#network_configuration}.

---

##### `status_to_update`<sup>Optional</sup> <a name="status_to_update" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.statusToUpdate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#status_to_update SesMailManagerIngressPoint#status_to_update}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#tags SesMailManagerIngressPoint#tags}.

---

##### `tls_policy`<sup>Optional</sup> <a name="tls_policy" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.tlsPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#tls_policy SesMailManagerIngressPoint#tls_policy}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putIngressPointConfiguration">put_ingress_point_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetIngressPointConfiguration">reset_ingress_point_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetIngressPointName">reset_ingress_point_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetStatusToUpdate">reset_status_to_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetTlsPolicy">reset_tls_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ingress_point_configuration` <a name="put_ingress_point_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putIngressPointConfiguration"></a>

```python
def put_ingress_point_configuration(
  secret_arn: str = None,
  smtp_password: str = None,
  tls_auth_configuration: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration = None
) -> None
```

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putIngressPointConfiguration.parameter.secretArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#secret_arn SesMailManagerIngressPoint#secret_arn}.

---

###### `smtp_password`<sup>Optional</sup> <a name="smtp_password" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putIngressPointConfiguration.parameter.smtpPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#smtp_password SesMailManagerIngressPoint#smtp_password}.

---

###### `tls_auth_configuration`<sup>Optional</sup> <a name="tls_auth_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putIngressPointConfiguration.parameter.tlsAuthConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#tls_auth_configuration SesMailManagerIngressPoint#tls_auth_configuration}.

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  private_network_configuration: SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration = None,
  public_network_configuration: SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration = None
) -> None
```

###### `private_network_configuration`<sup>Optional</sup> <a name="private_network_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putNetworkConfiguration.parameter.privateNetworkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#private_network_configuration SesMailManagerIngressPoint#private_network_configuration}.

---

###### `public_network_configuration`<sup>Optional</sup> <a name="public_network_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putNetworkConfiguration.parameter.publicNetworkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#public_network_configuration SesMailManagerIngressPoint#public_network_configuration}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SesMailManagerIngressPointTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>]

---

##### `reset_ingress_point_configuration` <a name="reset_ingress_point_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetIngressPointConfiguration"></a>

```python
def reset_ingress_point_configuration() -> None
```

##### `reset_ingress_point_name` <a name="reset_ingress_point_name" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetIngressPointName"></a>

```python
def reset_ingress_point_name() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_status_to_update` <a name="reset_status_to_update" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetStatusToUpdate"></a>

```python
def reset_status_to_update() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tls_policy` <a name="reset_tls_policy" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetTlsPolicy"></a>

```python
def reset_tls_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SesMailManagerIngressPoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isConstruct"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SesMailManagerIngressPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SesMailManagerIngressPoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SesMailManagerIngressPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SesMailManagerIngressPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.aRecord">a_record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointArn">ingress_point_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointConfiguration">ingress_point_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference">SesMailManagerIngressPointIngressPointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointId">ingress_point_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList">SesMailManagerIngressPointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointConfigurationInput">ingress_point_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointNameInput">ingress_point_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.networkConfigurationInput">network_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ruleSetIdInput">rule_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.statusToUpdateInput">status_to_update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tlsPolicyInput">tls_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.trafficPolicyIdInput">traffic_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointName">ingress_point_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ruleSetId">rule_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.statusToUpdate">status_to_update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tlsPolicy">tls_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.trafficPolicyId">traffic_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `a_record`<sup>Required</sup> <a name="a_record" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.aRecord"></a>

```python
a_record: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress_point_arn`<sup>Required</sup> <a name="ingress_point_arn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointArn"></a>

```python
ingress_point_arn: str
```

- *Type:* str

---

##### `ingress_point_configuration`<sup>Required</sup> <a name="ingress_point_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointConfiguration"></a>

```python
ingress_point_configuration: SesMailManagerIngressPointIngressPointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference">SesMailManagerIngressPointIngressPointConfigurationOutputReference</a>

---

##### `ingress_point_id`<sup>Required</sup> <a name="ingress_point_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointId"></a>

```python
ingress_point_id: str
```

- *Type:* str

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.networkConfiguration"></a>

```python
network_configuration: SesMailManagerIngressPointNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tags"></a>

```python
tags: SesMailManagerIngressPointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList">SesMailManagerIngressPointTagsList</a>

---

##### `ingress_point_configuration_input`<sup>Optional</sup> <a name="ingress_point_configuration_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointConfigurationInput"></a>

```python
ingress_point_configuration_input: IResolvable | SesMailManagerIngressPointIngressPointConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a>

---

##### `ingress_point_name_input`<sup>Optional</sup> <a name="ingress_point_name_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointNameInput"></a>

```python
ingress_point_name_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.networkConfigurationInput"></a>

```python
network_configuration_input: IResolvable | SesMailManagerIngressPointNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a>

---

##### `rule_set_id_input`<sup>Optional</sup> <a name="rule_set_id_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ruleSetIdInput"></a>

```python
rule_set_id_input: str
```

- *Type:* str

---

##### `status_to_update_input`<sup>Optional</sup> <a name="status_to_update_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.statusToUpdateInput"></a>

```python
status_to_update_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SesMailManagerIngressPointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>]

---

##### `tls_policy_input`<sup>Optional</sup> <a name="tls_policy_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tlsPolicyInput"></a>

```python
tls_policy_input: str
```

- *Type:* str

---

##### `traffic_policy_id_input`<sup>Optional</sup> <a name="traffic_policy_id_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.trafficPolicyIdInput"></a>

```python
traffic_policy_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `ingress_point_name`<sup>Required</sup> <a name="ingress_point_name" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointName"></a>

```python
ingress_point_name: str
```

- *Type:* str

---

##### `rule_set_id`<sup>Required</sup> <a name="rule_set_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ruleSetId"></a>

```python
rule_set_id: str
```

- *Type:* str

---

##### `status_to_update`<sup>Required</sup> <a name="status_to_update" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.statusToUpdate"></a>

```python
status_to_update: str
```

- *Type:* str

---

##### `tls_policy`<sup>Required</sup> <a name="tls_policy" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tlsPolicy"></a>

```python
tls_policy: str
```

- *Type:* str

---

##### `traffic_policy_id`<sup>Required</sup> <a name="traffic_policy_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.trafficPolicyId"></a>

```python
traffic_policy_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SesMailManagerIngressPointConfig <a name="SesMailManagerIngressPointConfig" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rule_set_id: str,
  traffic_policy_id: str,
  type: str,
  ingress_point_configuration: SesMailManagerIngressPointIngressPointConfiguration = None,
  ingress_point_name: str = None,
  network_configuration: SesMailManagerIngressPointNetworkConfiguration = None,
  status_to_update: str = None,
  tags: IResolvable | typing.List[SesMailManagerIngressPointTags] = None,
  tls_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ruleSetId">rule_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#rule_set_id SesMailManagerIngressPoint#rule_set_id}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.trafficPolicyId">traffic_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#traffic_policy_id SesMailManagerIngressPoint#traffic_policy_id}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#type SesMailManagerIngressPoint#type}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ingressPointConfiguration">ingress_point_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_configuration SesMailManagerIngressPoint#ingress_point_configuration}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ingressPointName">ingress_point_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_name SesMailManagerIngressPoint#ingress_point_name}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#network_configuration SesMailManagerIngressPoint#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.statusToUpdate">status_to_update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#status_to_update SesMailManagerIngressPoint#status_to_update}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#tags SesMailManagerIngressPoint#tags}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.tlsPolicy">tls_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#tls_policy SesMailManagerIngressPoint#tls_policy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rule_set_id`<sup>Required</sup> <a name="rule_set_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ruleSetId"></a>

```python
rule_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#rule_set_id SesMailManagerIngressPoint#rule_set_id}.

---

##### `traffic_policy_id`<sup>Required</sup> <a name="traffic_policy_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.trafficPolicyId"></a>

```python
traffic_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#traffic_policy_id SesMailManagerIngressPoint#traffic_policy_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#type SesMailManagerIngressPoint#type}.

---

##### `ingress_point_configuration`<sup>Optional</sup> <a name="ingress_point_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ingressPointConfiguration"></a>

```python
ingress_point_configuration: SesMailManagerIngressPointIngressPointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_configuration SesMailManagerIngressPoint#ingress_point_configuration}.

---

##### `ingress_point_name`<sup>Optional</sup> <a name="ingress_point_name" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ingressPointName"></a>

```python
ingress_point_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_name SesMailManagerIngressPoint#ingress_point_name}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.networkConfiguration"></a>

```python
network_configuration: SesMailManagerIngressPointNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#network_configuration SesMailManagerIngressPoint#network_configuration}.

---

##### `status_to_update`<sup>Optional</sup> <a name="status_to_update" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.statusToUpdate"></a>

```python
status_to_update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#status_to_update SesMailManagerIngressPoint#status_to_update}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SesMailManagerIngressPointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#tags SesMailManagerIngressPoint#tags}.

---

##### `tls_policy`<sup>Optional</sup> <a name="tls_policy" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.tlsPolicy"></a>

```python
tls_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#tls_policy SesMailManagerIngressPoint#tls_policy}.

---

### SesMailManagerIngressPointIngressPointConfiguration <a name="SesMailManagerIngressPointIngressPointConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration(
  secret_arn: str = None,
  smtp_password: str = None,
  tls_auth_configuration: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.secretArn">secret_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#secret_arn SesMailManagerIngressPoint#secret_arn}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.smtpPassword">smtp_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#smtp_password SesMailManagerIngressPoint#smtp_password}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.tlsAuthConfiguration">tls_auth_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#tls_auth_configuration SesMailManagerIngressPoint#tls_auth_configuration}. |

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#secret_arn SesMailManagerIngressPoint#secret_arn}.

---

##### `smtp_password`<sup>Optional</sup> <a name="smtp_password" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.smtpPassword"></a>

```python
smtp_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#smtp_password SesMailManagerIngressPoint#smtp_password}.

---

##### `tls_auth_configuration`<sup>Optional</sup> <a name="tls_auth_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.tlsAuthConfiguration"></a>

```python
tls_auth_configuration: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#tls_auth_configuration SesMailManagerIngressPoint#tls_auth_configuration}.

---

### SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration <a name="SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration(
  trust_store: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration.property.trustStore">trust_store</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#trust_store SesMailManagerIngressPoint#trust_store}. |

---

##### `trust_store`<sup>Optional</sup> <a name="trust_store" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration.property.trustStore"></a>

```python
trust_store: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#trust_store SesMailManagerIngressPoint#trust_store}.

---

### SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore <a name="SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore(
  ca_content: str = None,
  crl_content: str = None,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.caContent">ca_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#ca_content SesMailManagerIngressPoint#ca_content}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.crlContent">crl_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#crl_content SesMailManagerIngressPoint#crl_content}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#kms_key_arn SesMailManagerIngressPoint#kms_key_arn}. |

---

##### `ca_content`<sup>Optional</sup> <a name="ca_content" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.caContent"></a>

```python
ca_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#ca_content SesMailManagerIngressPoint#ca_content}.

---

##### `crl_content`<sup>Optional</sup> <a name="crl_content" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.crlContent"></a>

```python
crl_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#crl_content SesMailManagerIngressPoint#crl_content}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#kms_key_arn SesMailManagerIngressPoint#kms_key_arn}.

---

### SesMailManagerIngressPointNetworkConfiguration <a name="SesMailManagerIngressPointNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration(
  private_network_configuration: SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration = None,
  public_network_configuration: SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration.property.privateNetworkConfiguration">private_network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#private_network_configuration SesMailManagerIngressPoint#private_network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration.property.publicNetworkConfiguration">public_network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#public_network_configuration SesMailManagerIngressPoint#public_network_configuration}. |

---

##### `private_network_configuration`<sup>Optional</sup> <a name="private_network_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration.property.privateNetworkConfiguration"></a>

```python
private_network_configuration: SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#private_network_configuration SesMailManagerIngressPoint#private_network_configuration}.

---

##### `public_network_configuration`<sup>Optional</sup> <a name="public_network_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration.property.publicNetworkConfiguration"></a>

```python
public_network_configuration: SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#public_network_configuration SesMailManagerIngressPoint#public_network_configuration}.

---

### SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration <a name="SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration(
  vpc_endpoint_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#vpc_endpoint_id SesMailManagerIngressPoint#vpc_endpoint_id}. |

---

##### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#vpc_endpoint_id SesMailManagerIngressPoint#vpc_endpoint_id}.

---

### SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration <a name="SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration(
  ip_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration.property.ipType">ip_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#ip_type SesMailManagerIngressPoint#ip_type}. |

---

##### `ip_type`<sup>Optional</sup> <a name="ip_type" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration.property.ipType"></a>

```python
ip_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#ip_type SesMailManagerIngressPoint#ip_type}.

---

### SesMailManagerIngressPointTags <a name="SesMailManagerIngressPointTags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPointTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#key SesMailManagerIngressPoint#key}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#value SesMailManagerIngressPoint#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#key SesMailManagerIngressPoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#value SesMailManagerIngressPoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesMailManagerIngressPointIngressPointConfigurationOutputReference <a name="SesMailManagerIngressPointIngressPointConfigurationOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration">put_tls_auth_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPassword">reset_smtp_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetTlsAuthConfiguration">reset_tls_auth_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tls_auth_configuration` <a name="put_tls_auth_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration"></a>

```python
def put_tls_auth_configuration(
  trust_store: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore = None
) -> None
```

###### `trust_store`<sup>Optional</sup> <a name="trust_store" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration.parameter.trustStore"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#trust_store SesMailManagerIngressPoint#trust_store}.

---

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```

##### `reset_smtp_password` <a name="reset_smtp_password" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPassword"></a>

```python
def reset_smtp_password() -> None
```

##### `reset_tls_auth_configuration` <a name="reset_tls_auth_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetTlsAuthConfiguration"></a>

```python
def reset_tls_auth_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfiguration">tls_auth_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordInput">smtp_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfigurationInput">tls_auth_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.smtpPassword">smtp_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tls_auth_configuration`<sup>Required</sup> <a name="tls_auth_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfiguration"></a>

```python
tls_auth_configuration: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference</a>

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `smtp_password_input`<sup>Optional</sup> <a name="smtp_password_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordInput"></a>

```python
smtp_password_input: str
```

- *Type:* str

---

##### `tls_auth_configuration_input`<sup>Optional</sup> <a name="tls_auth_configuration_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfigurationInput"></a>

```python
tls_auth_configuration_input: IResolvable | SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `smtp_password`<sup>Required</sup> <a name="smtp_password" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.smtpPassword"></a>

```python
smtp_password: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesMailManagerIngressPointIngressPointConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a>

---


### SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference <a name="SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore">put_trust_store</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resetTrustStore">reset_trust_store</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_trust_store` <a name="put_trust_store" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore"></a>

```python
def put_trust_store(
  ca_content: str = None,
  crl_content: str = None,
  kms_key_arn: str = None
) -> None
```

###### `ca_content`<sup>Optional</sup> <a name="ca_content" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore.parameter.caContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#ca_content SesMailManagerIngressPoint#ca_content}.

---

###### `crl_content`<sup>Optional</sup> <a name="crl_content" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore.parameter.crlContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#crl_content SesMailManagerIngressPoint#crl_content}.

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#kms_key_arn SesMailManagerIngressPoint#kms_key_arn}.

---

##### `reset_trust_store` <a name="reset_trust_store" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resetTrustStore"></a>

```python
def reset_trust_store() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStore">trust_store</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStoreInput">trust_store_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trust_store`<sup>Required</sup> <a name="trust_store" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStore"></a>

```python
trust_store: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference</a>

---

##### `trust_store_input`<sup>Optional</sup> <a name="trust_store_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStoreInput"></a>

```python
trust_store_input: IResolvable | SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>

---


### SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference <a name="SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCaContent">reset_ca_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCrlContent">reset_crl_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ca_content` <a name="reset_ca_content" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCaContent"></a>

```python
def reset_ca_content() -> None
```

##### `reset_crl_content` <a name="reset_crl_content" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCrlContent"></a>

```python
def reset_crl_content() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContentInput">ca_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContentInput">crl_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContent">ca_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContent">crl_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_content_input`<sup>Optional</sup> <a name="ca_content_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContentInput"></a>

```python
ca_content_input: str
```

- *Type:* str

---

##### `crl_content_input`<sup>Optional</sup> <a name="crl_content_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContentInput"></a>

```python
crl_content_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `ca_content`<sup>Required</sup> <a name="ca_content" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContent"></a>

```python
ca_content: str
```

- *Type:* str

---

##### `crl_content`<sup>Required</sup> <a name="crl_content" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContent"></a>

```python
crl_content: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>

---


### SesMailManagerIngressPointNetworkConfigurationOutputReference <a name="SesMailManagerIngressPointNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration">put_private_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration">put_public_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resetPrivateNetworkConfiguration">reset_private_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resetPublicNetworkConfiguration">reset_public_network_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_private_network_configuration` <a name="put_private_network_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration"></a>

```python
def put_private_network_configuration(
  vpc_endpoint_id: str = None
) -> None
```

###### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration.parameter.vpcEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#vpc_endpoint_id SesMailManagerIngressPoint#vpc_endpoint_id}.

---

##### `put_public_network_configuration` <a name="put_public_network_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration"></a>

```python
def put_public_network_configuration(
  ip_type: str = None
) -> None
```

###### `ip_type`<sup>Optional</sup> <a name="ip_type" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration.parameter.ipType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_mail_manager_ingress_point#ip_type SesMailManagerIngressPoint#ip_type}.

---

##### `reset_private_network_configuration` <a name="reset_private_network_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resetPrivateNetworkConfiguration"></a>

```python
def reset_private_network_configuration() -> None
```

##### `reset_public_network_configuration` <a name="reset_public_network_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resetPublicNetworkConfiguration"></a>

```python
def reset_public_network_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfiguration">private_network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfiguration">public_network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfigurationInput">private_network_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfigurationInput">public_network_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_network_configuration`<sup>Required</sup> <a name="private_network_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfiguration"></a>

```python
private_network_configuration: SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference</a>

---

##### `public_network_configuration`<sup>Required</sup> <a name="public_network_configuration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfiguration"></a>

```python
public_network_configuration: SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference</a>

---

##### `private_network_configuration_input`<sup>Optional</sup> <a name="private_network_configuration_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfigurationInput"></a>

```python
private_network_configuration_input: IResolvable | SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>

---

##### `public_network_configuration_input`<sup>Optional</sup> <a name="public_network_configuration_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfigurationInput"></a>

```python
public_network_configuration_input: IResolvable | SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesMailManagerIngressPointNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a>

---


### SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference <a name="SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resetVpcEndpointId">reset_vpc_endpoint_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vpc_endpoint_id` <a name="reset_vpc_endpoint_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resetVpcEndpointId"></a>

```python
def reset_vpc_endpoint_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointIdInput">vpc_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_endpoint_id_input`<sup>Optional</sup> <a name="vpc_endpoint_id_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointIdInput"></a>

```python
vpc_endpoint_id_input: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>

---


### SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference <a name="SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resetIpType">reset_ip_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_type` <a name="reset_ip_type" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resetIpType"></a>

```python
def reset_ip_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipTypeInput">ip_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipType">ip_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_type_input`<sup>Optional</sup> <a name="ip_type_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipTypeInput"></a>

```python
ip_type_input: str
```

- *Type:* str

---

##### `ip_type`<sup>Required</sup> <a name="ip_type" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipType"></a>

```python
ip_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>

---


### SesMailManagerIngressPointTagsList <a name="SesMailManagerIngressPointTagsList" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SesMailManagerIngressPointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SesMailManagerIngressPointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>]

---


### SesMailManagerIngressPointTagsOutputReference <a name="SesMailManagerIngressPointTagsOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_mail_manager_ingress_point

sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesMailManagerIngressPointTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>

---



