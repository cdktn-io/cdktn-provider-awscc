# `dataAwsccLookoutmetricsAlert` Submodule <a name="`dataAwsccLookoutmetricsAlert` Submodule" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLookoutmetricsAlert <a name="DataAwsccLookoutmetricsAlert" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lookoutmetrics_alert awscc_lookoutmetrics_alert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclookoutmetricsalert"

dataawscclookoutmetricsalert.NewDataAwsccLookoutmetricsAlert(scope Construct, id *string, config DataAwsccLookoutmetricsAlertConfig) DataAwsccLookoutmetricsAlert
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig">DataAwsccLookoutmetricsAlertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig">DataAwsccLookoutmetricsAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLookoutmetricsAlert resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclookoutmetricsalert"

dataawscclookoutmetricsalert.DataAwsccLookoutmetricsAlert_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclookoutmetricsalert"

dataawscclookoutmetricsalert.DataAwsccLookoutmetricsAlert_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclookoutmetricsalert"

dataawscclookoutmetricsalert.DataAwsccLookoutmetricsAlert_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclookoutmetricsalert"

dataawscclookoutmetricsalert.DataAwsccLookoutmetricsAlert_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLookoutmetricsAlert resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLookoutmetricsAlert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLookoutmetricsAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lookoutmetrics_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLookoutmetricsAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference">DataAwsccLookoutmetricsAlertActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.alertDescription">AlertDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.alertName">AlertName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.alertSensitivityThreshold">AlertSensitivityThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.anomalyDetectorArn">AnomalyDetectorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.action"></a>

```go
func Action() DataAwsccLookoutmetricsAlertActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference">DataAwsccLookoutmetricsAlertActionOutputReference</a>

---

##### `AlertDescription`<sup>Required</sup> <a name="AlertDescription" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.alertDescription"></a>

```go
func AlertDescription() *string
```

- *Type:* *string

---

##### `AlertName`<sup>Required</sup> <a name="AlertName" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.alertName"></a>

```go
func AlertName() *string
```

- *Type:* *string

---

##### `AlertSensitivityThreshold`<sup>Required</sup> <a name="AlertSensitivityThreshold" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.alertSensitivityThreshold"></a>

```go
func AlertSensitivityThreshold() *f64
```

- *Type:* *f64

---

##### `AnomalyDetectorArn`<sup>Required</sup> <a name="AnomalyDetectorArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.anomalyDetectorArn"></a>

```go
func AnomalyDetectorArn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlert.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLookoutmetricsAlertAction <a name="DataAwsccLookoutmetricsAlertAction" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclookoutmetricsalert"

&dataawscclookoutmetricsalert.DataAwsccLookoutmetricsAlertAction {

}
```


### DataAwsccLookoutmetricsAlertActionLambdaConfiguration <a name="DataAwsccLookoutmetricsAlertActionLambdaConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclookoutmetricsalert"

&dataawscclookoutmetricsalert.DataAwsccLookoutmetricsAlertActionLambdaConfiguration {

}
```


### DataAwsccLookoutmetricsAlertActionSnsConfiguration <a name="DataAwsccLookoutmetricsAlertActionSnsConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclookoutmetricsalert"

&dataawscclookoutmetricsalert.DataAwsccLookoutmetricsAlertActionSnsConfiguration {

}
```


### DataAwsccLookoutmetricsAlertConfig <a name="DataAwsccLookoutmetricsAlertConfig" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclookoutmetricsalert"

&dataawscclookoutmetricsalert.DataAwsccLookoutmetricsAlertConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lookoutmetrics_alert#id DataAwsccLookoutmetricsAlert#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference <a name="DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclookoutmetricsalert"

dataawscclookoutmetricsalert.NewDataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfiguration">DataAwsccLookoutmetricsAlertActionLambdaConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLookoutmetricsAlertActionLambdaConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfiguration">DataAwsccLookoutmetricsAlertActionLambdaConfiguration</a>

---


### DataAwsccLookoutmetricsAlertActionOutputReference <a name="DataAwsccLookoutmetricsAlertActionOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclookoutmetricsalert"

dataawscclookoutmetricsalert.NewDataAwsccLookoutmetricsAlertActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLookoutmetricsAlertActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.lambdaConfiguration">LambdaConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference">DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.snsConfiguration">SnsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference">DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertAction">DataAwsccLookoutmetricsAlertAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaConfiguration`<sup>Required</sup> <a name="LambdaConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.lambdaConfiguration"></a>

```go
func LambdaConfiguration() DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference">DataAwsccLookoutmetricsAlertActionLambdaConfigurationOutputReference</a>

---

##### `SnsConfiguration`<sup>Required</sup> <a name="SnsConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.snsConfiguration"></a>

```go
func SnsConfiguration() DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference">DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLookoutmetricsAlertAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertAction">DataAwsccLookoutmetricsAlertAction</a>

---


### DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference <a name="DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclookoutmetricsalert"

dataawscclookoutmetricsalert.NewDataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfiguration">DataAwsccLookoutmetricsAlertActionSnsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.snsTopicArn"></a>

```go
func SnsTopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLookoutmetricsAlertActionSnsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutmetricsAlert.DataAwsccLookoutmetricsAlertActionSnsConfiguration">DataAwsccLookoutmetricsAlertActionSnsConfiguration</a>

---



