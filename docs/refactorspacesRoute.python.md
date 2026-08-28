# `refactorspacesRoute` Submodule <a name="`refactorspacesRoute` Submodule" id="@cdktn/provider-awscc.refactorspacesRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RefactorspacesRoute <a name="RefactorspacesRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route awscc_refactorspaces_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_route

refactorspacesRoute.RefactorspacesRoute(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_identifier: str,
  environment_identifier: str,
  route_type: str,
  service_identifier: str,
  default_route: RefactorspacesRouteDefaultRoute = None,
  tags: IResolvable | typing.List[RefactorspacesRouteTags] = None,
  uri_path_route: RefactorspacesRouteUriPathRoute = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.applicationIdentifier">application_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#application_identifier RefactorspacesRoute#application_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#environment_identifier RefactorspacesRoute#environment_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.routeType">route_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#route_type RefactorspacesRoute#route_type}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.serviceIdentifier">service_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#service_identifier RefactorspacesRoute#service_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.defaultRoute">default_route</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#default_route RefactorspacesRoute#default_route}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>]</code> | Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.uriPathRoute">uri_path_route</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#uri_path_route RefactorspacesRoute#uri_path_route}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.applicationIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#application_identifier RefactorspacesRoute#application_identifier}.

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.environmentIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#environment_identifier RefactorspacesRoute#environment_identifier}.

---

##### `route_type`<sup>Required</sup> <a name="route_type" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.routeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#route_type RefactorspacesRoute#route_type}.

---

##### `service_identifier`<sup>Required</sup> <a name="service_identifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.serviceIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#service_identifier RefactorspacesRoute#service_identifier}.

---

##### `default_route`<sup>Optional</sup> <a name="default_route" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.defaultRoute"></a>

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#default_route RefactorspacesRoute#default_route}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>]

Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#tags RefactorspacesRoute#tags}

---

##### `uri_path_route`<sup>Optional</sup> <a name="uri_path_route" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.uriPathRoute"></a>

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#uri_path_route RefactorspacesRoute#uri_path_route}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putDefaultRoute">put_default_route</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putUriPathRoute">put_uri_path_route</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetDefaultRoute">reset_default_route</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetUriPathRoute">reset_uri_path_route</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_default_route` <a name="put_default_route" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putDefaultRoute"></a>

```python
def put_default_route(
  activation_state: str = None
) -> None
```

###### `activation_state`<sup>Optional</sup> <a name="activation_state" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putDefaultRoute.parameter.activationState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#activation_state RefactorspacesRoute#activation_state}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RefactorspacesRouteTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>]

---

##### `put_uri_path_route` <a name="put_uri_path_route" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putUriPathRoute"></a>

```python
def put_uri_path_route(
  activation_state: str = None,
  append_source_path: bool | IResolvable = None,
  include_child_paths: bool | IResolvable = None,
  methods: typing.List[str] = None,
  source_path: str = None
) -> None
```

###### `activation_state`<sup>Optional</sup> <a name="activation_state" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putUriPathRoute.parameter.activationState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#activation_state RefactorspacesRoute#activation_state}.

---

###### `append_source_path`<sup>Optional</sup> <a name="append_source_path" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putUriPathRoute.parameter.appendSourcePath"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#append_source_path RefactorspacesRoute#append_source_path}.

---

###### `include_child_paths`<sup>Optional</sup> <a name="include_child_paths" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putUriPathRoute.parameter.includeChildPaths"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#include_child_paths RefactorspacesRoute#include_child_paths}.

---

###### `methods`<sup>Optional</sup> <a name="methods" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putUriPathRoute.parameter.methods"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#methods RefactorspacesRoute#methods}.

---

###### `source_path`<sup>Optional</sup> <a name="source_path" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putUriPathRoute.parameter.sourcePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#source_path RefactorspacesRoute#source_path}.

---

##### `reset_default_route` <a name="reset_default_route" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetDefaultRoute"></a>

```python
def reset_default_route() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_uri_path_route` <a name="reset_uri_path_route" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetUriPathRoute"></a>

```python
def reset_uri_path_route() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RefactorspacesRoute resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isConstruct"></a>

```python
from cdktn_provider_awscc import refactorspaces_route

refactorspacesRoute.RefactorspacesRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformElement"></a>

```python
from cdktn_provider_awscc import refactorspaces_route

refactorspacesRoute.RefactorspacesRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformResource"></a>

```python
from cdktn_provider_awscc import refactorspaces_route

refactorspacesRoute.RefactorspacesRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import refactorspaces_route

refactorspacesRoute.RefactorspacesRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RefactorspacesRoute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RefactorspacesRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RefactorspacesRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RefactorspacesRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.defaultRoute">default_route</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference">RefactorspacesRouteDefaultRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.pathResourceToId">path_resource_to_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeIdentifier">route_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList">RefactorspacesRouteTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.uriPathRoute">uri_path_route</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference">RefactorspacesRouteUriPathRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.applicationIdentifierInput">application_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.defaultRouteInput">default_route_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.environmentIdentifierInput">environment_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeTypeInput">route_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.serviceIdentifierInput">service_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.uriPathRouteInput">uri_path_route_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.applicationIdentifier">application_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeType">route_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.serviceIdentifier">service_identifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `default_route`<sup>Required</sup> <a name="default_route" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.defaultRoute"></a>

```python
default_route: RefactorspacesRouteDefaultRouteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference">RefactorspacesRouteDefaultRouteOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `path_resource_to_id`<sup>Required</sup> <a name="path_resource_to_id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.pathResourceToId"></a>

```python
path_resource_to_id: str
```

- *Type:* str

---

##### `route_identifier`<sup>Required</sup> <a name="route_identifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeIdentifier"></a>

```python
route_identifier: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tags"></a>

```python
tags: RefactorspacesRouteTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList">RefactorspacesRouteTagsList</a>

---

##### `uri_path_route`<sup>Required</sup> <a name="uri_path_route" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.uriPathRoute"></a>

```python
uri_path_route: RefactorspacesRouteUriPathRouteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference">RefactorspacesRouteUriPathRouteOutputReference</a>

---

##### `application_identifier_input`<sup>Optional</sup> <a name="application_identifier_input" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.applicationIdentifierInput"></a>

```python
application_identifier_input: str
```

- *Type:* str

---

##### `default_route_input`<sup>Optional</sup> <a name="default_route_input" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.defaultRouteInput"></a>

```python
default_route_input: IResolvable | RefactorspacesRouteDefaultRoute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a>

---

##### `environment_identifier_input`<sup>Optional</sup> <a name="environment_identifier_input" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.environmentIdentifierInput"></a>

```python
environment_identifier_input: str
```

- *Type:* str

---

##### `route_type_input`<sup>Optional</sup> <a name="route_type_input" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeTypeInput"></a>

```python
route_type_input: str
```

- *Type:* str

---

##### `service_identifier_input`<sup>Optional</sup> <a name="service_identifier_input" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.serviceIdentifierInput"></a>

```python
service_identifier_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RefactorspacesRouteTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>]

---

##### `uri_path_route_input`<sup>Optional</sup> <a name="uri_path_route_input" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.uriPathRouteInput"></a>

```python
uri_path_route_input: IResolvable | RefactorspacesRouteUriPathRoute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a>

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.applicationIdentifier"></a>

```python
application_identifier: str
```

- *Type:* str

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

---

##### `route_type`<sup>Required</sup> <a name="route_type" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeType"></a>

```python
route_type: str
```

- *Type:* str

---

##### `service_identifier`<sup>Required</sup> <a name="service_identifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.serviceIdentifier"></a>

```python
service_identifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RefactorspacesRouteConfig <a name="RefactorspacesRouteConfig" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_route

refactorspacesRoute.RefactorspacesRouteConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_identifier: str,
  environment_identifier: str,
  route_type: str,
  service_identifier: str,
  default_route: RefactorspacesRouteDefaultRoute = None,
  tags: IResolvable | typing.List[RefactorspacesRouteTags] = None,
  uri_path_route: RefactorspacesRouteUriPathRoute = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.applicationIdentifier">application_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#application_identifier RefactorspacesRoute#application_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#environment_identifier RefactorspacesRoute#environment_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.routeType">route_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#route_type RefactorspacesRoute#route_type}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.serviceIdentifier">service_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#service_identifier RefactorspacesRoute#service_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.defaultRoute">default_route</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#default_route RefactorspacesRoute#default_route}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>]</code> | Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.uriPathRoute">uri_path_route</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#uri_path_route RefactorspacesRoute#uri_path_route}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.applicationIdentifier"></a>

```python
application_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#application_identifier RefactorspacesRoute#application_identifier}.

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#environment_identifier RefactorspacesRoute#environment_identifier}.

---

##### `route_type`<sup>Required</sup> <a name="route_type" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.routeType"></a>

```python
route_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#route_type RefactorspacesRoute#route_type}.

---

##### `service_identifier`<sup>Required</sup> <a name="service_identifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.serviceIdentifier"></a>

```python
service_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#service_identifier RefactorspacesRoute#service_identifier}.

---

##### `default_route`<sup>Optional</sup> <a name="default_route" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.defaultRoute"></a>

```python
default_route: RefactorspacesRouteDefaultRoute
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#default_route RefactorspacesRoute#default_route}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RefactorspacesRouteTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>]

Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#tags RefactorspacesRoute#tags}

---

##### `uri_path_route`<sup>Optional</sup> <a name="uri_path_route" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.uriPathRoute"></a>

```python
uri_path_route: RefactorspacesRouteUriPathRoute
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#uri_path_route RefactorspacesRoute#uri_path_route}.

---

### RefactorspacesRouteDefaultRoute <a name="RefactorspacesRouteDefaultRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_route

refactorspacesRoute.RefactorspacesRouteDefaultRoute(
  activation_state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute.property.activationState">activation_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#activation_state RefactorspacesRoute#activation_state}. |

---

##### `activation_state`<sup>Optional</sup> <a name="activation_state" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute.property.activationState"></a>

```python
activation_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#activation_state RefactorspacesRoute#activation_state}.

---

### RefactorspacesRouteTags <a name="RefactorspacesRouteTags" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_route

refactorspacesRoute.RefactorspacesRouteTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags.property.key">key</a></code> | <code>str</code> | A string used to identify this tag. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags.property.value">value</a></code> | <code>str</code> | A string containing the value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags.property.key"></a>

```python
key: str
```

- *Type:* str

A string used to identify this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#key RefactorspacesRoute#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags.property.value"></a>

```python
value: str
```

- *Type:* str

A string containing the value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#value RefactorspacesRoute#value}

---

### RefactorspacesRouteUriPathRoute <a name="RefactorspacesRouteUriPathRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_route

refactorspacesRoute.RefactorspacesRouteUriPathRoute(
  activation_state: str = None,
  append_source_path: bool | IResolvable = None,
  include_child_paths: bool | IResolvable = None,
  methods: typing.List[str] = None,
  source_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.activationState">activation_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#activation_state RefactorspacesRoute#activation_state}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.appendSourcePath">append_source_path</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#append_source_path RefactorspacesRoute#append_source_path}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.includeChildPaths">include_child_paths</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#include_child_paths RefactorspacesRoute#include_child_paths}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.methods">methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#methods RefactorspacesRoute#methods}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.sourcePath">source_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#source_path RefactorspacesRoute#source_path}. |

---

##### `activation_state`<sup>Optional</sup> <a name="activation_state" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.activationState"></a>

```python
activation_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#activation_state RefactorspacesRoute#activation_state}.

---

##### `append_source_path`<sup>Optional</sup> <a name="append_source_path" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.appendSourcePath"></a>

```python
append_source_path: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#append_source_path RefactorspacesRoute#append_source_path}.

---

##### `include_child_paths`<sup>Optional</sup> <a name="include_child_paths" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.includeChildPaths"></a>

```python
include_child_paths: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#include_child_paths RefactorspacesRoute#include_child_paths}.

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#methods RefactorspacesRoute#methods}.

---

##### `source_path`<sup>Optional</sup> <a name="source_path" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.sourcePath"></a>

```python
source_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/refactorspaces_route#source_path RefactorspacesRoute#source_path}.

---

## Classes <a name="Classes" id="Classes"></a>

### RefactorspacesRouteDefaultRouteOutputReference <a name="RefactorspacesRouteDefaultRouteOutputReference" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_route

refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.resetActivationState">reset_activation_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_activation_state` <a name="reset_activation_state" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.resetActivationState"></a>

```python
def reset_activation_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.activationStateInput">activation_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.activationState">activation_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `activation_state_input`<sup>Optional</sup> <a name="activation_state_input" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.activationStateInput"></a>

```python
activation_state_input: str
```

- *Type:* str

---

##### `activation_state`<sup>Required</sup> <a name="activation_state" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.activationState"></a>

```python
activation_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RefactorspacesRouteDefaultRoute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a>

---


### RefactorspacesRouteTagsList <a name="RefactorspacesRouteTagsList" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_route

refactorspacesRoute.RefactorspacesRouteTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RefactorspacesRouteTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RefactorspacesRouteTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>]

---


### RefactorspacesRouteTagsOutputReference <a name="RefactorspacesRouteTagsOutputReference" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_route

refactorspacesRoute.RefactorspacesRouteTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RefactorspacesRouteTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>

---


### RefactorspacesRouteUriPathRouteOutputReference <a name="RefactorspacesRouteUriPathRouteOutputReference" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import refactorspaces_route

refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetActivationState">reset_activation_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetAppendSourcePath">reset_append_source_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetIncludeChildPaths">reset_include_child_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetMethods">reset_methods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetSourcePath">reset_source_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_activation_state` <a name="reset_activation_state" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetActivationState"></a>

```python
def reset_activation_state() -> None
```

##### `reset_append_source_path` <a name="reset_append_source_path" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetAppendSourcePath"></a>

```python
def reset_append_source_path() -> None
```

##### `reset_include_child_paths` <a name="reset_include_child_paths" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetIncludeChildPaths"></a>

```python
def reset_include_child_paths() -> None
```

##### `reset_methods` <a name="reset_methods" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetMethods"></a>

```python
def reset_methods() -> None
```

##### `reset_source_path` <a name="reset_source_path" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetSourcePath"></a>

```python
def reset_source_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.activationStateInput">activation_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.appendSourcePathInput">append_source_path_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.includeChildPathsInput">include_child_paths_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.methodsInput">methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.sourcePathInput">source_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.activationState">activation_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.appendSourcePath">append_source_path</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.includeChildPaths">include_child_paths</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.methods">methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.sourcePath">source_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `activation_state_input`<sup>Optional</sup> <a name="activation_state_input" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.activationStateInput"></a>

```python
activation_state_input: str
```

- *Type:* str

---

##### `append_source_path_input`<sup>Optional</sup> <a name="append_source_path_input" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.appendSourcePathInput"></a>

```python
append_source_path_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_child_paths_input`<sup>Optional</sup> <a name="include_child_paths_input" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.includeChildPathsInput"></a>

```python
include_child_paths_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `methods_input`<sup>Optional</sup> <a name="methods_input" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.methodsInput"></a>

```python
methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_path_input`<sup>Optional</sup> <a name="source_path_input" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.sourcePathInput"></a>

```python
source_path_input: str
```

- *Type:* str

---

##### `activation_state`<sup>Required</sup> <a name="activation_state" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.activationState"></a>

```python
activation_state: str
```

- *Type:* str

---

##### `append_source_path`<sup>Required</sup> <a name="append_source_path" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.appendSourcePath"></a>

```python
append_source_path: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_child_paths`<sup>Required</sup> <a name="include_child_paths" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.includeChildPaths"></a>

```python
include_child_paths: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_path`<sup>Required</sup> <a name="source_path" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.sourcePath"></a>

```python
source_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RefactorspacesRouteUriPathRoute
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a>

---



