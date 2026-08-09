# `dataAwsccCloudformationGuardHook` Submodule <a name="`dataAwsccCloudformationGuardHook` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudformationGuardHook <a name="DataAwsccCloudformationGuardHook" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudformation_guard_hook awscc_cloudformation_guard_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

dataawscccloudformationguardhook.NewDataAwsccCloudformationGuardHook(scope Construct, id *string, config DataAwsccCloudformationGuardHookConfig) DataAwsccCloudformationGuardHook
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig">DataAwsccCloudformationGuardHookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig">DataAwsccCloudformationGuardHookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudformationGuardHook resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

dataawscccloudformationguardhook.DataAwsccCloudformationGuardHook_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

dataawscccloudformationguardhook.DataAwsccCloudformationGuardHook_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

dataawscccloudformationguardhook.DataAwsccCloudformationGuardHook_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

dataawscccloudformationguardhook.DataAwsccCloudformationGuardHook_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCloudformationGuardHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCloudformationGuardHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCloudformationGuardHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudformation_guard_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudformationGuardHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.failureMode">FailureMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.hookArn">HookArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.hookStatus">HookStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.logBucket">LogBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference">DataAwsccCloudformationGuardHookOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.ruleLocation">RuleLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference">DataAwsccCloudformationGuardHookRuleLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.stackFilters">StackFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference">DataAwsccCloudformationGuardHookStackFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.targetFilters">TargetFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference">DataAwsccCloudformationGuardHookTargetFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.targetOperations">TargetOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `FailureMode`<sup>Required</sup> <a name="FailureMode" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.failureMode"></a>

```go
func FailureMode() *string
```

- *Type:* *string

---

##### `HookArn`<sup>Required</sup> <a name="HookArn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.hookArn"></a>

```go
func HookArn() *string
```

- *Type:* *string

---

##### `HookStatus`<sup>Required</sup> <a name="HookStatus" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.hookStatus"></a>

```go
func HookStatus() *string
```

- *Type:* *string

---

##### `LogBucket`<sup>Required</sup> <a name="LogBucket" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.logBucket"></a>

```go
func LogBucket() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.options"></a>

```go
func Options() DataAwsccCloudformationGuardHookOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference">DataAwsccCloudformationGuardHookOptionsOutputReference</a>

---

##### `RuleLocation`<sup>Required</sup> <a name="RuleLocation" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.ruleLocation"></a>

```go
func RuleLocation() DataAwsccCloudformationGuardHookRuleLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference">DataAwsccCloudformationGuardHookRuleLocationOutputReference</a>

---

##### `StackFilters`<sup>Required</sup> <a name="StackFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.stackFilters"></a>

```go
func StackFilters() DataAwsccCloudformationGuardHookStackFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference">DataAwsccCloudformationGuardHookStackFiltersOutputReference</a>

---

##### `TargetFilters`<sup>Required</sup> <a name="TargetFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.targetFilters"></a>

```go
func TargetFilters() DataAwsccCloudformationGuardHookTargetFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference">DataAwsccCloudformationGuardHookTargetFiltersOutputReference</a>

---

##### `TargetOperations`<sup>Required</sup> <a name="TargetOperations" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.targetOperations"></a>

```go
func TargetOperations() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudformationGuardHookConfig <a name="DataAwsccCloudformationGuardHookConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

&dataawscccloudformationguardhook.DataAwsccCloudformationGuardHookConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudformation_guard_hook#id DataAwsccCloudformationGuardHook#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudformationGuardHookOptions <a name="DataAwsccCloudformationGuardHookOptions" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

&dataawscccloudformationguardhook.DataAwsccCloudformationGuardHookOptions {

}
```


### DataAwsccCloudformationGuardHookRuleLocation <a name="DataAwsccCloudformationGuardHookRuleLocation" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

&dataawscccloudformationguardhook.DataAwsccCloudformationGuardHookRuleLocation {

}
```


### DataAwsccCloudformationGuardHookStackFilters <a name="DataAwsccCloudformationGuardHookStackFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

&dataawscccloudformationguardhook.DataAwsccCloudformationGuardHookStackFilters {

}
```


### DataAwsccCloudformationGuardHookStackFiltersStackNames <a name="DataAwsccCloudformationGuardHookStackFiltersStackNames" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNames.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

&dataawscccloudformationguardhook.DataAwsccCloudformationGuardHookStackFiltersStackNames {

}
```


### DataAwsccCloudformationGuardHookStackFiltersStackRoles <a name="DataAwsccCloudformationGuardHookStackFiltersStackRoles" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRoles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

&dataawscccloudformationguardhook.DataAwsccCloudformationGuardHookStackFiltersStackRoles {

}
```


### DataAwsccCloudformationGuardHookTargetFilters <a name="DataAwsccCloudformationGuardHookTargetFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

&dataawscccloudformationguardhook.DataAwsccCloudformationGuardHookTargetFilters {

}
```


### DataAwsccCloudformationGuardHookTargetFiltersTargets <a name="DataAwsccCloudformationGuardHookTargetFiltersTargets" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

&dataawscccloudformationguardhook.DataAwsccCloudformationGuardHookTargetFiltersTargets {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudformationGuardHookOptionsOutputReference <a name="DataAwsccCloudformationGuardHookOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

dataawscccloudformationguardhook.NewDataAwsccCloudformationGuardHookOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudformationGuardHookOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.inputParams">InputParams</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptions">DataAwsccCloudformationGuardHookOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputParams`<sup>Required</sup> <a name="InputParams" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.inputParams"></a>

```go
func InputParams() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudformationGuardHookOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptions">DataAwsccCloudformationGuardHookOptions</a>

---


### DataAwsccCloudformationGuardHookRuleLocationOutputReference <a name="DataAwsccCloudformationGuardHookRuleLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

dataawscccloudformationguardhook.NewDataAwsccCloudformationGuardHookRuleLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudformationGuardHookRuleLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocation">DataAwsccCloudformationGuardHookRuleLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudformationGuardHookRuleLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocation">DataAwsccCloudformationGuardHookRuleLocation</a>

---


### DataAwsccCloudformationGuardHookStackFiltersOutputReference <a name="DataAwsccCloudformationGuardHookStackFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

dataawscccloudformationguardhook.NewDataAwsccCloudformationGuardHookStackFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudformationGuardHookStackFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.filteringCriteria">FilteringCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.stackNames">StackNames</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference">DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.stackRoles">StackRoles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference">DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFilters">DataAwsccCloudformationGuardHookStackFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilteringCriteria`<sup>Required</sup> <a name="FilteringCriteria" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.filteringCriteria"></a>

```go
func FilteringCriteria() *string
```

- *Type:* *string

---

##### `StackNames`<sup>Required</sup> <a name="StackNames" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.stackNames"></a>

```go
func StackNames() DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference">DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference</a>

---

##### `StackRoles`<sup>Required</sup> <a name="StackRoles" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.stackRoles"></a>

```go
func StackRoles() DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference">DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudformationGuardHookStackFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFilters">DataAwsccCloudformationGuardHookStackFilters</a>

---


### DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference <a name="DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

dataawscccloudformationguardhook.NewDataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.exclude">Exclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNames">DataAwsccCloudformationGuardHookStackFiltersStackNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.exclude"></a>

```go
func Exclude() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudformationGuardHookStackFiltersStackNames
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNames">DataAwsccCloudformationGuardHookStackFiltersStackNames</a>

---


### DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference <a name="DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

dataawscccloudformationguardhook.NewDataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.exclude">Exclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRoles">DataAwsccCloudformationGuardHookStackFiltersStackRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.exclude"></a>

```go
func Exclude() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudformationGuardHookStackFiltersStackRoles
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRoles">DataAwsccCloudformationGuardHookStackFiltersStackRoles</a>

---


### DataAwsccCloudformationGuardHookTargetFiltersOutputReference <a name="DataAwsccCloudformationGuardHookTargetFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

dataawscccloudformationguardhook.NewDataAwsccCloudformationGuardHookTargetFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudformationGuardHookTargetFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.invocationPoints">InvocationPoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.targetNames">TargetNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList">DataAwsccCloudformationGuardHookTargetFiltersTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFilters">DataAwsccCloudformationGuardHookTargetFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `InvocationPoints`<sup>Required</sup> <a name="InvocationPoints" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.invocationPoints"></a>

```go
func InvocationPoints() *[]*string
```

- *Type:* *[]*string

---

##### `TargetNames`<sup>Required</sup> <a name="TargetNames" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.targetNames"></a>

```go
func TargetNames() *[]*string
```

- *Type:* *[]*string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.targets"></a>

```go
func Targets() DataAwsccCloudformationGuardHookTargetFiltersTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList">DataAwsccCloudformationGuardHookTargetFiltersTargetsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudformationGuardHookTargetFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFilters">DataAwsccCloudformationGuardHookTargetFilters</a>

---


### DataAwsccCloudformationGuardHookTargetFiltersTargetsList <a name="DataAwsccCloudformationGuardHookTargetFiltersTargetsList" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

dataawscccloudformationguardhook.NewDataAwsccCloudformationGuardHookTargetFiltersTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudformationGuardHookTargetFiltersTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference <a name="DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudformationguardhook"

dataawscccloudformationguardhook.NewDataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPoint">InvocationPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetName">TargetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargets">DataAwsccCloudformationGuardHookTargetFiltersTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InvocationPoint`<sup>Required</sup> <a name="InvocationPoint" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPoint"></a>

```go
func InvocationPoint() *string
```

- *Type:* *string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetName"></a>

```go
func TargetName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudformationGuardHookTargetFiltersTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargets">DataAwsccCloudformationGuardHookTargetFiltersTargets</a>

---



