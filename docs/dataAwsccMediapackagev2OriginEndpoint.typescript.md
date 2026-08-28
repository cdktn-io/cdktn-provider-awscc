# `dataAwsccMediapackagev2OriginEndpoint` Submodule <a name="`dataAwsccMediapackagev2OriginEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediapackagev2OriginEndpoint <a name="DataAwsccMediapackagev2OriginEndpoint" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediapackagev2_origin_endpoint awscc_mediapackagev2_origin_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint(scope: Construct, id: string, config: DataAwsccMediapackagev2OriginEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig">DataAwsccMediapackagev2OriginEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig">DataAwsccMediapackagev2OriginEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediapackagev2OriginEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isConstruct"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformElement"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMediapackagev2OriginEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediapackagev2OriginEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediapackagev2OriginEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediapackagev2_origin_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediapackagev2OriginEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.containerType">containerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dashManifests">dashManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList">DataAwsccMediapackagev2OriginEndpointDashManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dashManifestUrls">dashManifestUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.forceEndpointErrorConfiguration">forceEndpointErrorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.hlsManifests">hlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList">DataAwsccMediapackagev2OriginEndpointHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.hlsManifestUrls">hlsManifestUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lowLatencyHlsManifests">lowLatencyHlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lowLatencyHlsManifestUrls">lowLatencyHlsManifestUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.mssManifests">mssManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList">DataAwsccMediapackagev2OriginEndpointMssManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.mssManifestUrls">mssManifestUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.originEndpointName">originEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.segment">segment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.startoverWindowSeconds">startoverWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList">DataAwsccMediapackagev2OriginEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.uriSeparator">uriSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.containerType"></a>

```typescript
public readonly containerType: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dashManifests`<sup>Required</sup> <a name="dashManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dashManifests"></a>

```typescript
public readonly dashManifests: DataAwsccMediapackagev2OriginEndpointDashManifestsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList">DataAwsccMediapackagev2OriginEndpointDashManifestsList</a>

---

##### `dashManifestUrls`<sup>Required</sup> <a name="dashManifestUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.dashManifestUrls"></a>

```typescript
public readonly dashManifestUrls: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `forceEndpointErrorConfiguration`<sup>Required</sup> <a name="forceEndpointErrorConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.forceEndpointErrorConfiguration"></a>

```typescript
public readonly forceEndpointErrorConfiguration: DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference</a>

---

##### `hlsManifests`<sup>Required</sup> <a name="hlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.hlsManifests"></a>

```typescript
public readonly hlsManifests: DataAwsccMediapackagev2OriginEndpointHlsManifestsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList">DataAwsccMediapackagev2OriginEndpointHlsManifestsList</a>

---

##### `hlsManifestUrls`<sup>Required</sup> <a name="hlsManifestUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.hlsManifestUrls"></a>

```typescript
public readonly hlsManifestUrls: string[];
```

- *Type:* string[]

---

##### `lowLatencyHlsManifests`<sup>Required</sup> <a name="lowLatencyHlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lowLatencyHlsManifests"></a>

```typescript
public readonly lowLatencyHlsManifests: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList</a>

---

##### `lowLatencyHlsManifestUrls`<sup>Required</sup> <a name="lowLatencyHlsManifestUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.lowLatencyHlsManifestUrls"></a>

```typescript
public readonly lowLatencyHlsManifestUrls: string[];
```

- *Type:* string[]

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `mssManifests`<sup>Required</sup> <a name="mssManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.mssManifests"></a>

```typescript
public readonly mssManifests: DataAwsccMediapackagev2OriginEndpointMssManifestsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList">DataAwsccMediapackagev2OriginEndpointMssManifestsList</a>

---

##### `mssManifestUrls`<sup>Required</sup> <a name="mssManifestUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.mssManifestUrls"></a>

```typescript
public readonly mssManifestUrls: string[];
```

- *Type:* string[]

---

##### `originEndpointName`<sup>Required</sup> <a name="originEndpointName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.originEndpointName"></a>

```typescript
public readonly originEndpointName: string;
```

- *Type:* string

---

##### `segment`<sup>Required</sup> <a name="segment" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.segment"></a>

```typescript
public readonly segment: DataAwsccMediapackagev2OriginEndpointSegmentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentOutputReference</a>

---

##### `startoverWindowSeconds`<sup>Required</sup> <a name="startoverWindowSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.startoverWindowSeconds"></a>

```typescript
public readonly startoverWindowSeconds: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.tags"></a>

```typescript
public readonly tags: DataAwsccMediapackagev2OriginEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList">DataAwsccMediapackagev2OriginEndpointTagsList</a>

---

##### `uriSeparator`<sup>Required</sup> <a name="uriSeparator" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.uriSeparator"></a>

```typescript
public readonly uriSeparator: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediapackagev2OriginEndpointConfig <a name="DataAwsccMediapackagev2OriginEndpointConfig" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointConfig: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediapackagev2_origin_endpoint#id DataAwsccMediapackagev2OriginEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediapackagev2OriginEndpointDashManifests <a name="DataAwsccMediapackagev2OriginEndpointDashManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifests.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointDashManifests: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifests = { ... }
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration = { ... }
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls = { ... }
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings = { ... }
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics = { ... }
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload = { ... }
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration = { ... }
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation = { ... }
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointDashManifestsScteDash: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash = { ... }
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration = { ... }
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration = { ... }
```


### DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming = { ... }
```


### DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration <a name="DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration = { ... }
```


### DataAwsccMediapackagev2OriginEndpointHlsManifests <a name="DataAwsccMediapackagev2OriginEndpointHlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifests.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointHlsManifests: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifests = { ... }
```


### DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration = { ... }
```


### DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls = { ... }
```


### DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag = { ... }
```


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests = { ... }
```


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration = { ... }
```


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls = { ... }
```


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag = { ... }
```


### DataAwsccMediapackagev2OriginEndpointMssManifests <a name="DataAwsccMediapackagev2OriginEndpointMssManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifests.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointMssManifests: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifests = { ... }
```


### DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration <a name="DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration = { ... }
```


### DataAwsccMediapackagev2OriginEndpointSegment <a name="DataAwsccMediapackagev2OriginEndpointSegment" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegment.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointSegment: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegment = { ... }
```


### DataAwsccMediapackagev2OriginEndpointSegmentEncryption <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryption" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryption.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointSegmentEncryption: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryption = { ... }
```


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod = { ... }
```


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider = { ... }
```


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration = { ... }
```


### DataAwsccMediapackagev2OriginEndpointSegmentScte <a name="DataAwsccMediapackagev2OriginEndpointSegmentScte" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScte"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScte.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointSegmentScte: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScte = { ... }
```


### DataAwsccMediapackagev2OriginEndpointTags <a name="DataAwsccMediapackagev2OriginEndpointTags" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTags.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const dataAwsccMediapackagev2OriginEndpointTags: dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fixedAvailabilityStartTime">fixedAvailabilityStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedAvailabilityStartTime`<sup>Required</sup> <a name="fixedAvailabilityStartTime" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fixedAvailabilityStartTime"></a>

```typescript
public readonly fixedAvailabilityStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.get"></a>

```typescript
public get(index: number): DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbPriority">dvbPriority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbWeight">dvbWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.serviceLocation">serviceLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls">DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dvbPriority`<sup>Required</sup> <a name="dvbPriority" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbPriority"></a>

```typescript
public readonly dvbPriority: number;
```

- *Type:* number

---

##### `dvbWeight`<sup>Required</sup> <a name="dvbWeight" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbWeight"></a>

```typescript
public readonly dvbWeight: number;
```

- *Type:* number

---

##### `serviceLocation`<sup>Required</sup> <a name="serviceLocation" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.serviceLocation"></a>

```typescript
public readonly serviceLocation: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls">DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.get"></a>

```typescript
public get(index: number): DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.probability">probability</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.reportingUrl">reportingUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `probability`<sup>Required</sup> <a name="probability" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.probability"></a>

```typescript
public readonly probability: number;
```

- *Type:* number

---

##### `reportingUrl`<sup>Required</sup> <a name="reportingUrl" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.reportingUrl"></a>

```typescript
public readonly reportingUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fontFamily">fontFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fontFamily`<sup>Required</sup> <a name="fontFamily" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fontFamily"></a>

```typescript
public readonly fontFamily: string;
```

- *Type:* string

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.errorMetrics">errorMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fontDownload">fontDownload</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorMetrics`<sup>Required</sup> <a name="errorMetrics" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.errorMetrics"></a>

```typescript
public readonly errorMetrics: DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList</a>

---

##### `fontDownload`<sup>Required</sup> <a name="fontDownload" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fontDownload"></a>

```typescript
public readonly fontDownload: DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.clipStartTime">clipStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.drmSettings">drmSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.manifestFilter">manifestFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">timeDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clipStartTime`<sup>Required</sup> <a name="clipStartTime" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```typescript
public readonly clipStartTime: string;
```

- *Type:* string

---

##### `drmSettings`<sup>Required</sup> <a name="drmSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```typescript
public readonly drmSettings: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `manifestFilter`<sup>Required</sup> <a name="manifestFilter" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```typescript
public readonly manifestFilter: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `timeDelaySeconds`<sup>Required</sup> <a name="timeDelaySeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```typescript
public readonly timeDelaySeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsList <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.get"></a>

```typescript
public get(index: number): DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.audioTimelinePattern">audioTimelinePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.availabilityStartTimeConfiguration">availabilityStartTimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.baseUrls">baseUrls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList">DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.compactness">compactness</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.drmSignaling">drmSignaling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.dvbSettings">dvbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestName">manifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.minBufferTimeSeconds">minBufferTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.minUpdatePeriodSeconds">minUpdatePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.periodTriggers">periodTriggers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.profiles">profiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.programInformation">programInformation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.scteDash">scteDash</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.segmentTemplateFormat">segmentTemplateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.subtitleConfiguration">subtitleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.suggestedPresentationDelaySeconds">suggestedPresentationDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.uriPathType">uriPathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.utcTiming">utcTiming</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifests">DataAwsccMediapackagev2OriginEndpointDashManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioTimelinePattern`<sup>Required</sup> <a name="audioTimelinePattern" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.audioTimelinePattern"></a>

```typescript
public readonly audioTimelinePattern: string;
```

- *Type:* string

---

##### `availabilityStartTimeConfiguration`<sup>Required</sup> <a name="availabilityStartTimeConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.availabilityStartTimeConfiguration"></a>

```typescript
public readonly availabilityStartTimeConfiguration: DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference</a>

---

##### `baseUrls`<sup>Required</sup> <a name="baseUrls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.baseUrls"></a>

```typescript
public readonly baseUrls: DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList">DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList</a>

---

##### `compactness`<sup>Required</sup> <a name="compactness" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.compactness"></a>

```typescript
public readonly compactness: string;
```

- *Type:* string

---

##### `drmSignaling`<sup>Required</sup> <a name="drmSignaling" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.drmSignaling"></a>

```typescript
public readonly drmSignaling: string;
```

- *Type:* string

---

##### `dvbSettings`<sup>Required</sup> <a name="dvbSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.dvbSettings"></a>

```typescript
public readonly dvbSettings: DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference</a>

---

##### `filterConfiguration`<sup>Required</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.filterConfiguration"></a>

```typescript
public readonly filterConfiguration: DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference</a>

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `minBufferTimeSeconds`<sup>Required</sup> <a name="minBufferTimeSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.minBufferTimeSeconds"></a>

```typescript
public readonly minBufferTimeSeconds: number;
```

- *Type:* number

---

##### `minUpdatePeriodSeconds`<sup>Required</sup> <a name="minUpdatePeriodSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.minUpdatePeriodSeconds"></a>

```typescript
public readonly minUpdatePeriodSeconds: number;
```

- *Type:* number

---

##### `periodTriggers`<sup>Required</sup> <a name="periodTriggers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.periodTriggers"></a>

```typescript
public readonly periodTriggers: string[];
```

- *Type:* string[]

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.profiles"></a>

```typescript
public readonly profiles: string[];
```

- *Type:* string[]

---

##### `programInformation`<sup>Required</sup> <a name="programInformation" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.programInformation"></a>

```typescript
public readonly programInformation: DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference</a>

---

##### `scteDash`<sup>Required</sup> <a name="scteDash" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.scteDash"></a>

```typescript
public readonly scteDash: DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference</a>

---

##### `segmentTemplateFormat`<sup>Required</sup> <a name="segmentTemplateFormat" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.segmentTemplateFormat"></a>

```typescript
public readonly segmentTemplateFormat: string;
```

- *Type:* string

---

##### `subtitleConfiguration`<sup>Required</sup> <a name="subtitleConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.subtitleConfiguration"></a>

```typescript
public readonly subtitleConfiguration: DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference</a>

---

##### `suggestedPresentationDelaySeconds`<sup>Required</sup> <a name="suggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.suggestedPresentationDelaySeconds"></a>

```typescript
public readonly suggestedPresentationDelaySeconds: number;
```

- *Type:* number

---

##### `uriPathType`<sup>Required</sup> <a name="uriPathType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.uriPathType"></a>

```typescript
public readonly uriPathType: string;
```

- *Type:* string

---

##### `utcTiming`<sup>Required</sup> <a name="utcTiming" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.utcTiming"></a>

```typescript
public readonly utcTiming: DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointDashManifests;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifests">DataAwsccMediapackagev2OriginEndpointDashManifests</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.copyright">copyright</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.moreInformationUrl">moreInformationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation">DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `copyright`<sup>Required</sup> <a name="copyright" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.copyright"></a>

```typescript
public readonly copyright: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `moreInformationUrl`<sup>Required</sup> <a name="moreInformationUrl" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.moreInformationUrl"></a>

```typescript
public readonly moreInformationUrl: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation">DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.adMarkerDash">adMarkerDash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.scteInManifests">scteInManifests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash">DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adMarkerDash`<sup>Required</sup> <a name="adMarkerDash" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.adMarkerDash"></a>

```typescript
public readonly adMarkerDash: string;
```

- *Type:* string

---

##### `scteInManifests`<sup>Required</sup> <a name="scteInManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.scteInManifests"></a>

```typescript
public readonly scteInManifests: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash">DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.ttmlConfiguration">ttmlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttmlConfiguration`<sup>Required</sup> <a name="ttmlConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.ttmlConfiguration"></a>

```typescript
public readonly ttmlConfiguration: DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.ttmlProfile">ttmlProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttmlProfile`<sup>Required</sup> <a name="ttmlProfile" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.ttmlProfile"></a>

```typescript
public readonly ttmlProfile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration">DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference <a name="DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingMode">timingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingSource">timingSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming">DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timingMode`<sup>Required</sup> <a name="timingMode" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingMode"></a>

```typescript
public readonly timingMode: string;
```

- *Type:* string

---

##### `timingSource`<sup>Required</sup> <a name="timingSource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingSource"></a>

```typescript
public readonly timingSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming">DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming</a>

---


### DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.endpointErrorConditions">endpointErrorConditions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration">DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointErrorConditions`<sup>Required</sup> <a name="endpointErrorConditions" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.endpointErrorConditions"></a>

```typescript
public readonly endpointErrorConditions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration">DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.clipStartTime">clipStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.drmSettings">drmSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.manifestFilter">manifestFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">timeDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clipStartTime`<sup>Required</sup> <a name="clipStartTime" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```typescript
public readonly clipStartTime: string;
```

- *Type:* string

---

##### `drmSettings`<sup>Required</sup> <a name="drmSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```typescript
public readonly drmSettings: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `manifestFilter`<sup>Required</sup> <a name="manifestFilter" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```typescript
public readonly manifestFilter: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `timeDelaySeconds`<sup>Required</sup> <a name="timeDelaySeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```typescript
public readonly timeDelaySeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointHlsManifestsList <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.get"></a>

```typescript
public get(index: number): DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.childManifestName">childManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestName">manifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">programDateTimeIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.scteHls">scteHls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.startTag">startTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.uriPathType">uriPathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlEncodeChildManifest">urlEncodeChildManifest</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifests">DataAwsccMediapackagev2OriginEndpointHlsManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `childManifestName`<sup>Required</sup> <a name="childManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.childManifestName"></a>

```typescript
public readonly childManifestName: string;
```

- *Type:* string

---

##### `filterConfiguration`<sup>Required</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.filterConfiguration"></a>

```typescript
public readonly filterConfiguration: DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference</a>

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `programDateTimeIntervalSeconds`<sup>Required</sup> <a name="programDateTimeIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```typescript
public readonly programDateTimeIntervalSeconds: number;
```

- *Type:* number

---

##### `scteHls`<sup>Required</sup> <a name="scteHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.scteHls"></a>

```typescript
public readonly scteHls: DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference</a>

---

##### `startTag`<sup>Required</sup> <a name="startTag" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.startTag"></a>

```typescript
public readonly startTag: DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference">DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference</a>

---

##### `uriPathType`<sup>Required</sup> <a name="uriPathType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.uriPathType"></a>

```typescript
public readonly uriPathType: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `urlEncodeChildManifest`<sup>Required</sup> <a name="urlEncodeChildManifest" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlEncodeChildManifest"></a>

```typescript
public readonly urlEncodeChildManifest: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointHlsManifests;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifests">DataAwsccMediapackagev2OriginEndpointHlsManifests</a>

---


### DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.adMarkerHls">adMarkerHls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.scteInManifests">scteInManifests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls">DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adMarkerHls`<sup>Required</sup> <a name="adMarkerHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.adMarkerHls"></a>

```typescript
public readonly adMarkerHls: string;
```

- *Type:* string

---

##### `scteInManifests`<sup>Required</sup> <a name="scteInManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.scteInManifests"></a>

```typescript
public readonly scteInManifests: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls">DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls</a>

---


### DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference <a name="DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.precise">precise</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.timeOffset">timeOffset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag">DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `precise`<sup>Required</sup> <a name="precise" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.precise"></a>

```typescript
public readonly precise: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `timeOffset`<sup>Required</sup> <a name="timeOffset" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.timeOffset"></a>

```typescript
public readonly timeOffset: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag">DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag</a>

---


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.clipStartTime">clipStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.drmSettings">drmSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.manifestFilter">manifestFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">timeDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clipStartTime`<sup>Required</sup> <a name="clipStartTime" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```typescript
public readonly clipStartTime: string;
```

- *Type:* string

---

##### `drmSettings`<sup>Required</sup> <a name="drmSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```typescript
public readonly drmSettings: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `manifestFilter`<sup>Required</sup> <a name="manifestFilter" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```typescript
public readonly manifestFilter: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `timeDelaySeconds`<sup>Required</sup> <a name="timeDelaySeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```typescript
public readonly timeDelaySeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.get"></a>

```typescript
public get(index: number): DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.childManifestName">childManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestName">manifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">programDateTimeIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.scteHls">scteHls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.startTag">startTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.uriPathType">uriPathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlEncodeChildManifest">urlEncodeChildManifest</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `childManifestName`<sup>Required</sup> <a name="childManifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.childManifestName"></a>

```typescript
public readonly childManifestName: string;
```

- *Type:* string

---

##### `filterConfiguration`<sup>Required</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.filterConfiguration"></a>

```typescript
public readonly filterConfiguration: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference</a>

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `programDateTimeIntervalSeconds`<sup>Required</sup> <a name="programDateTimeIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```typescript
public readonly programDateTimeIntervalSeconds: number;
```

- *Type:* number

---

##### `scteHls`<sup>Required</sup> <a name="scteHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.scteHls"></a>

```typescript
public readonly scteHls: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference</a>

---

##### `startTag`<sup>Required</sup> <a name="startTag" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.startTag"></a>

```typescript
public readonly startTag: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference</a>

---

##### `uriPathType`<sup>Required</sup> <a name="uriPathType" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.uriPathType"></a>

```typescript
public readonly uriPathType: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `urlEncodeChildManifest`<sup>Required</sup> <a name="urlEncodeChildManifest" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlEncodeChildManifest"></a>

```typescript
public readonly urlEncodeChildManifest: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests</a>

---


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.adMarkerHls">adMarkerHls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.scteInManifests">scteInManifests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adMarkerHls`<sup>Required</sup> <a name="adMarkerHls" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.adMarkerHls"></a>

```typescript
public readonly adMarkerHls: string;
```

- *Type:* string

---

##### `scteInManifests`<sup>Required</sup> <a name="scteInManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.scteInManifests"></a>

```typescript
public readonly scteInManifests: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls</a>

---


### DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference <a name="DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.precise">precise</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.timeOffset">timeOffset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `precise`<sup>Required</sup> <a name="precise" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.precise"></a>

```typescript
public readonly precise: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `timeOffset`<sup>Required</sup> <a name="timeOffset" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.timeOffset"></a>

```typescript
public readonly timeOffset: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag">DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag</a>

---


### DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.clipStartTime">clipStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.drmSettings">drmSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.manifestFilter">manifestFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">timeDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clipStartTime`<sup>Required</sup> <a name="clipStartTime" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```typescript
public readonly clipStartTime: string;
```

- *Type:* string

---

##### `drmSettings`<sup>Required</sup> <a name="drmSettings" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```typescript
public readonly drmSettings: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `manifestFilter`<sup>Required</sup> <a name="manifestFilter" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```typescript
public readonly manifestFilter: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `timeDelaySeconds`<sup>Required</sup> <a name="timeDelaySeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```typescript
public readonly timeDelaySeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration">DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointMssManifestsList <a name="DataAwsccMediapackagev2OriginEndpointMssManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.get"></a>

```typescript
public get(index: number): DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestLayout">manifestLayout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestName">manifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifests">DataAwsccMediapackagev2OriginEndpointMssManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterConfiguration`<sup>Required</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.filterConfiguration"></a>

```typescript
public readonly filterConfiguration: DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference</a>

---

##### `manifestLayout`<sup>Required</sup> <a name="manifestLayout" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestLayout"></a>

```typescript
public readonly manifestLayout: string;
```

- *Type:* string

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointMssManifests;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointMssManifests">DataAwsccMediapackagev2OriginEndpointMssManifests</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.cmafEncryptionMethod">cmafEncryptionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.ismEncryptionMethod">ismEncryptionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.tsEncryptionMethod">tsEncryptionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cmafEncryptionMethod`<sup>Required</sup> <a name="cmafEncryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.cmafEncryptionMethod"></a>

```typescript
public readonly cmafEncryptionMethod: string;
```

- *Type:* string

---

##### `ismEncryptionMethod`<sup>Required</sup> <a name="ismEncryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.ismEncryptionMethod"></a>

```typescript
public readonly ismEncryptionMethod: string;
```

- *Type:* string

---

##### `tsEncryptionMethod`<sup>Required</sup> <a name="tsEncryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.tsEncryptionMethod"></a>

```typescript
public readonly tsEncryptionMethod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.cmafExcludeSegmentDrmMetadata">cmafExcludeSegmentDrmMetadata</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.constantInitializationVector">constantInitializationVector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.encryptionMethod">encryptionMethod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.keyRotationIntervalSeconds">keyRotationIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.spekeKeyProvider">spekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryption">DataAwsccMediapackagev2OriginEndpointSegmentEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cmafExcludeSegmentDrmMetadata`<sup>Required</sup> <a name="cmafExcludeSegmentDrmMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.cmafExcludeSegmentDrmMetadata"></a>

```typescript
public readonly cmafExcludeSegmentDrmMetadata: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `constantInitializationVector`<sup>Required</sup> <a name="constantInitializationVector" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.constantInitializationVector"></a>

```typescript
public readonly constantInitializationVector: string;
```

- *Type:* string

---

##### `encryptionMethod`<sup>Required</sup> <a name="encryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.encryptionMethod"></a>

```typescript
public readonly encryptionMethod: DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference</a>

---

##### `keyRotationIntervalSeconds`<sup>Required</sup> <a name="keyRotationIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.keyRotationIntervalSeconds"></a>

```typescript
public readonly keyRotationIntervalSeconds: number;
```

- *Type:* number

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="spekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.spekeKeyProvider"></a>

```typescript
public readonly spekeKeyProvider: DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointSegmentEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryption">DataAwsccMediapackagev2OriginEndpointSegmentEncryption</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">presetSpeke20Audio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">presetSpeke20Video</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `presetSpeke20Audio`<sup>Required</sup> <a name="presetSpeke20Audio" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```typescript
public readonly presetSpeke20Audio: string;
```

- *Type:* string

---

##### `presetSpeke20Video`<sup>Required</sup> <a name="presetSpeke20Video" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```typescript
public readonly presetSpeke20Video: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.drmSystems">drmSystems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">encryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `drmSystems`<sup>Required</sup> <a name="drmSystems" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.drmSystems"></a>

```typescript
public readonly drmSystems: string[];
```

- *Type:* string[]

---

##### `encryptionContractConfiguration`<sup>Required</sup> <a name="encryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```typescript
public readonly encryptionContractConfiguration: DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.includeIframeOnlyStreams">includeIframeOnlyStreams</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.outputTimestampMode">outputTimestampMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.scte">scte</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.segmentDurationSeconds">segmentDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.tsIncludeDvbSubtitles">tsIncludeDvbSubtitles</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.tsUseAudioRenditionGroup">tsUseAudioRenditionGroup</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegment">DataAwsccMediapackagev2OriginEndpointSegment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.encryption"></a>

```typescript
public readonly encryption: DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference</a>

---

##### `includeIframeOnlyStreams`<sup>Required</sup> <a name="includeIframeOnlyStreams" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.includeIframeOnlyStreams"></a>

```typescript
public readonly includeIframeOnlyStreams: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `outputTimestampMode`<sup>Required</sup> <a name="outputTimestampMode" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.outputTimestampMode"></a>

```typescript
public readonly outputTimestampMode: string;
```

- *Type:* string

---

##### `scte`<sup>Required</sup> <a name="scte" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.scte"></a>

```typescript
public readonly scte: DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference">DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference</a>

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="segmentDurationSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.segmentDurationSeconds"></a>

```typescript
public readonly segmentDurationSeconds: number;
```

- *Type:* number

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `tsIncludeDvbSubtitles`<sup>Required</sup> <a name="tsIncludeDvbSubtitles" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.tsIncludeDvbSubtitles"></a>

```typescript
public readonly tsIncludeDvbSubtitles: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tsUseAudioRenditionGroup`<sup>Required</sup> <a name="tsUseAudioRenditionGroup" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.tsUseAudioRenditionGroup"></a>

```typescript
public readonly tsUseAudioRenditionGroup: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointSegment;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegment">DataAwsccMediapackagev2OriginEndpointSegment</a>

---


### DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference <a name="DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.customAdTypes">customAdTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.scteFilter">scteFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.scteInSegments">scteInSegments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScte">DataAwsccMediapackagev2OriginEndpointSegmentScte</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customAdTypes`<sup>Required</sup> <a name="customAdTypes" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.customAdTypes"></a>

```typescript
public readonly customAdTypes: string[];
```

- *Type:* string[]

---

##### `scteFilter`<sup>Required</sup> <a name="scteFilter" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.scteFilter"></a>

```typescript
public readonly scteFilter: string[];
```

- *Type:* string[]

---

##### `scteInSegments`<sup>Required</sup> <a name="scteInSegments" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.scteInSegments"></a>

```typescript
public readonly scteInSegments: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointSegmentScte;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointSegmentScte">DataAwsccMediapackagev2OriginEndpointSegmentScte</a>

---


### DataAwsccMediapackagev2OriginEndpointTagsList <a name="DataAwsccMediapackagev2OriginEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.get"></a>

```typescript
public get(index: number): DataAwsccMediapackagev2OriginEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediapackagev2OriginEndpointTagsOutputReference <a name="DataAwsccMediapackagev2OriginEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTags">DataAwsccMediapackagev2OriginEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagev2OriginEndpointTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagev2OriginEndpoint.DataAwsccMediapackagev2OriginEndpointTags">DataAwsccMediapackagev2OriginEndpointTags</a>

---



