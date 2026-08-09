# `dataAwsccApigatewayv2RouteResponse` Submodule <a name="`dataAwsccApigatewayv2RouteResponse` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayv2RouteResponse <a name="DataAwsccApigatewayv2RouteResponse" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigatewayv2_route_response awscc_apigatewayv2_route_response}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.Initializer"></a>

```typescript
import { dataAwsccApigatewayv2RouteResponse } from '@cdktn/provider-awscc'

new dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse(scope: Construct, id: string, config: DataAwsccApigatewayv2RouteResponseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig">DataAwsccApigatewayv2RouteResponseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig">DataAwsccApigatewayv2RouteResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayv2RouteResponse resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isConstruct"></a>

```typescript
import { dataAwsccApigatewayv2RouteResponse } from '@cdktn/provider-awscc'

dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isTerraformElement"></a>

```typescript
import { dataAwsccApigatewayv2RouteResponse } from '@cdktn/provider-awscc'

dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isTerraformDataSource"></a>

```typescript
import { dataAwsccApigatewayv2RouteResponse } from '@cdktn/provider-awscc'

dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.generateConfigForImport"></a>

```typescript
import { dataAwsccApigatewayv2RouteResponse } from '@cdktn/provider-awscc'

dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccApigatewayv2RouteResponse resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApigatewayv2RouteResponse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApigatewayv2RouteResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigatewayv2_route_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayv2RouteResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.modelSelectionExpression">modelSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.responseModels">responseModels</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.responseParameters">responseParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap">DataAwsccApigatewayv2RouteResponseResponseParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.routeId">routeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.routeResponseId">routeResponseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.routeResponseKey">routeResponseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `modelSelectionExpression`<sup>Required</sup> <a name="modelSelectionExpression" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.modelSelectionExpression"></a>

```typescript
public readonly modelSelectionExpression: string;
```

- *Type:* string

---

##### `responseModels`<sup>Required</sup> <a name="responseModels" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.responseModels"></a>

```typescript
public readonly responseModels: string;
```

- *Type:* string

---

##### `responseParameters`<sup>Required</sup> <a name="responseParameters" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.responseParameters"></a>

```typescript
public readonly responseParameters: DataAwsccApigatewayv2RouteResponseResponseParametersMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap">DataAwsccApigatewayv2RouteResponseResponseParametersMap</a>

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.routeId"></a>

```typescript
public readonly routeId: string;
```

- *Type:* string

---

##### `routeResponseId`<sup>Required</sup> <a name="routeResponseId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.routeResponseId"></a>

```typescript
public readonly routeResponseId: string;
```

- *Type:* string

---

##### `routeResponseKey`<sup>Required</sup> <a name="routeResponseKey" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.routeResponseKey"></a>

```typescript
public readonly routeResponseKey: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponse.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayv2RouteResponseConfig <a name="DataAwsccApigatewayv2RouteResponseConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.Initializer"></a>

```typescript
import { dataAwsccApigatewayv2RouteResponse } from '@cdktn/provider-awscc'

const dataAwsccApigatewayv2RouteResponseConfig: dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigatewayv2_route_response#id DataAwsccApigatewayv2RouteResponse#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayv2RouteResponseResponseParameters <a name="DataAwsccApigatewayv2RouteResponseResponseParameters" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParameters.Initializer"></a>

```typescript
import { dataAwsccApigatewayv2RouteResponse } from '@cdktn/provider-awscc'

const dataAwsccApigatewayv2RouteResponseResponseParameters: dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParameters = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayv2RouteResponseResponseParametersMap <a name="DataAwsccApigatewayv2RouteResponseResponseParametersMap" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.Initializer"></a>

```typescript
import { dataAwsccApigatewayv2RouteResponse } from '@cdktn/provider-awscc'

new dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.get"></a>

```typescript
public get(key: string): DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference <a name="DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayv2RouteResponse } from '@cdktn/provider-awscc'

new dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.property.required">required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParameters">DataAwsccApigatewayv2RouteResponseResponseParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.property.required"></a>

```typescript
public readonly required: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayv2RouteResponseResponseParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RouteResponse.DataAwsccApigatewayv2RouteResponseResponseParameters">DataAwsccApigatewayv2RouteResponseResponseParameters</a>

---



