# `dataAwsccS3ObjectlambdaAccessPoint` Submodule <a name="`dataAwsccS3ObjectlambdaAccessPoint` Submodule" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3ObjectlambdaAccessPoint <a name="DataAwsccS3ObjectlambdaAccessPoint" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3objectlambda_access_point awscc_s3objectlambda_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

dataawsccs3objectlambdaaccesspoint.NewDataAwsccS3ObjectlambdaAccessPoint(scope Construct, id *string, config DataAwsccS3ObjectlambdaAccessPointConfig) DataAwsccS3ObjectlambdaAccessPoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig">DataAwsccS3ObjectlambdaAccessPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig">DataAwsccS3ObjectlambdaAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3ObjectlambdaAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

dataawsccs3objectlambdaaccesspoint.DataAwsccS3ObjectlambdaAccessPoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

dataawsccs3objectlambdaaccesspoint.DataAwsccS3ObjectlambdaAccessPoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

dataawsccs3objectlambdaaccesspoint.DataAwsccS3ObjectlambdaAccessPoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

dataawsccs3objectlambdaaccesspoint.DataAwsccS3ObjectlambdaAccessPoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccS3ObjectlambdaAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccS3ObjectlambdaAccessPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccS3ObjectlambdaAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3objectlambda_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3ObjectlambdaAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.alias">Alias</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference">DataAwsccS3ObjectlambdaAccessPointAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.objectLambdaConfiguration">ObjectLambdaConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference">DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.policyStatus">PolicyStatus</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference">DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.publicAccessBlockConfiguration">PublicAccessBlockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference">DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.alias"></a>

```go
func Alias() DataAwsccS3ObjectlambdaAccessPointAliasOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference">DataAwsccS3ObjectlambdaAccessPointAliasOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectLambdaConfiguration`<sup>Required</sup> <a name="ObjectLambdaConfiguration" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.objectLambdaConfiguration"></a>

```go
func ObjectLambdaConfiguration() DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference">DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference</a>

---

##### `PolicyStatus`<sup>Required</sup> <a name="PolicyStatus" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.policyStatus"></a>

```go
func PolicyStatus() DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference">DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference</a>

---

##### `PublicAccessBlockConfiguration`<sup>Required</sup> <a name="PublicAccessBlockConfiguration" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.publicAccessBlockConfiguration"></a>

```go
func PublicAccessBlockConfiguration() DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference">DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3ObjectlambdaAccessPointAlias <a name="DataAwsccS3ObjectlambdaAccessPointAlias" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAlias"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAlias.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

&dataawsccs3objectlambdaaccesspoint.DataAwsccS3ObjectlambdaAccessPointAlias {

}
```


### DataAwsccS3ObjectlambdaAccessPointConfig <a name="DataAwsccS3ObjectlambdaAccessPointConfig" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

&dataawsccs3objectlambdaaccesspoint.DataAwsccS3ObjectlambdaAccessPointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3objectlambda_access_point#id DataAwsccS3ObjectlambdaAccessPoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration <a name="DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

&dataawsccs3objectlambdaaccesspoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration {

}
```


### DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations <a name="DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

&dataawsccs3objectlambdaaccesspoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations {

}
```


### DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation <a name="DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

&dataawsccs3objectlambdaaccesspoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation {

}
```


### DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda <a name="DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

&dataawsccs3objectlambdaaccesspoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda {

}
```


### DataAwsccS3ObjectlambdaAccessPointPolicyStatus <a name="DataAwsccS3ObjectlambdaAccessPointPolicyStatus" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

&dataawsccs3objectlambdaaccesspoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatus {

}
```


### DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration <a name="DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

&dataawsccs3objectlambdaaccesspoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3ObjectlambdaAccessPointAliasOutputReference <a name="DataAwsccS3ObjectlambdaAccessPointAliasOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

dataawsccs3objectlambdaaccesspoint.NewDataAwsccS3ObjectlambdaAccessPointAliasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3ObjectlambdaAccessPointAliasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAlias">DataAwsccS3ObjectlambdaAccessPointAlias</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAliasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3ObjectlambdaAccessPointAlias
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointAlias">DataAwsccS3ObjectlambdaAccessPointAlias</a>

---


### DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference <a name="DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

dataawsccs3objectlambdaaccesspoint.NewDataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.allowedFeatures">AllowedFeatures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.cloudwatchMetricsEnabled">CloudwatchMetricsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.supportingAccessPoint">SupportingAccessPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.transformationConfigurations">TransformationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList">DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration">DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedFeatures`<sup>Required</sup> <a name="AllowedFeatures" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.allowedFeatures"></a>

```go
func AllowedFeatures() *[]*string
```

- *Type:* *[]*string

---

##### `CloudwatchMetricsEnabled`<sup>Required</sup> <a name="CloudwatchMetricsEnabled" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.cloudwatchMetricsEnabled"></a>

```go
func CloudwatchMetricsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SupportingAccessPoint`<sup>Required</sup> <a name="SupportingAccessPoint" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.supportingAccessPoint"></a>

```go
func SupportingAccessPoint() *string
```

- *Type:* *string

---

##### `TransformationConfigurations`<sup>Required</sup> <a name="TransformationConfigurations" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.transformationConfigurations"></a>

```go
func TransformationConfigurations() DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList">DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration">DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfiguration</a>

---


### DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference <a name="DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

dataawsccs3objectlambdaaccesspoint.NewDataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionArn">FunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionPayload">FunctionPayload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionArn"></a>

```go
func FunctionArn() *string
```

- *Type:* *string

---

##### `FunctionPayload`<sup>Required</sup> <a name="FunctionPayload" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionPayload"></a>

```go
func FunctionPayload() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a>

---


### DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference <a name="DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

dataawsccs3objectlambdaaccesspoint.NewDataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.awsLambda">AwsLambda</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference">DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsLambda`<sup>Required</sup> <a name="AwsLambda" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.awsLambda"></a>

```go
func AwsLambda() DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference">DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a>

---


### DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList <a name="DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

dataawsccs3objectlambdaaccesspoint.NewDataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference <a name="DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

dataawsccs3objectlambdaaccesspoint.NewDataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.contentTransformation">ContentTransformation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference">DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `ContentTransformation`<sup>Required</sup> <a name="ContentTransformation" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.contentTransformation"></a>

```go
func ContentTransformation() DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference">DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">DataAwsccS3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>

---


### DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference <a name="DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

dataawsccs3objectlambdaaccesspoint.NewDataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.property.isPublic">IsPublic</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatus">DataAwsccS3ObjectlambdaAccessPointPolicyStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.property.isPublic"></a>

```go
func IsPublic() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3ObjectlambdaAccessPointPolicyStatus
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPolicyStatus">DataAwsccS3ObjectlambdaAccessPointPolicyStatus</a>

---


### DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference <a name="DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3objectlambdaaccesspoint"

dataawsccs3objectlambdaaccesspoint.NewDataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration">DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockPublicAcls`<sup>Required</sup> <a name="BlockPublicAcls" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls"></a>

```go
func BlockPublicAcls() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `BlockPublicPolicy`<sup>Required</sup> <a name="BlockPublicPolicy" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy"></a>

```go
func BlockPublicPolicy() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IgnorePublicAcls`<sup>Required</sup> <a name="IgnorePublicAcls" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls"></a>

```go
func IgnorePublicAcls() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RestrictPublicBuckets`<sup>Required</sup> <a name="RestrictPublicBuckets" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets"></a>

```go
func RestrictPublicBuckets() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3ObjectlambdaAccessPoint.DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration">DataAwsccS3ObjectlambdaAccessPointPublicAccessBlockConfiguration</a>

---



