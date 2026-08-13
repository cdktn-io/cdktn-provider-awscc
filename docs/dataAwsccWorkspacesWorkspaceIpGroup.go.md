# `dataAwsccWorkspacesWorkspaceIpGroup` Submodule <a name="`dataAwsccWorkspacesWorkspaceIpGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspacesWorkspaceIpGroup <a name="DataAwsccWorkspacesWorkspaceIpGroup" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspaces_workspace_ip_group awscc_workspaces_workspace_ip_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesworkspaceipgroup"

dataawsccworkspacesworkspaceipgroup.NewDataAwsccWorkspacesWorkspaceIpGroup(scope Construct, id *string, config DataAwsccWorkspacesWorkspaceIpGroupConfig) DataAwsccWorkspacesWorkspaceIpGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig">DataAwsccWorkspacesWorkspaceIpGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig">DataAwsccWorkspacesWorkspaceIpGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWorkspacesWorkspaceIpGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesworkspaceipgroup"

dataawsccworkspacesworkspaceipgroup.DataAwsccWorkspacesWorkspaceIpGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesworkspaceipgroup"

dataawsccworkspacesworkspaceipgroup.DataAwsccWorkspacesWorkspaceIpGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesworkspaceipgroup"

dataawsccworkspacesworkspaceipgroup.DataAwsccWorkspacesWorkspaceIpGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesworkspaceipgroup"

dataawsccworkspacesworkspaceipgroup.DataAwsccWorkspacesWorkspaceIpGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccWorkspacesWorkspaceIpGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccWorkspacesWorkspaceIpGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccWorkspacesWorkspaceIpGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspaces_workspace_ip_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspacesWorkspaceIpGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupDesc">GroupDesc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList">DataAwsccWorkspacesWorkspaceIpGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.userRules">UserRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList">DataAwsccWorkspacesWorkspaceIpGroupUserRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `GroupDesc`<sup>Required</sup> <a name="GroupDesc" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupDesc"></a>

```go
func GroupDesc() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.tags"></a>

```go
func Tags() DataAwsccWorkspacesWorkspaceIpGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList">DataAwsccWorkspacesWorkspaceIpGroupTagsList</a>

---

##### `UserRules`<sup>Required</sup> <a name="UserRules" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.userRules"></a>

```go
func UserRules() DataAwsccWorkspacesWorkspaceIpGroupUserRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList">DataAwsccWorkspacesWorkspaceIpGroupUserRulesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspacesWorkspaceIpGroupConfig <a name="DataAwsccWorkspacesWorkspaceIpGroupConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesworkspaceipgroup"

&dataawsccworkspacesworkspaceipgroup.DataAwsccWorkspacesWorkspaceIpGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/workspaces_workspace_ip_group#id DataAwsccWorkspacesWorkspaceIpGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspacesWorkspaceIpGroupTags <a name="DataAwsccWorkspacesWorkspaceIpGroupTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesworkspaceipgroup"

&dataawsccworkspacesworkspaceipgroup.DataAwsccWorkspacesWorkspaceIpGroupTags {

}
```


### DataAwsccWorkspacesWorkspaceIpGroupUserRules <a name="DataAwsccWorkspacesWorkspaceIpGroupUserRules" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesworkspaceipgroup"

&dataawsccworkspacesworkspaceipgroup.DataAwsccWorkspacesWorkspaceIpGroupUserRules {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspacesWorkspaceIpGroupTagsList <a name="DataAwsccWorkspacesWorkspaceIpGroupTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesworkspaceipgroup"

dataawsccworkspacesworkspaceipgroup.NewDataAwsccWorkspacesWorkspaceIpGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWorkspacesWorkspaceIpGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.get"></a>

```go
func Get(index *f64) DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference <a name="DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesworkspaceipgroup"

dataawsccworkspacesworkspaceipgroup.NewDataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTags">DataAwsccWorkspacesWorkspaceIpGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesWorkspaceIpGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupTags">DataAwsccWorkspacesWorkspaceIpGroupTags</a>

---


### DataAwsccWorkspacesWorkspaceIpGroupUserRulesList <a name="DataAwsccWorkspacesWorkspaceIpGroupUserRulesList" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesworkspaceipgroup"

dataawsccworkspacesworkspaceipgroup.NewDataAwsccWorkspacesWorkspaceIpGroupUserRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWorkspacesWorkspaceIpGroupUserRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.get"></a>

```go
func Get(index *f64) DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference <a name="DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspacesworkspaceipgroup"

dataawsccworkspacesworkspaceipgroup.NewDataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ipRule">IpRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ruleDesc">RuleDesc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRules">DataAwsccWorkspacesWorkspaceIpGroupUserRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpRule`<sup>Required</sup> <a name="IpRule" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ipRule"></a>

```go
func IpRule() *string
```

- *Type:* *string

---

##### `RuleDesc`<sup>Required</sup> <a name="RuleDesc" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.ruleDesc"></a>

```go
func RuleDesc() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspacesWorkspaceIpGroupUserRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspaceIpGroup.DataAwsccWorkspacesWorkspaceIpGroupUserRules">DataAwsccWorkspacesWorkspaceIpGroupUserRules</a>

---



