# `dataAwsccCloudfrontOriginRequestPolicy` Submodule <a name="`dataAwsccCloudfrontOriginRequestPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontOriginRequestPolicy <a name="DataAwsccCloudfrontOriginRequestPolicy" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/cloudfront_origin_request_policy awscc_cloudfront_origin_request_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontoriginrequestpolicy"

dataawscccloudfrontoriginrequestpolicy.NewDataAwsccCloudfrontOriginRequestPolicy(scope Construct, id *string, config DataAwsccCloudfrontOriginRequestPolicyConfig) DataAwsccCloudfrontOriginRequestPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig">DataAwsccCloudfrontOriginRequestPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig">DataAwsccCloudfrontOriginRequestPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontOriginRequestPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontoriginrequestpolicy"

dataawscccloudfrontoriginrequestpolicy.DataAwsccCloudfrontOriginRequestPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontoriginrequestpolicy"

dataawscccloudfrontoriginrequestpolicy.DataAwsccCloudfrontOriginRequestPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontoriginrequestpolicy"

dataawscccloudfrontoriginrequestpolicy.DataAwsccCloudfrontOriginRequestPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontoriginrequestpolicy"

dataawscccloudfrontoriginrequestpolicy.DataAwsccCloudfrontOriginRequestPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCloudfrontOriginRequestPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCloudfrontOriginRequestPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCloudfrontOriginRequestPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/cloudfront_origin_request_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontOriginRequestPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.originRequestPolicyConfig">OriginRequestPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.originRequestPolicyId">OriginRequestPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `OriginRequestPolicyConfig`<sup>Required</sup> <a name="OriginRequestPolicyConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.originRequestPolicyConfig"></a>

```go
func OriginRequestPolicyConfig() DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference</a>

---

##### `OriginRequestPolicyId`<sup>Required</sup> <a name="OriginRequestPolicyId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.originRequestPolicyId"></a>

```go
func OriginRequestPolicyId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontOriginRequestPolicyConfig <a name="DataAwsccCloudfrontOriginRequestPolicyConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontoriginrequestpolicy"

&dataawscccloudfrontoriginrequestpolicy.DataAwsccCloudfrontOriginRequestPolicyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/cloudfront_origin_request_policy#id DataAwsccCloudfrontOriginRequestPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontoriginrequestpolicy"

&dataawscccloudfrontoriginrequestpolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig {

}
```


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontoriginrequestpolicy"

&dataawscccloudfrontoriginrequestpolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig {

}
```


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontoriginrequestpolicy"

&dataawscccloudfrontoriginrequestpolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig {

}
```


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontoriginrequestpolicy"

&dataawscccloudfrontoriginrequestpolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontoriginrequestpolicy"

dataawscccloudfrontoriginrequestpolicy.NewDataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookieBehavior">CookieBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookies">Cookies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CookieBehavior`<sup>Required</sup> <a name="CookieBehavior" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookieBehavior"></a>

```go
func CookieBehavior() *string
```

- *Type:* *string

---

##### `Cookies`<sup>Required</sup> <a name="Cookies" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.cookies"></a>

```go
func Cookies() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfig</a>

---


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontoriginrequestpolicy"

dataawscccloudfrontoriginrequestpolicy.NewDataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headerBehavior">HeaderBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headers">Headers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderBehavior`<sup>Required</sup> <a name="HeaderBehavior" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headerBehavior"></a>

```go
func HeaderBehavior() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.headers"></a>

```go
func Headers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfig</a>

---


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontoriginrequestpolicy"

dataawscccloudfrontoriginrequestpolicy.NewDataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.cookiesConfig">CookiesConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.headersConfig">HeadersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.queryStringsConfig">QueryStringsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CookiesConfig`<sup>Required</sup> <a name="CookiesConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.cookiesConfig"></a>

```go
func CookiesConfig() DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigCookiesConfigOutputReference</a>

---

##### `HeadersConfig`<sup>Required</sup> <a name="HeadersConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.headersConfig"></a>

```go
func HeadersConfig() DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigHeadersConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QueryStringsConfig`<sup>Required</sup> <a name="QueryStringsConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.queryStringsConfig"></a>

```go
func QueryStringsConfig() DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfig</a>

---


### DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference <a name="DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontoriginrequestpolicy"

dataawscccloudfrontoriginrequestpolicy.NewDataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStringBehavior">QueryStringBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStrings">QueryStrings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryStringBehavior`<sup>Required</sup> <a name="QueryStringBehavior" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStringBehavior"></a>

```go
func QueryStringBehavior() *string
```

- *Type:* *string

---

##### `QueryStrings`<sup>Required</sup> <a name="QueryStrings" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.queryStrings"></a>

```go
func QueryStrings() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginRequestPolicy.DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig">DataAwsccCloudfrontOriginRequestPolicyOriginRequestPolicyConfigQueryStringsConfig</a>

---



